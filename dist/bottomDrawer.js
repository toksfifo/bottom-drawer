var bottomDrawerApp = angular.module('bottomDrawer', ['ngAnimate']);
bottomDrawerApp.directive('bottomDrawerDirective', ['bottomDrawerService', function(bottomDrawerService) {

	return {
		restrict: 'E',
		scope: true,
		template: '<div class="bdDarkScreen" ng-if="bottomDrawerService.isOpen" ng-click="bottomDrawerService.close()"></div>

<div class="bdContainer" ng-if="bottomDrawerService.isOpen" ng-cloak>
	<div class="bdContainer-scroll">
		<li class="bdItem" 
			ng-repeat="option in bottomDrawerService.options"
			ng-click="option.fn(); bottomDrawerService.close()">
			<i ng-class="option.icon"></i>
			<span class="bdItem-text" 
				ng-class="{\'is-padded\': bottomDrawerService.icons[$index]}">{{ option.text }}</span>
		</li>
	</div>
	
	<li class="bdItem bdItem--cancel" 
		ng-click="bottomDrawerService.close()" 
		ng-if="!bottomDrawerService.hideCancel">
		<span class="bdItem-text">Cancel</span>
	</li>
</div>',
		link: link
	};

	function link(scope, elem, attrs) {

		scope.bottomDrawerService = bottomDrawerService;

	}

}]);
bottomDrawerApp.factory('bottomDrawerService', [function() {

	var bottomDrawerService = {
		isOpen: false,
		options: [],
		hideCancel: false,
		open: open,
		close: close
	};

	return bottomDrawerService;

	function open(newOptions, boolHideCancel) {
		bottomDrawerService.options = newOptions;
		bottomDrawerService.hideCancel = boolHideCancel || false;
		bottomDrawerService.isOpen = true;
	}

	function close() {
		bottomDrawerService.isOpen = false;
		// bottomDrawerService.options = [];
	}

}]);