# bottom-drawer
AngularJS module for bottom drawer; particularly useful for mobile.

![](https://github.com/toksfifo/bottom-drawer/blob/master/bottomDrawer.gif)

##<a name="features">Features</a>
* Drawer closes when the backdrop is tapped or when "Cancel" (included by default, is tapped). To remove the "Cancel" item, pass in `true` as the 2nd parameter to `bottomDrawerService.open()` (default is `false`).
* Supports icons preceding text (from <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank"> Font Awesome</a> or any font icon set). Include the class name as the item's `icon`.
* Allows for function to be called on icon tap. Include the function (wrapped in an anonymous function, see [Usage](#usage)) as the item's `fn`.
* Allows for recursive drawers, i.e. tapping one drawer item closes the current drawer and opens another. To use, include `recursive: true` in the item's object and call `bottomDrawerService.open()` in the item's `fn`. See [Usage](#usage).

##<a name="usage">Usage</a>
Include the following files in your HTML:
* `dist/bottomDrawer.min.js`
* `dist/bottomDrawer.min.css`

Note: This module depends on `ngAnimate` if you want transitions.

Note: `bottomDrawer.min.css` comes with the following default styles (feel free to edit for personal use):
* `background-color` (semi-transparent backdrop when drawer is open): `rgba(0, 0, 0, 0.4)`
* `background-color` (drawer): white
* `color` (drawer text): black
* `font-size` (drawer text): `16px`
* `height` (individual drawer item): `45px`
* `max-height` (drawer, not including "Cancel" item): `247.5px` (45px * 5.5)
* `transition` (all): 0.25s ease-in-out


####Sample:
HTML (include once in main view, usually in `index.html`, and outside `ng-view`):
```html
<bottom-drawer-directive></bottom-drawer-directive>
```

JS:
```js
// inject bottom-drawer module
angular.module('yourApp', ['bottomDrawer']);

// inject bottom-drawer service
angular.module('yourApp')
  .controller('YourCtrl', ['$scope', 'bottomDrawerService', function($scope, bottomDrawerService) {
  
  // open drawer with individual items (objects) in array
  bottomDrawerService.open([{
    text: 'Add a photo', // text displayed in drawer
    icon: 'fa fa-file-photo-o fa-fw', // OPTIONAL Font Awesome icon (class) to precede text (strongly consider adding the fixed width option: fa-fw)
    fn: function() { // OPTIONAL function to be called on item tap
      $scope.addPhoto();
    }
  }, {
    text: 'Save offline map',
    icon: 'fa fa-map-marker fa-fw',
    fn: function() {
      console.log('saving map :)');
      $scope.saveOfflineMap(currentMap);
    }
  }, {
    text: 'Share', 
    icon: 'fa fa-share-alt fa-fw', 
    recursive: true, // OPTIONAL recursive
    fn: function() {
      bottomDrawerService.open([{
        text: 'Facebook',
        icon: 'fa fa-facebook fa-fw',
        fn: function() {
          $scope.share('facebook');
        }
      }, {
        text: 'Twitter',
        icon: 'fa fa-twitter fa-fw',
        fn: function() {
          $scope.share('twitter');
        }
      }]);
    }
  }]);
   
}]);
```
