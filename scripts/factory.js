(function () {
    var mapsProp = function ($http) {
        var message, deferredObj, arrayTimeLayer = {};
        var getProjects = function (lat, lon, minDistance, maxDistance) {
            var res = {
                "filters": {
                    "and": [
                        {
                            "geoDistance": {
                                "geo": {
                                    "distance": parseFloat(maxDistance),
                                    "lat": lat,
                                    "lon": lon,
                                    "minDistance": parseFloat(minDistance)
                                }
                            }
                        }]
                },
                "paging": {
                    "start": 0,
                    "rows": 200
                },
                "fields": []
            };
            res = JSON.stringify(res);
            var propLink = "https://www.proptiger.com/app/v2/project-listing?selector=";
            return $http.get(propLink + res).then(function (response) {
                return response.data;
            });
        };
        var getGooglePlaces = function (string) {
            return $http.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + string + "&types=geocode&key=AIzaSyBt5A9K5R6iSe7iPf4L2d2UcSsEIehHBI4").then(function (response) {
                console.log(response.data);
                return response.data;
            })

        }
        var getTypeDownData = function (string) {
            return $http.get("https://www.proptiger.com/columbus/app/v4/typeahead?query=" + string + "&typeAheadType=LOCALITY,SUBURB&rows=25&city=Gurgaon").then(function (response) {
                return response.data.data.map(function (item) {
                    //console.log(item);
                    return item;
                });
            });
        };
        var getPlaces = function (lat, long) {
            return $http.get("https://www.proptiger.com/app/v1/amenity?latitude=" + lat + "&longitude=" + long + "&distance=2&start=0&rows=999").then(function (response) {
                console.log(response);
                return response.data;
            });
        };
        var getTypes = function (results) {
            var map = {};
            results = results.data;
            for (var i = 0; i < results.length; i++) {
                map[results[i].localityAmenityTypes.description] = 1;
            }
            return map;
        };
        var getDistTime = function (coordsOrigin, coordsDestination, ref, scope, infoWindow, source) {
            var ans = {};
            var origin = new google.maps.LatLng(coordsOrigin.latitude, coordsOrigin.longitude);
            var destination = new google.maps.LatLng(coordsDestination.latitude, coordsDestination.longitude);

            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins: [origin],
                destinations: [destination],
                travelMode: google.maps.TravelMode.DRIVING,
            }, callback);

            function callback(response, status) {
                if (status == google.maps.DistanceMatrixStatus.OK) {
                    ans = {
                        distance: response.rows[0].elements[0].distance,
                        duration: response.rows[0].elements[0].duration
                    };

                    var destName = source || coordsDestination.name;
                    if (destName == source) {
                        destName += " (Source)"
                        infoWindow.setContent('<div><strong>' + destName + '</strong></div>');
                        infoWindow.open(scope.map, ref);
                    } else {
                        infoWindow.setContent('<div><strong>' + destName + '</strong><br>' +
                            'Distance :' + ans.distance.text + '  Time :' + ans.duration.text + '</div>');
                        infoWindow.open(scope.map, ref);
                    }
                }
            };
        };


        var setTimeLayer = function (array) {
            arrayTimeLayer = array;
        };
        var getTimeLayer = function () {
            var k = arrayTimeLayer;
            arrayTimeLayer = [];
            return k;
        };
        var setMessage = function (msg) {
            message = msg;
        };
        var getMessage = function () {
            return message;
        };
        var setDeferredObject = function (obj) {
            deferredObj = obj;
        };
        var getDeferredObject = function () {
            return deferredObj;
        };

        return {
            setTimeLayer: setTimeLayer,
            getTimeLayer: getTimeLayer,
            setDeferredObject: setDeferredObject,
            getDeferredObject: getDeferredObject,
            getGooglePlaces: getGooglePlaces,
            getProjects: getProjects,
            getTypeDownData: getTypeDownData,
            getPlaces: getPlaces,
            getTypes: getTypes,
            getDistTime: getDistTime,
            setMessage: setMessage,
            getMessage: getMessage
        };
    };
    var module = angular.module("mapsApp");
    module.factory("mapsProp", mapsProp);
})();