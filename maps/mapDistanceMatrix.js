var app = angular.module('mapsApp');
app.factory('mapDistanceMatrix', ['$q', function ($q) {
    var factory = {},
        service;

    factory.fetch = function (origin, destination) {
        service = new google.maps.DistanceMatrixService();
        var originLatLng = new google.maps.LatLng(origin.latitude, origin.longitude);
        var destLatLng = new google.maps.LatLng(destination.latitude, destination.longitude);
        var request = {
            origins: [originLatLng],
            destinations: [destLatLng],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        };
        var response;
        var deferred = $q.defer();
        service.getDistanceMatrix(request, function (results, status) {
            if (status === google.maps.DistanceMatrixStatus.OK) {
                response = {
                    status: 'OK',
                    results: results
                };
            } else {
                response = {
                    status: 'ERROR',
                    msg: 'Error fetching results'
                }
            }
            deferred.resolve(response);
        });
        return deferred.promise;
    };
    return factory;
}]);