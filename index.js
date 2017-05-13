var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/tab1", {
        templateUrl : "tab1/tab1.html"
    })
    .when("/tab1/l1", {
        templateUrl : "tab1/t1l1.html"
    })
    .when("/tab1/l2", {
        templateUrl : "tab1/t1l2.html"
    })
    .when("/tab2", {
        templateUrl : "tab2/tab2.html"
    })
    .when("/tab2/l1", {
        templateUrl : "tab2/t2l1.html"
    })
    .when("/tab2/l2", {
        templateUrl : "tab2/t2l2.html"
    });
});

app.controller('myAppCtrl', ['$scope',function($scope){
	
	$scope.name = 'anp';
	
}]);
