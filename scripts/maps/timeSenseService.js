'use strict'

var app = angular.module('mapsApp');
app.factory('timeSenseService', ['$q',
                                 'PtMapsConfig',
                                 '$rootScope',
                                 'mapDistanceMatrix',
                                 'mapsProp',
    function ($q, PtMapsConfig, $rootScope, mapDistanceMatrix, mapsProp) {
        var timeLimits;
        var travelTimePolygons;
        var travelTimeFlag;
        var travelTimeDefer;
        var map;
        var reachability = {};
        var ploygonOverlapFlag;
        var start, end;

        Math.log2 = Math.log2 || function (num) {
            return (Math.log(num) / Math.log(2));
        }
        var drawTimeSense = function (timeArg, data) {
            var mPromises = [];
            var heatMapConfig = PtMapsConfig.travelHeatMapConfig;
            var directions = heatMapConfig.directions;
            var destination;
            var i;
            var j;
            var len;
            var source = {
                latitude: data.latitude,
                longitude: data.longitude
            };
            for (i = 0, len = directions.length; i < len; i++) {
                destination = {
                    latitude: source.latitude + directions[i].lat,
                    longitude: source.longitude + directions[i].lng
                }
                mPromises.push(mapDistanceMatrix.fetch(source, destination));
            }

            start = new Date().getTime();

            $q.all(mPromises).then(function (responses) {
                var m = 0;
                var inverseSum = 0;
                var result;
                var time;
                var responsesCount = 0;
                travelTimeDefer = $q.defer();
                travelTimeFlag = true;
                timeLimits = {};
                travelTimePolygons = {};
                reachability = {};
                ploygonOverlapFlag = false;

                //Stop the process using promises on successful completion or failure
                travelTimeDefer.promise.then(function (result) { //success
                    var obj = mapsProp.getDeferredObject();
                    mapsProp.setTimeLayer(timeLimits);
                    obj.resolve();
                    return timeLimits;

                }, function (reason) { //failure
                    travelTimeFlag = false;
                    timeLimits = undefined;
                    console.log(reason);

                });
                for (j = 0, len = responses.length; j < len; j++) {
                    if (responses[j].status === 'OK') {
                        //Take all the times values and add their inverse time 
                        //to get the distance covered in one time minunte.
                        if (responses[j].results.rows[0].elements[0].duration) {
                            result = responses[j].results.rows[0].elements[0].duration.text.split(" ");
                            if (result.length === 4) {
                                time = parseInt(result[0]) * 60 + parseInt(result[2]);
                            } else {
                                time = parseInt(result[0]);
                            }

                            if (time) {
                                inverseSum = inverseSum + 1 / time;
                            }
                            responsesCount = responsesCount + 1;
                        }
                    }
                }

                if (!responsesCount) {
                    travelTimeDefer.reject('Count :' + responsesCount);
                    return;
                }

                m = heatMapConfig.delta * inverseSum / responsesCount;

                var index;
                timeArg = parseInt(timeArg, 10);
                switch (timeArg) {
                case 10:
                    index = 0;
                    break;
                case 20:
                    index = 1;
                    break;
                case 30:
                    index = 2;
                    break;
                default:
                    index = 0;
                }
                processTimeHeatMapTime(index, source, m); //Initial index is 0
            });
        }

        function processTimeHeatMapTime(configIndex, source, m) {
            var angInc;
            var timeLimit;
            var heatMapConfig = PtMapsConfig.travelHeatMapConfig;
            var currentConfig;

            if (configIndex < heatMapConfig.timeSequence.length) {
                currentConfig = heatMapConfig.timeSequence[configIndex];
                angInc = currentConfig.degree;
                timeLimit = currentConfig.time;
                initPts(source, timeLimit, 0, angInc, m, configIndex); //Intial angle is 0 radians.
            } else {
                travelTimeDefer.resolve();
            }
        }

        function initPts(source, timeLimit, ang, angInc, m, configIndex) {
            var l;
            var i, j, k;
            var len, lenj, lenk;
            var destination;
            var currentConfig = PtMapsConfig.travelHeatMapConfig.timeSequence[configIndex];
            var coordArr;
            var coord;
            var timeLimitValue;

            if (ang < 2 * Math.PI) {
                l = timeLimit * m * 0.8;
                destination = {
                    latitude: source.latitude + l * Math.cos(ang),
                    longitude: source.longitude + l * Math.sin(ang)
                };
                calculateDistanceDrive(source, destination, timeLimit, ang, angInc, m, configIndex, 0);
            } else {
                travelTimeDefer.resolve();
            }
        }

        function calculateDistanceDrive(source, destination, timeLimit, ang, angInc, m, configIndex, repeatCount) {
            mapDistanceMatrix.fetch(source, destination).then(function (response) {
                if (response.status === 'ERROR') {
                    travelTimeDefer.reject(response);
                    return;
                } else if (!response.results.rows[0].elements[0].duration) {
                    var nearestTimeLimitsArr;
                    var timeLimitKeys = Object.keys(timeLimits);
                    var maxKey;
                    var minDiff;
                    var w;
                    var minDistance = Infinity;
                    var distance;
                    var minDistanceIndex;
                    var destLatLng = new google.maps.LatLng(destination.latitude, destination.longitude);
                    var closeLatLng;
                    var i;
                    var len;

                    if (timeLimitKeys.length > 1) {
                        minDiff = 100;
                        for (i in timeLimitKeys) {
                            w = timeLimit - timeLimitKeys[i];
                            if (w > 0 && w < minDiff) {
                                minDiff = w;
                                maxKey = timeLimitKeys[i];
                            }
                        }

                        nearestTimeLimitsArr = timeLimits[maxKey];

                        for (i = 0, len = nearestTimeLimitsArr.length; i < len; i++) {
                            closeLatLng = new google.maps.LatLng(nearestTimeLimitsArr[i].latitude, nearestTimeLimitsArr[i].longitude);
                            distance = google.maps.geometry.spherical.computeDistanceBetween(destLatLng, closeLatLng);
                            if (distance < minDistance) {
                                minDistance = distance;
                                minDistanceIndex = i;
                            }
                        }

                        if (isPointInOtherPolygons(destination)) {
                            destination = {
                                latitude: nearestTimeLimitsArr[minDistanceIndex].latitude + m * Math.cos(ang),
                                longitude: nearestTimeLimitsArr[minDistanceIndex].longitude + m * Math.sin(ang)
                            }
                        } else {
                            destination = {
                                latitude: (destination.latitude + nearestTimeLimitsArr[minDistanceIndex].latitude) / 2,
                                longitude: (destination.longitude + nearestTimeLimitsArr[minDistanceIndex].longitude) / 2
                            }
                        }


                        calculateEndPoints(timeLimit, timeLimit, source, destination, ang, angInc, m, configIndex, 0);
                    } else {
                        travelTimeDefer.reject(response);
                        return;
                    }


                } else {
                    var result;
                    var time;
                    result = response.results.rows[0].elements[0].duration.text.split(" ");
                    if (result.length === 4) {
                        time = parseInt(result[0]) * 60 + parseInt(result[2]);
                    } else {
                        time = parseInt(result[0]);
                    }

                    calculateEndPoints(time, timeLimit, source, destination, ang, angInc, m, configIndex, repeatCount);
                }
            });
        }

        function isPointInOtherPolygons(destination) {
            var destLatLng = new google.maps.LatLng(destination.latitude, destination.longitude);
            var flag = false;
            for (var i in travelTimePolygons) {
                if (google.maps.geometry.poly.containsLocation(destLatLng, travelTimePolygons[i].mapPolygon)) {
                    flag = true;
                    break;
                }
            }
            return flag;
        }

        function calculateEndPoints(time, timeLimit, source, destination, ang, angInc, m, configIndex, repeatCount) {
            var factor = 1;
            var l;
            var timeDiff = time - timeLimit;
            var absTimeDiff = Math.abs(timeDiff);

            if (travelTimeFlag) {

                if (timeDiff > 2) {

                    if (timeLimit <= 15) {
                        factor = 1;
                    } else {
                        factor = Math.log2(time - timeLimit);
                    }
                    l = m * factor;
                    destination.latitude = destination.latitude - l * Math.cos(ang);
                    destination.longitude = destination.longitude - l * Math.sin(ang);

                    setTimeout(function () {
                        calculateDistanceDrive(source, destination, timeLimit, ang, angInc, m, configIndex, repeatCount);
                    }, 100);
                } else {

                    if (absTimeDiff > 2) {
                        if (timeLimit === PtMapsConfig.travelHeatMapConfig.timeLimit && repeatCount <= PtMapsConfig.travelHeatMapConfig.repeatThreshHold) {
                            factor = Math.log2(absTimeDiff);
                            l = m * factor;
                            destination.latitude = destination.latitude + l * Math.cos(ang);
                            destination.longitude = destination.longitude + l * Math.sin(ang);

                            setTimeout(function () {
                                calculateDistanceDrive(source, destination, timeLimit, ang, angInc, m, configIndex, repeatCount + 1);
                            }, 100);
                            return;
                        } else {
                            if (isPointInOtherPolygons(destination)) {
                                for (var j = 0; j < PtMapsConfig.travelHeatMapConfig.stepOutThreshold; j++) {
                                    destination.latitude = destination.latitude + 2 * m * Math.cos(ang);
                                    destination.longitude = destination.longitude + 2 * m * Math.sin(ang);
                                    if (!isPointInOtherPolygons(destination)) {
                                        break;
                                    }
                                }
                            } else {
                                destination.latitude = destination.latitude + 2 * m * Math.cos(ang);
                                destination.longitude = destination.longitude + 2 * m * Math.sin(ang);

                            }
                        }
                    }
                    if (isPointInOtherPolygons(destination)) {
                        ploygonOverlapFlag = true;
                    }
                    timeLimits[timeLimit] = timeLimits[timeLimit] || [];
                    timeLimits[timeLimit].push(destination);
                    ang += angInc;

                    $rootScope.$broadcast("showUpdateProgress", {
                        val: {
                            angle: ang
                        }
                    });
                    initPts(source, timeLimit, ang, angInc, m, configIndex);
                }
            }
        }

        return {
            drawTimeSense: drawTimeSense,
        };
}]);