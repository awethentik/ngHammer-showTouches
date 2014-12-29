'use strict';

/* App Module */
var myApp = angular.module('myApp', ['hmTouchEvents', 'cfp.hotkeys']);
/* Directives */
myApp.directive('showTouches', ['hotkeys', function(hotkeys){
	return {
		restrict: 'A',
		link: function(scope, element) {
			element.append('<div class="lastTouch"></div>');
			scope.showPoint = function(evt){
				if(scope.demoMode){
					$('.lastTouch').show().css({
						'top': evt.gesture.touches[0].clientY,
						'left': evt.gesture.touches[0].clientX
					});
				}
			};
			scope.hidePoint = function(){
				if(scope.demoMode){ $('.lastTouch').fadeOut("slow"); }
			};
			scope.demoMode = false;
			hotkeys.add({
				combo: 'space+d',
				description: 'Toggle Demo Mode',
				callback: function() {
					scope.demoMode = !scope.demoMode;
				}
			});
	   }
	}
}]);