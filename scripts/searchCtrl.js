var app = angular.module('mapsApp');
var searchCtrl = function ($scope, mapsProp, $rootScope, PtMapsConfig) {
    $scope.message = '';
    //$scope.distance = ['1-3', '3-5', '>5'];
    $scope.time = [];
    for (var i = 0; i < PtMapsConfig.travelHeatMapConfig.timeSequence.length; i++)
        $scope.time.push(PtMapsConfig.travelHeatMapConfig.timeSequence[i]);

    //$scope.time = ['within 10', 'within 20', 'within 30'];
    //$scope.types = ["driving", "walk", "public"];
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
    $scope.setValType = function (val) {
        type = val;
    };

    $scope.setValDist = function (val) {
        distance = val;
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
//    $scope.clear = function () {
        //        $scope.tab = 1;
        //    }
    $scope.find = function () {
        $scope.message = '';
        $scope.searchResults = [];
        $scope.searchResults.push(project);
        //localStorage.setItem('distance', distance);
        var res = {
            time: time,
            //type: type
        };

        localStorage.setItem('timetype', JSON.stringify(res));
        localStorage.setItem('project', JSON.stringify(project));
        $rootScope.$broadcast("positionSuccess", {});

    };
};
app.controller('searchCtrl', searchCtrl);
app.directive('search', function () {
    return {
        templateUrl: 'templates/search.html',
        controller: "searchCtrl",
    };
});