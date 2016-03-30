var module = angular.module("mapsApp");
module.factory("mapsProp", ['$http', function ($http)
    {
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
        var getTypeDownData = function (string) {
            var city = localStorage.getItem('city');
            return $http.get("https://www.proptiger.com/columbus/app/v4/typeahead?query=" + string + "&typeAheadType=LOCALITY,SUBURB&rows=25&city=" + city).then(function (response) {
                return response.data;
            });
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
            getProjects: getProjects,
            getTypeDownData: getTypeDownData,
            getDistTime: getDistTime,
            setMessage: setMessage,
            getMessage: getMessage
        };
}]);