//define a new module called MyHatF2, then define a controller on that module
angular.module('myflufflepuffgasp', [ 'home' ]).controller('MyFlufflePuffGaspCtrl', [ '$scope',
		function($scope) {
			
		}]).config(function($locationProvider) {
	$locationProvider.html5Mode(true);
});
