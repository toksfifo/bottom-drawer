bottomDrawerApp.directive('bottomDrawerDirective', ['$timeout', 'bottomDrawerService', function($timeout, bottomDrawerService) {

	return {
		restrict: 'E',
		scope: true,
		template: '<div class="bdDarkScreen if-animate" ng-if="bottomDrawerService.isOpen" ng-click="bottomDrawerService.close()"></div>

<div class="bdContainer if-animate" ng-if="bottomDrawerService.isOpen" ng-cloak>
	<div class="bdContainer-scroll">
		<li class="bdItem" 
			ng-repeat="option in bottomDrawerService.options"
			ng-click="callNextFunction(option)">
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
		scope.callNextFunction = callNextFunction;

		function callNextFunction(option) {
			var timeAnimation = 0.25 * 1000;

			bottomDrawerService.close();

			if (option.fn) {
				if (option.recursive) {
					$timeout(option.fn, timeAnimation + (0.1 * 1000));
				} else {
					option.fn();
				}
			}
		}

	}

}]);