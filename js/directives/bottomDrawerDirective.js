bottomDrawerApp.directive('bottomDrawerDirective', ['bottomDrawerService', function(bottomDrawerService) {

	return {
		restrict: 'E',
		scope: {},
		template: '<div ng-if="bottomDrawerService.isOpen" ng-init="init()">

	<div class="bdDarkScreen" ng-click="bottomDrawerService.close()"></div>

	<div class="bdContainer">
		<li class="bdItem" ng-repeat="option in bottomDrawerService.options">
			<i ng-class="bottomDrawerService.icons[$index]"></i>
			<span>{{ option }}</span>
		</li>
		<li class="bdItem" ng-click="bottomDrawerService.close()">Cancel</li>
	</div>

</div>',
		link: link
	};

	function link(scope, elem, attrs) {

		scope.bottomDrawerService = bottomDrawerService;

	}

}]);