# bottom-drawer
Angular JS module for bottom drawer; particularly useful for mobile.

##<a name="features">Features</a>
* Drawer closes when the background screen is tapped or when "Cancel" (included by default, is tapped). To remove the "Cancel" item, pass in `true` as the 2nd parameter to `bottomDrawerService.open()` (default is `false`).
* Supports icons preceding text (from <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank"> Font Awesome</a> or from a local CSS class). Inlclude the class name as the item's `icon`.
* Allows for function to be called on icon tap. Include the function (wrapped in an anonymous function, see [Usage](#usage)) as the item's `fn`. Note that the `bottomDrawerDirective` creates a new child scope that prototypically inherits it's parent's scope.
* Allows for recursive drawers, i.e. tapping one drawer item closes the current drawer and opens another. To use, include `recursive: true` in the item's object and call `bottomDrawerService.open()` in the item's `fn`. See [Usage](#usage).

##<a name="usage">Usage</a>
Include the following files in your HTML (consider concatenating into a `lib.js` and `lib.css` for performace):
* `dist/bottomDrawer.min.js`
* `dist/bottomDrawer.min.css`

Note: `bottomDrawer.min.css` comes with the following default styles (feel free to edit for personal use):
* `background-color` (transparent dark screen when drawer is present): `rgba(0, 0, 0, 0.4)`
* `background-color` (drawer): white
* `color` (drawer text): black
* `font-size` (drawer text): `16px`
* `height` (individual drawer item): `45px`
* `max-height` (drawer, not including "Cancel" item): `45px * 5.5`
* `transition` (all): 0.25s ease-in-out


####Sample:
HTML (include once in main view, usually in `index.html`, and outside `ng-view`):
```html
<bottom-drawer-directive></bottom-drawer-directive>
```

JS:
```js
// inject bottom-drawer module
var app = angular.module('yourApp', ['bottomDrawer']);

app.controller('YourCtrl', ['$scope', 'bottomDrawerService', function($scope, bottomDrawerService) {
  
  // open drawer with individual items (objects) in array
  bottomDrawerService.open([{
    text: 'Add a photo', // text displayed in drawer
    icon: 'fa fa-file-photo-o', // OPTIONAL Font Awesome icon (class) to precede text
    fn: function() { // OPTIONAL function to be called on item tap
      $scope.addPhoto();
    }
  }, {
    text: 'Save offline map',
    icon: 'fa fa-map-marker',
    fn: function() {
      console.log('saving map :)');
      $scope.saveOfflineMap(currentMap);
    }
  }, {
    text: 'Share', 
    icon: 'fa fa-share-alt', 
    recursive: true, // OPTIONAL recursive
    fn: function() {
      bottomDrawerService.open([{
        text: 'Facebook',
        icon: 'fa fa-facebook',
        fn: function() {
          $scope.share('facebook');
        }
      }, {
        text: 'Twitter',
        icon: 'fa fa-twitter',
        fn: function() {
          $scope.share('twitter');
        }
      }]);
    }
  }]);
   
}]);
```
