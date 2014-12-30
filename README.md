# ngHammer-showTouches

Combines angularJS + hammerJS + ng-hammer

This is using <a href="https://github.com/hammerjs/hammer.js/wiki/Getting-Started" target="_blank">Hammer.js (v1)</a> and <a href="https://github.com/monospaced/angular-hammer" target="_blank">Angular Hammer</a> with <a href="https://angularjs.org/" target="_blank">angularJS</a>.

## Installation

Add jquery-1.10.2.min.js (before angular) *temporary
<pre class="prettyprint linenums">
&lt;script src="js/vendor/jquery-1.10.2.min.js"&gt;&lt;/script&gt;
</pre>

Add hammer.js (before angular)
<pre class="prettyprint linenums">
&lt;script src="js/vendor/hammer.js"&gt;&lt;/script&gt;
</pre>

Add ng-hammer.js (after angular)
<pre class="prettyprint linenums">
&lt;script src="js/vendor/angular-hammer.js"&gt;&lt;/script&gt;
</pre>

Add hotkeys.min.js (after angular)
<pre class="prettyprint linenums">
&lt;script src="js/vendor/hotkeys.min.js"&gt;&lt;/script&gt;
</pre>

Add CSS (colors, size &amp; opacity can be changed here)

``` css
.lastTouch {
  display: none;
  position: fixed;
  z-index: 9999;
  height: 24px;
  width: 24px;
  top: 0;
  left: 0;
  pointer-events: none;
  background: rgba(255, 0, 0, 0.8);
  border-radius: 20px;
  margin-top: -12px;
  margin-left: -12px;
}
```

## Usage

<h4>Add directive as attribute</h4>
<pre class="prettyprint linenums">
&lt;div hm-touch="showLoc($event)" hm-release="hideLoc()" show-touches&gt;&lt;/div&gt;
</pre>

Toggle on/off by using "hot key" (spacebar + d).

<h4>Directive</h4>

```javascript
'use strict';

/* App Module */
var myApp = angular.module('myApp', ['hmTouchEvents', 'cfp.hotkeys']);
/* Directives */
myApp.directive('showTouches', ['hotkeys', function(hotkeys){
	return {
		restrict: 'A',
		link: function(scope, element) {
			element.append('&lt;div class="lastTouch"&gt;&lt;/div&gt;');
			scope.showPoint = function(evt){
				if(scope.demoMode){
					$('.lastTouch').show().css({
						'top': evt.gesture.touches[0].clientY,
						'left': evt.gesture.touches[0].clientX
					});
				}
			};
			scope.hidePoint = function(){
				if(scope.demoMode){ $('.lastTouch').fadeOut("slow"); }
			};

			scope.demoMode = false;
			hotkeys.add({
				combo: 'space+d',
				description: 'Toggle Demo Mode',
				callback: function() {
					scope.demoMode = !scope.demoMode;
				}
			});
	   }
	}
}]);
```

## Todo
Remove: <a href="http://jquery.com/" target="_blank">jQuery 1.10.2</a>

## Credits
<ul>
<li><a href="https://github.com/hammerjs/hammer.js/wiki/Getting-Started" target="_blank">Hammer.js (v1)</a></li>
<li><a href="http://monospaced.github.io/angular-hammer/" target="_blank">Angular Hammer</a></li>
<li><a href="http://chieffancypants.github.io/angular-hotkeys/" target="_blank">AngularHotkeys.js</a></li>
</ul>
