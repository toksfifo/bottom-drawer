bottomDrawerApp.factory('bottomDrawerService', [function() {

	var bottomDrawerService = {
		isOpen: false,
		options: [],
		icons: [],
		open: open,
		close: close
	};

	return bottomDrawerService;

	function open(newOptions, newIcons) {
		bottomDrawerService.options = newOptions;
		bottomDrawerService.icons = newIcons || [];
		bottomDrawerService.isOpen = true;
	}

	function close() {
		bottomDrawerService.options = [];
		bottomDrawerService.icons = [];
		bottomDrawerService.isOpen = false;
	}

}]);