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