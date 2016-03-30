var app = angular.module('mapsApp');
app.factory('PtMapsConfig', [function () {
    var accuracy = {
        V_HIGH: Math.PI / 24,
        HIGH: Math.PI / 12,
        MEDIUM: Math.PI / 6,
        LOW: Math.PI / 4
    };
    var travelHeatMapConfig = {
        directions: [
            {
                direction: 'EAST',
                lat: +0.5,
                lng: 0
              }, {
                direction: 'WEST',
                lat: -0.5,
                lng: 0
              }, {
                direction: 'NORTH',
                lat: 0,
                lng: +0.5
              }, {
                direction: 'SOUTH',
                lat: 0,
                lng: -0.5
              }
          ],
        delta: 0.5,
        timeLimit: 30,
        repeatThreshHold: 4,
        stepOutThreshold: 4,
        fitBoundTimeKey: 30,
        fitBoundRange: '20-30',
        timeSequence: [
            {
                time: 10,
                degree: accuracy.MEDIUM,
                add: [{
                        range: '0-10',
                        limits: [10],
                        fillColor: '#86b927',
                        strokeColor: '#86b927',
                        fillOpacity: 0.35,
                        strokeOpacity: 0.5,
                        strokeWeight: 0.1
                    }
                  ]
              }, {
                time: 20,
                degree: accuracy.HIGH,
                add: [{
                        range: '0-20',
                        limits: [0, 20],
                        fillColor: '#bfb51d',
                        strokeColor: '#bfb51d',
                        fillOpacity: 0.35,
                        strokeOpacity: 0.5,
                        strokeWeight: 0.1
                    }
                  ]
              }, {
                time: 30,
                degree: accuracy.HIGH,
                add: [{
                        range: '0-30',
                        limits: [0, 30],
                        fillColor: '#b25317',
                        strokeColor: '#b25317',
                        fillOpacity: 0.35,
                        strokeOpacity: 0.5,
                        strokeWeight: 0.1
                    }
                  ]
              }
          ]
    };
    var distanceBetweenPoints = function (pointA, pointB) {
        if (!pointA || !pointB) {
            return 0;
        }
        var R = 6371; // Radius of the Earth in km
        var dLat = (pointB.lat - pointA.lat) * Math.PI / 180;
        var dLon = (pointB.lng - pointA.lng) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(pointA.lat * Math.PI / 180) * Math.cos(pointB.lat * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    return {
        distanceBetweenPoints: distanceBetweenPoints,
        travelHeatMapConfig: travelHeatMapConfig,
    };

  }]);