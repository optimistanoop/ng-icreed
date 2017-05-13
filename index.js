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

app.controller('myAppCtrl', ['$scope','$routeParams','$location','$rootScope',function($scope, $routeParams, $location, $rootScope){
	
	$rootScope.$on('$locationChangeSuccess', function(){
		var path = $location.path();
    if(path && path.includes('tab1')) $scope.selection = 'tab1';
    else if(path && path.includes('tab2')) $scope.selection = 'tab2';
    else $scope.selection = 'default';
	});
	
}]);
