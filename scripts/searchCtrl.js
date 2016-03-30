var app = angular.module('mapsApp');
app.controller('searchCtrl', ['$scope', 'mapsProp', '$rootScope', 'PtMapsConfig',
function ($scope, mapsProp, $rootScope, PtMapsConfig) {
        $scope.cities = [
        "Gurgaon",
        "Bangalore",
        "Mumbai",
        "Pune"
        ];
        $scope.message = '';
        var city;
        $scope.time = [];
        for (var i = 0; i < PtMapsConfig.travelHeatMapConfig.timeSequence.length; i++)
            $scope.time.push(PtMapsConfig.travelHeatMapConfig.timeSequence[i]);

        $scope.setCity = function (k) {
            $scope.searchResults = [];
            localStorage.setItem('city', k);
        }

        $scope.message = mapsProp.getMessage();
        var type, distance, time, project;

        $scope.setProject = function (val) {
            $scope.string = val.coreText;
            project = val;
            $scope.searchResults = [];
            $scope.tab = 2;

        };
        $rootScope.$on('showMessage', function (event, args) {
            $scope.message = args.messageContent;
        })
        $scope.setValTime = function (val) {
            console.log(val.add[0].range);
            time = val.add[0].range;
            $scope.updateCompletion = '';

        };

        $scope.updateCompletion = '';
        $rootScope.$on('showUpdateProgress', function (event, args) {
            $scope.updateCompletion = (args.val.angle * 100) / (2 * Math.PI);;
        });
        $scope.search = function (string) {
            $scope.searchResults = [];
            mapsProp.getTypeDownData(string).then(function (result) {
                $scope.searchResults = result.data;
                console.log($scope.searchResults.length);
                if ($scope.searchResults.length == 0 && string) {
                    $scope.message = 'No results returned';
                } else {
                    $scope.message = '';
                }
            });
        };
        $scope.find = function () {
            $scope.message = '';
            $scope.searchResults = [];
            $scope.searchResults.push(project);
            var res = {
                time: time,
            };
            localStorage.setItem('timetype', JSON.stringify(res));
            localStorage.setItem('project', JSON.stringify(project));
            $rootScope.$broadcast("positionSuccess", {});

        };
}]);
app.directive('search', function () {
    return {
        templateUrl: 'templates/search.html',
        controller: "searchCtrl",
    };
});