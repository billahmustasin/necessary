// frontend/app.js
var app = angular.module('myApp', []);

// Initialize prom-client
var promClient = require('prom-client');
var registry = new promClient.Registry();
promClient.collectDefaultMetrics({ register: registry });

app.controller('MainController', function($scope) {
    $scope.message = 'Hello from AngularJS!';
    // Example metric
    var counter = new promClient.Counter({
        name: 'angular_request_operations_total',
        help: 'The total number of AngularJS requests'
    });
    counter.inc();

    // Register the metrics
    registry.metrics().then(metrics => {
        console.log(metrics);
    });
});
