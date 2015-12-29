//define a new module called MyHatF2, then define a controller on that module
angular.module('home', [ 'ngRoute' ]).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : '/assets/app/home/home.html.tpl',
		controller : 'HomeCtrl',
	});
}).controller(
		'HomeCtrl', [ '$scope', '$window', '$location',
		function($scope, $window, $location) {
			
			
			
			
		}]);
