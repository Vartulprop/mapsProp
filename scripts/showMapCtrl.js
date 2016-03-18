var app = angular.module('mapsApp');

var showMapCtrl = function ($scope, mapsProp, $rootScope, timeSenseService, $q, PtMapsConfig) {
    $scope.n = "";
    var project, distance, timetype;
    var results = [];
    var markers = [];
    var infoWindow, map;
    var lt = 28.443;
    var ln = 77.0500;
    infoWindow = new google.maps.InfoWindow();
    var options = {
        center: {
            lat: lt,
            lng: ln
        },
        zoom: 8,
    }
    var getMaxDistance = function (source, arr) {
        var maxDist = -1;
        for (var i = 0; i < arr.length; i++) {
            var dist = PtMapsConfig.distanceBetweenPoints(source, arr[i]);
            if (dist > maxDist) {
                maxDist = dist;
            }
        }
        return maxDist;
    }
    $scope.map = new google.maps.Map(document.getElementById('map'), options);
    map = $scope.map;
    var getTime = function (obj) {
        var minDistance, maxDistance;
        var arr = obj.time.split('-');
        var time = arr[1];
        return time;
    };
    var polygon, d;
    var positionSuccess = function () {
        bounds = new google.maps.LatLngBounds();
        $scope.map = new google.maps.Map(document.getElementById('map'), options);
        map = $scope.map;

        project = localStorage.getItem('project');
        project = JSON.parse(project);
        //        //distance = localStorage.getItem('distance');
        var minDistance; // = distance[0];
        var maxDistance; // = distance[2];
        //        if (distance[0] == '>') {
        //            minDistance = 5;
        //            maxDistance = 15;
        //}
        timetype = localStorage.getItem('timetype');
        timetype = JSON.parse(timetype);
        window.localStorage.clear();

        //if (project && project.latitude) {
        var latLng = new google.maps.LatLng(project.latitude, project.longitude);


        if (timetype) {
            var pol;
            d = getTime(timetype);
            d = parseInt(d, 10);
            var deferred = $q.defer();
            mapsProp.setDeferredObject(deferred);
            deferred.promise.then(resolve, fail);

            function resolve(result) {
                pol = mapsProp.getTimeLayer();
                var arr = [];
                for (var i = 0; i < pol[d].length; i++) {
                    arr[i] = {
                        lat: pol[d][i].latitude,
                        lng: pol[d][i].longitude,
                    }
                }

                makePolygon(arr);
                var projectLatLng = {
                    lat: project.latitude,
                    lng: project.longitude,
                }
                maxDistance = getMaxDistance(projectLatLng, arr);
                minDistance = 0;
                results = mapsProp.getProjects(project.latitude, project.longitude, minDistance, maxDistance);
                results.then(function (result) {
                    results = result.data;
                    results = results.items
                    manage(results, arr);
                });
            }

            function fail(reason) {
                console.log(pol);
            }
            timeSenseService.drawTimeSense(d, project);
        }

        createMarker(project, 'red');
    };
    var makePolygon = function (pol) {
        console.log("polygon printed");
        polygon = new google.maps.Polygon({
            paths: pol,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        polygon.setMap(map);

    }
    var bounds = new google.maps.LatLngBounds();
    var manage = function (results, arr) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];

        createMarker(project, 'red');
        console.log(project);
        var flag = 0;
        for (i = 0; i < results.length; i++) {
            var coordinate = new google.maps.LatLng(results[i].latitude, results[i].longitude);
            if (results[i].latitude != project.latitude && polygon.containsLatLng(coordinate)) {
                createMarker(results[i], 'blue');
                flag = 1;
            }
        }
        var markerCluster = new MarkerClusterer(map, markers);

        if (!flag) {
            $rootScope.$broadcast('showMessage', {
                messageContent: 'no markers reachable within ' + d + ' minutes'
            });
        } else {
            map.fitBounds(bounds);

        }
        markers.push(projectMarker);
    }
    var applyEvent = function (project, info, marker, source) {
        google.maps.event.addListener(marker, 'mouseover', function () {
            mapsProp.getDistTime(project, info, this, $scope, infoWindow, source);
        });
        google.maps.event.addListener(marker, 'mouseout', function () {
            infoWindow.close($scope.map, infoWindow);
        });
    }
    var createMarker = function (info, type) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(info.latitude, info.longitude),
            icon: "http://maps.google.com/mapfiles/ms/icons/" + type + "-dot.png"
        });
        var source;
        if (type == 'red') {
            marker.setMap(map);
            projectMarker = marker;
            source = info.entityName;
        }
        if (type != 'red')
            markers.push(marker);

        bounds.extend(marker.getPosition());
        applyEvent(project, info, marker, source);
    };
    $rootScope.$on('positionSuccess', function () {
        positionSuccess();
    })
};
app.controller('showMapCtrl', showMapCtrl);
app.directive('maps', function () {
    return {
        templateUrl: 'templates/showMap.html',
        controller: 'showMapCtrl'
    };
});