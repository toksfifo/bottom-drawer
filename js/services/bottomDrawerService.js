bottomDrawerApp.factory('bottomDrawerService', [function() {

	var bottomDrawerService = {
		isOpen: false,
		options: [],
		hideCancel: false,
		open: open,
		close: close
	};

	return bottomDrawerService;

	/**
	 * open drawer
	 * @param  {Array} newOptions: objects representing each drawer item
	 * @param  {Boolean} boolHideCancel: indicated whether "Cancel" item is shown
	 * @return {none}
	 */
	function open(newOptions, boolHideCancel) {
		bottomDrawerService.options = newOptions;
		bottomDrawerService.hideCancel = boolHideCancel || false;
		bottomDrawerService.isOpen = true;
	}

	/**
	 * close drawer
	 * @return {none}
	 */
	function close() {
		bottomDrawerService.isOpen = false;
	}

}]);