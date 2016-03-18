var app = angular.module('mapsApp');
app.factory('PtMapsConfig', [function () {
    var mapConfig = {
        state: {
            zoom: 5,
            center: {
                lat: 21.0000,
                lng: 78.0000
            },
            minZoom: 9,
            maxZoom: 22,
            filter: {
                visible: false,
                action: null,
                state: {
                    distance: 3,
                    minDistance: 3,
                    maxDistance: 7,
                    maxStoredDistance: 3,
                    lastDistance: 2,
                    position: {
                        lat: 21.0000,
                        lng: 78.0000
                    }
                }
            },
            polygonFilter: {
                visible: false,
                currentDrawingStatus: false,
                polygonExist: false,
                action: null,
                savedGeo: null,
                state: {
                    distance: 3,
                    minDistance: 3,
                    maxDistance: 7,
                    position: {
                        lat: 21.0000,
                        lng: 78.0000
                    }
                }
            },

            libraries: {},
            markers: {},
            neighbourhood: {
                'locality': {},
                'project': {}
            },
            activateToggleCollage: false,
            collapseState: false,
            activeProjectId: null
        },
        events: {
            //resize: false,
            //zoomin: false,
            //zoomout: false
        },
        services: {
            direction: {
                create: undefined, // function(x1, y1, x2, y2)
                remove: undefined // function()
            },
            bounds: undefined,
            //drawMarkers: undefined,
            state: {
                saveMapState: function (zoom, center) {
                    window.__mapZoomLevel = zoom;
                    window.__mapCenter = center;
                },
                restoreMapState: function () {
                    var zoomLevel = window.__mapZoomLevel;
                    var mapCenter = window.__mapCenter;
                    window.__mapZoomLevel = null;
                    window.__mapCenter = null;
                    return {
                        zoom: zoomLevel,
                        center: mapCenter
                    };
                },
                isMapStateSaved: function () {
                    return window.__mapZoomLevel;
                }
            }
        },
        zoomincounter: 0,
        zoomoutcounter: 0
    };

    var mapStyle = {
        ptDefault: [
            {
                featureType: 'all',
                stylers: [
                    {
                        saturation: -90
                },
                    {
                        hue: '#0066ff'
                },
                    {
                        gamma: 1
                }
                        ]
                    },
            {
                featureType: 'water',
                stylers: [
                    {
                        gamma: 0.63
                },
                    {
                        hue: '#0091ff'
                },
                    {
                        saturation: 51
                }
                        ]
                    }, {
                featureType: 'poi.business',
                stylers: [
                    {
                        visibility: 'off'
                }
                        ]
                    }
            ],
        masterPlan: [
            {
                featureType: 'all',
                stylers: [
                    {
                        saturation: -90
                },
                    {
                        hue: '#0066ff'
                },
                    {
                        gamma: 1
                }
                    ]
                },
            {
                featureType: 'poi.business',
                stylers: [
                    {
                        visibility: 'off'
                }
                        ]
                },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                },
                    {
                        "lightness": "49"
                }
                    ]
                },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                }
                    ]
                },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                }
                    ]
                },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#dde6e8"
                },
                    {
                        "visibility": "on"
                }
                    ]
                }
            ]
    }

    var accuracy = {
        V_HIGH: Math.PI / 24,
        HIGH: Math.PI / 12,
        MEDIUM: Math.PI / 6,
        LOW: Math.PI / 4
    };

    var projectDetailCardConfig = {
        currentActiveTab: false
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

    var markerSettings = {
        displayType: 'type'
    };

    var indexSettings = {
        displayType: 'type'
    };

    var masterPlanScaleFactor = {
        roadScaleFactor: {
            increase: 2,
            decrease: 0.5
        },
        trainScaleFactor: {
            increase: 2,
            decrease: 0.5
        }
    };

    /**
     * Calculates the distance between two latlng locations in km.
     *
     * @pointA   ~  point A latitude and longitude obj
     * @pointB   ~  point B latitude and longitude obj
     *
     * @return   ~  Distance between the two points in km.
     */

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


    // lat long hashMap to map respective svgs on map for masterplan
    var citySvgLatLongHashMap = {
        'noida': [
                                        [28.66347872760795, 77.09346771240234],
                                        [28.66347872760795, 77.75127410888672],
                                        [28.376297906469308, 77.09346771240234]
                                    ],
        'bangalore': [
                                        [13.283387236490535, 76.98394775390625],
                                        [13.283387236490535, 78.30024719238281],
                                        [12.647038251367576, 76.98394775390625]

                                    ],
        'pune': [
                                        [18.858858917152634, 73.21014404296875],
                                        [18.858858917152634, 74.52713012695312],
                                        [18.238481676022758, 73.21014404296875]
                                    ]
    };

    var polygonColorPalette = {
        'na': [
                '#333'
                // "Data Not Available"
            ],
        0: [
                'rgba(204, 3, 0, 1)'
                //'Very low'
            ],
        1: [
                'rgba(204, 88, 0, 1)'
                // 'Low'
            ],
        2: [
                'rgba(204, 173, 0, 1)'
                // 'Okay'
            ],
        3: [
                'rgba(149, 204, 0, 1)'
                // 'Good'
            ],
        4: [
                'rgba(67, 204, 0, 1)'
                // 'Excellent'
            ]
    };

    return {
        mapConfig: mapConfig,
        mapStyle: mapStyle,
        markerSettings: markerSettings,
        distanceBetweenPoints: distanceBetweenPoints,
        polygonColorPalette: polygonColorPalette,
        indexSettings: indexSettings,
        travelHeatMapConfig: travelHeatMapConfig,
        projectDetailCardConfig: projectDetailCardConfig,
        citySvgLatLongHashMap: citySvgLatLongHashMap,
        masterPlanScaleFactor: masterPlanScaleFactor
    };

  }]);