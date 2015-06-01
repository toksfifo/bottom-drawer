bottomDrawerApp.directive('bottomDrawerDirective', ['$timeout', 'bottomDrawerService', function($timeout, bottomDrawerService) {

	return {
		restrict: 'E',
		scope: true,
		link: link,

		// template can also be found in bottomDrawerTeplate.html
		template: 
			'<div class="bdDarkScreen" ng-if="bottomDrawerService.isOpen" ng-click="bottomDrawerService.close()"></div>' +
			'<div class="bdContainer" ng-if="bottomDrawerService.isOpen" ng-cloak>' + 
				'<div class="bdContainer-scroll">' + 
					'<li class="bdItem" ng-repeat="option in bottomDrawerService.options" ng-click="callNextFunction(option)">' + 
						'<i ng-class="option.icon"></i>' + 
						'<span class="bdItem-text" ng-class="{\'is-padded\': option.icon}">{{ option.text }}</span>' + 
					'</li>' + 
				'</div>' +
				'<li class="bdItem bdItem--cancel" ng-click="bottomDrawerService.close()" ng-if="!bottomDrawerService.hideCancel">' + 
					'<span class="bdItem-text">Cancel</span>' + 
				'</li>' + 
			'</div>'
	};

	function link(scope, elem, attrs) {

		scope.bottomDrawerService = bottomDrawerService;
		scope.callNextFunction = callNextFunction;

		/**
		 * optionally calls a new function if user clicks on a drawer item
		 * @param  {Object} option: current drawer item (clicked)
		 * @return {none}
		 */
		function callNextFunction(option) {

			// time for closing (or opening) drawer from CSS
			var timeAnimation = 0.25 * 1000;

			// 1st, close the drawer
			bottomDrawerService.close();

			// call new function
			if (option.fn) {
				if (option.recursive) {

					// wait for drawer to close (and some small delay) before opening new drawer
					$timeout(function() {
						option.fn();
					}, timeAnimation + (0.1 * 1000));
				} else {
					option.fn();
				}
			}
		}

	}

}]);