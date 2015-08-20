angular
	.module('bottomDrawer')
	.factory('bottomDrawerService', [bottomDrawerService]);

function bottomDrawerService() {

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
	 */
	function open(newOptions, boolHideCancel) {
		bottomDrawerService.options = newOptions;
		bottomDrawerService.hideCancel = boolHideCancel || false;
		bottomDrawerService.isOpen = true;
	}

	/**
	 * close drawer
	 */
	function close() {
		bottomDrawerService.isOpen = false;
	}

}