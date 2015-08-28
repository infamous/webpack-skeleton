/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var style                  = __webpack_require__(6) // needed by famous
	var Plane                  = __webpack_require__(3)
	var contextWithPerspective = __webpack_require__(4).contextWithPerspective

	var ctx = contextWithPerspective(1000)
	var square = new Plane({
	    size: [200,200],
	    content: 'Hello.',
	    properties: {
	        backfaceVisibility: 'visible',
	        background: 'pink',
	        padding: '5px'
	    }
	})

	ctx.add(square)
	square.transform.setRotate([0,2*Math.PI,0], {duration: 5000, curve: 'easeInOut'})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var style                  = __webpack_require__(4) // needed by famous
		var Plane                  = __webpack_require__(1)
		var contextWithPerspective = __webpack_require__(2).contextWithPerspective

		var ctx = contextWithPerspective(1000)
		var square = new Plane({
		    size: [200,200],
		    content: 'Hello.',
		    properties: {
		        backfaceVisibility: 'visible',
		        background: 'pink',
		        padding: '5px'
		    }
		})

		ctx.add(square)
		square.transform.setRotate([0,2*Math.PI,0], {duration: 5000, curve: 'easeInOut'})


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _inherits = function (child, parent) {
		  child.prototype = Object.create(parent && parent.prototype, {
		    constructor: {
		      value: child,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (parent) child.__proto__ = parent;
		};

		var _interopRequire = function (obj) {
		  return obj && (obj["default"] || obj);
		};

		var _core = _interopRequire(__webpack_require__(7));

		/*
		 * LICENSE
		 *
		 * This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 */

		var Surface = _interopRequire(__webpack_require__(9));

		var Molecule = _interopRequire(__webpack_require__(3));

		var Plane = (function () {
		  var _Molecule = Molecule;
		  var Plane = function Plane(initialOptions) {
		    _Molecule.call(this, initialOptions);

		    this.surface = new Surface(this.options);
		    this.add(this.surface);
		    this.surface.pipe(this._.handler);
		  };

		  _inherits(Plane, _Molecule);

		  // Surface interface
		  Plane.prototype.getContent = function () {
		    var args = Array.prototype.splice.call(arguments, 0);
		    return this.surface.getContent.apply(this.surface, args);
		  };

		  Plane.prototype.setContent = function () {
		    var args = Array.prototype.splice.call(arguments, 0);
		    return this.surface.setContent.apply(this.surface, args);
		  };

		  return Plane;
		})();

		module.exports = Plane;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9QbGFuZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVNPLE9BQU8sMkJBQU0scUJBQXFCOztJQUVsQyxRQUFRLDJCQUFNLFlBQVk7O0lBRVosS0FBSztrQkFBUyxRQUFRO01BQXRCLEtBQUssR0FDWCxTQURNLEtBQUssQ0FDVixjQUFjLEVBQUU7QUFDeEIseUJBQU0sY0FBYyxDQUFDLENBQUM7O0FBRXRCLFFBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLFFBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLFFBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDckM7O1lBUGdCLEtBQUs7OztBQUFMLE9BQUssV0FVdEIsVUFBVSxHQUFBLFlBQUc7QUFDVCxRQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDNUQ7O0FBYmdCLE9BQUssV0FjdEIsVUFBVSxHQUFBLFlBQUc7QUFDVCxRQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDNUQ7O1NBakJnQixLQUFLOzs7aUJBQUwsS0FBSyIsImZpbGUiOiJzcmMvUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTElDRU5TRVxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKlxuICovXG5cbmltcG9ydCBTdXJmYWNlIGZyb20gJ2ZhbW91cy9jb3JlL1N1cmZhY2UnO1xuXG5pbXBvcnQgTW9sZWN1bGUgZnJvbSAnLi9Nb2xlY3VsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIGV4dGVuZHMgTW9sZWN1bGUge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxPcHRpb25zKTtcblxuICAgICAgICB0aGlzLnN1cmZhY2UgPSBuZXcgU3VyZmFjZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnN1cmZhY2UpO1xuICAgICAgICB0aGlzLnN1cmZhY2UucGlwZSh0aGlzLl8uaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gU3VyZmFjZSBpbnRlcmZhY2VcbiAgICBnZXRDb250ZW50KCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5zdXJmYWNlLmdldENvbnRlbnQuYXBwbHkodGhpcy5zdXJmYWNlLCBhcmdzKTtcbiAgICB9XG4gICAgc2V0Q29udGVudCgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VyZmFjZS5zZXRDb250ZW50LmFwcGx5KHRoaXMuc3VyZmFjZSwgYXJncyk7XG4gICAgfVxufVxuIl19

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _interopRequire = function (obj) {
		  return obj && (obj["default"] || obj);
		};

		var _core = _interopRequire(__webpack_require__(7));

		exports.contextWithPerspective = contextWithPerspective;
		/*
		 * LICENSE
		 *
		 * This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 */

		var Engine = _interopRequire(__webpack_require__(10));

		function contextWithPerspective(perspective) {
		  var context = Engine.createContext();
		  context.setPerspective(perspective);
		  return context;
		}
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQVdnQixzQkFBc0IsR0FBdEIsc0JBQXNCOzs7Ozs7Ozs7O0lBRi9CLE1BQU0sMkJBQU0sb0JBQW9COztBQUVoQyxTQUFTLHNCQUFzQixDQUFDLFdBQVcsRUFBRTtBQUNoRCxNQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDckMsU0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxTQUFPLE9BQU8sQ0FBQztDQUNsQiIsImZpbGUiOiJzcmMvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTElDRU5TRVxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKlxuICovXG5cbmltcG9ydCBFbmdpbmUgZnJvbSAnZmFtb3VzL2NvcmUvRW5naW5lJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHRXaXRoUGVyc3BlY3RpdmUocGVyc3BlY3RpdmUpIHtcbiAgICB2YXIgY29udGV4dCA9IEVuZ2luZS5jcmVhdGVDb250ZXh0KCk7XG4gICAgY29udGV4dC5zZXRQZXJzcGVjdGl2ZShwZXJzcGVjdGl2ZSk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXX0=

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _prototypeProperties = function (child, staticProps, instanceProps) {
		  if (staticProps) Object.defineProperties(child, staticProps);
		  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
		};

		var _inherits = function (child, parent) {
		  child.prototype = Object.create(parent && parent.prototype, {
		    constructor: {
		      value: child,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (parent) child.__proto__ = parent;
		};

		var _interopRequire = function (obj) {
		  return obj && (obj["default"] || obj);
		};

		var _core = _interopRequire(__webpack_require__(7));

		/*
		 * LICENSE
		 *
		 * This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 */

		var Modifier = _interopRequire(__webpack_require__(11));

		var RenderNode = _interopRequire(__webpack_require__(12));

		var TransitionableTransform = _interopRequire(__webpack_require__(14));

		var EventHandler = _interopRequire(__webpack_require__(13));

		__webpack_require__(15);

		var Molecule = (function () {
		  var _RenderNode = RenderNode;
		  var Molecule = function Molecule(initialOptions) {
		    initialOptions = typeof initialOptions != "undefined" ? initialOptions : {};

		    // "private" stuff. Not really, but regard it like so. E.g. obj._.someVariable means you're accessing internal stuff.
		    // TODO: make all properties of this._ non-writeable?
		    this._ = {
		      options: {}, // set and get by this.options
		      handler: new EventHandler(),
		      defaultOptions: {
		        align: [0.5, 0.5],
		        origin: [0.5, 0.5],
		        transform: new TransitionableTransform()
		      }
		    };

		    // set the user's initial options. This automatically creates this.modifier, and add it to this (RenderNode).
		    // NOTE: this.options is a setter and initializer.
		    this.options = initialOptions.constructor.name == "Object" ? initialOptions : {}; // make sure we have an object literal.
		  };

		  _inherits(Molecule, _RenderNode);

		  // EventHandler interface
		  Molecule.prototype.pipe = function () {
		    var args = Array.prototype.splice.call(arguments, 0);
		    return this._.handler.pipe.apply(this._.handler, args);
		  };

		  Molecule.prototype.unpipe = function () {
		    var args = Array.prototype.splice.call(arguments, 0);
		    return this._.handler.unpipe.apply(this._.handler, args);
		  };

		  Molecule.prototype.on = function () {
		    var args = Array.prototype.splice.call(arguments, 0);
		    return this._.handler.on.apply(this._.handler, args);
		  };

		  Molecule.prototype.off = function () {
		    var args = Array.prototype.splice.call(arguments, 0);
		    return this._.handler.on.apply(this._.handler, args);
		  };

		  Molecule.prototype.setOptions = function (newOptions) {
		    newOptions = typeof newOptions != "undefined" ? newOptions : {};

		    if (newOptions.constructor.name != "Object") {
		      return;
		    }

		    for (var prop in newOptions) {
		      // Subject to change when Famo.us API changes.
		      if (Modifier.prototype["" + prop + "From"]) {
		        this.modifier["" + prop + "From"](newOptions[prop]);
		      }

		      // TODO: delete the non-writeable transform property before setting it.
		      this._.options[prop] = newOptions[prop];
		      // TODO: set the transform property as a non-writeable property after setting it.
		    }
		  };

		  Molecule.prototype.resetOptions = function () {
		    this.modifier = new Modifier(); // what happened to the old Modifier? Is it the infamous Famo.us memory leak?
		    this.set(this.modifier);
		    this.setOptions(this._.defaultOptions);
		  };

		  _prototypeProperties(Molecule, null, {
		    options: {

		      // getters and setters for Molecule.options
		      set: function (newOptions) {
		        this.resetOptions();
		        this.setOptions(newOptions);
		      },
		      get: function () {
		        return this._.options;
		      },
		      enumerable: true
		    },
		    transform: {
		      set: function (newTransform) {
		        this.setOptions({ transform: newTransform });
		      },
		      get: function () {
		        return this.options.transform;
		      },
		      enumerable: true
		    }
		  });

		  return Molecule;
		})();

		module.exports = Molecule;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Nb2xlY3VsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU08sUUFBUSwyQkFBTSxzQkFBc0I7O0lBQ3BDLFVBQVUsMkJBQU0sd0JBQXdCOztJQUN4Qyx1QkFBdUIsMkJBQU0sNENBQTRDOztJQUN6RSxZQUFZLDJCQUFNLDBCQUEwQjs7UUFFNUMsbUNBQW1DOztJQUVyQixRQUFRO29CQUFTLFVBQVU7TUFBM0IsUUFBUSxHQUNkLFNBRE0sUUFBUSxDQUNiLGNBQWMsRUFBRTtBQUN4QixrQkFBYyxHQUFHLE9BQU8sY0FBYyxJQUFJLFdBQVcsR0FBRSxjQUFjLEdBQUUsRUFBRSxDQUFDOzs7O0FBSTFFLFFBQUksQ0FBQyxDQUFDLEdBQUc7QUFDTCxhQUFPLEVBQUUsRUFBRTtBQUNYLGFBQU8sRUFBRSxJQUFJLFlBQVksRUFBRTtBQUMzQixvQkFBYyxFQUFFO0FBQ1osYUFBSyxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztBQUNoQixjQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0FBQ2pCLGlCQUFTLEVBQUUsSUFBSSx1QkFBdUIsRUFBRTtPQUMzQztLQUNKLENBQUM7Ozs7QUFJRixRQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLFFBQVEsR0FBRSxjQUFjLEdBQUUsRUFBRSxDQUFDO0dBQ2xGOztZQW5CZ0IsUUFBUTs7O0FBQVIsVUFBUSxXQXNCekIsSUFBSSxHQUFBLFlBQUc7QUFDSCxRQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFdBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztHQUMxRDs7QUF6QmdCLFVBQVEsV0EwQnpCLE1BQU0sR0FBQSxZQUFHO0FBQ0wsUUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyRCxXQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDNUQ7O0FBN0JnQixVQUFRLFdBOEJ6QixFQUFFLEdBQUEsWUFBRztBQUNELFFBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsV0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3hEOztBQWpDZ0IsVUFBUSxXQWtDekIsR0FBRyxHQUFBLFlBQUc7QUFDRixRQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFdBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN4RDs7QUFyQ2dCLFVBQVEsV0ErQ3pCLFVBQVUsR0FBQSxVQUFDLFVBQVUsRUFBRTtBQUNuQixjQUFVLEdBQUcsT0FBTyxVQUFVLElBQUksV0FBVyxHQUFFLFVBQVUsR0FBRSxFQUFFLENBQUM7O0FBRTlELFFBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO0FBQUUsYUFBTztLQUFFOztBQUV4RCxTQUFLLElBQUksSUFBSSxJQUFJLFVBQVUsRUFBRTs7QUFFekIsVUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDLEVBQUU7QUFDcEMsWUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQ25EOzs7QUFHRCxVQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7O0tBRTNDO0dBQ0o7O0FBOURnQixVQUFRLFdBK0R6QixZQUFZLEdBQUEsWUFBRztBQUNYLFFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUMvQixRQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4QixRQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7R0FDMUM7O3VCQW5FZ0IsUUFBUTtBQTRDckIsV0FBTzs7O1dBSkEsVUFBQyxVQUFVLEVBQUU7QUFDcEIsWUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDL0I7V0FDVSxZQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztPQUN6Qjs7O0FBMEJHLGFBQVM7V0FIQSxVQUFDLFlBQVksRUFBRTtBQUN4QixZQUFJLENBQUMsVUFBVSxDQUFDLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7T0FDOUM7V0FDWSxZQUFHO0FBQ1osZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztPQUNqQzs7Ozs7U0ExRWdCLFFBQVE7OztpQkFBUixRQUFRIiwiZmlsZSI6InNyYy9Nb2xlY3VsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMSUNFTlNFXG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqXG4gKi9cblxuaW1wb3J0IE1vZGlmaWVyIGZyb20gJ2ZhbW91cy9jb3JlL01vZGlmaWVyJztcbmltcG9ydCBSZW5kZXJOb2RlIGZyb20gJ2ZhbW91cy9jb3JlL1JlbmRlck5vZGUnO1xuaW1wb3J0IFRyYW5zaXRpb25hYmxlVHJhbnNmb3JtIGZyb20gJ2ZhbW91cy90cmFuc2l0aW9ucy9UcmFuc2l0aW9uYWJsZVRyYW5zZm9ybSc7XG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJ2ZhbW91cy9jb3JlL0V2ZW50SGFuZGxlcic7XG5cbmltcG9ydCBcImFybXkta25pZmUvcG9seWZpbGwuRnVuY3Rpb24ubmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2xlY3VsZSBleHRlbmRzIFJlbmRlck5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxPcHRpb25zKSB7XG4gICAgICAgIGluaXRpYWxPcHRpb25zID0gdHlwZW9mIGluaXRpYWxPcHRpb25zICE9IFwidW5kZWZpbmVkXCI/IGluaXRpYWxPcHRpb25zOiB7fTtcblxuICAgICAgICAvLyBcInByaXZhdGVcIiBzdHVmZi4gTm90IHJlYWxseSwgYnV0IHJlZ2FyZCBpdCBsaWtlIHNvLiBFLmcuIG9iai5fLnNvbWVWYXJpYWJsZSBtZWFucyB5b3UncmUgYWNjZXNzaW5nIGludGVybmFsIHN0dWZmLlxuICAgICAgICAvLyBUT0RPOiBtYWtlIGFsbCBwcm9wZXJ0aWVzIG9mIHRoaXMuXyBub24td3JpdGVhYmxlP1xuICAgICAgICB0aGlzLl8gPSB7XG4gICAgICAgICAgICBvcHRpb25zOiB7fSwgLy8gc2V0IGFuZCBnZXQgYnkgdGhpcy5vcHRpb25zXG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgRXZlbnRIYW5kbGVyKCksXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGFsaWduOiBbMC41LDAuNV0sXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBbMC41LDAuNV0sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBuZXcgVHJhbnNpdGlvbmFibGVUcmFuc2Zvcm0oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldCB0aGUgdXNlcidzIGluaXRpYWwgb3B0aW9ucy4gVGhpcyBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgdGhpcy5tb2RpZmllciwgYW5kIGFkZCBpdCB0byB0aGlzIChSZW5kZXJOb2RlKS5cbiAgICAgICAgLy8gTk9URTogdGhpcy5vcHRpb25zIGlzIGEgc2V0dGVyIGFuZCBpbml0aWFsaXplci5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gaW5pdGlhbE9wdGlvbnMuY29uc3RydWN0b3IubmFtZSA9PSBcIk9iamVjdFwiPyBpbml0aWFsT3B0aW9uczoge307IC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIGFuIG9iamVjdCBsaXRlcmFsLlxuICAgIH1cblxuICAgIC8vIEV2ZW50SGFuZGxlciBpbnRlcmZhY2VcbiAgICBwaXBlKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5fLmhhbmRsZXIucGlwZS5hcHBseSh0aGlzLl8uaGFuZGxlciwgYXJncyk7XG4gICAgfVxuICAgIHVucGlwZSgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuXy5oYW5kbGVyLnVucGlwZS5hcHBseSh0aGlzLl8uaGFuZGxlciwgYXJncyk7XG4gICAgfVxuICAgIG9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5fLmhhbmRsZXIub24uYXBwbHkodGhpcy5fLmhhbmRsZXIsIGFyZ3MpO1xuICAgIH1cbiAgICBvZmYoKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLl8uaGFuZGxlci5vbi5hcHBseSh0aGlzLl8uaGFuZGxlciwgYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVycyBhbmQgc2V0dGVycyBmb3IgTW9sZWN1bGUub3B0aW9uc1xuICAgIHNldCBvcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yZXNldE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG5ld09wdGlvbnMpO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXy5vcHRpb25zO1xuICAgIH1cbiAgICBzZXRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgICAgICAgbmV3T3B0aW9ucyA9IHR5cGVvZiBuZXdPcHRpb25zICE9IFwidW5kZWZpbmVkXCI/IG5ld09wdGlvbnM6IHt9O1xuXG4gICAgICAgIGlmIChuZXdPcHRpb25zLmNvbnN0cnVjdG9yLm5hbWUgIT0gXCJPYmplY3RcIikgeyByZXR1cm47IH1cblxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG5ld09wdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIFN1YmplY3QgdG8gY2hhbmdlIHdoZW4gRmFtby51cyBBUEkgY2hhbmdlcy5cbiAgICAgICAgICAgIGlmIChNb2RpZmllci5wcm90b3R5cGVbJycrcHJvcCsnRnJvbSddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllclsnJytwcm9wKydGcm9tJ10obmV3T3B0aW9uc1twcm9wXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGRlbGV0ZSB0aGUgbm9uLXdyaXRlYWJsZSB0cmFuc2Zvcm0gcHJvcGVydHkgYmVmb3JlIHNldHRpbmcgaXQuXG4gICAgICAgICAgICB0aGlzLl8ub3B0aW9uc1twcm9wXSA9IG5ld09wdGlvbnNbcHJvcF07XG4gICAgICAgICAgICAvLyBUT0RPOiBzZXQgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0eSBhcyBhIG5vbi13cml0ZWFibGUgcHJvcGVydHkgYWZ0ZXIgc2V0dGluZyBpdC5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNldE9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZXIgPSBuZXcgTW9kaWZpZXIoKTsgLy8gd2hhdCBoYXBwZW5lZCB0byB0aGUgb2xkIE1vZGlmaWVyPyBJcyBpdCB0aGUgaW5mYW1vdXMgRmFtby51cyBtZW1vcnkgbGVhaz9cbiAgICAgICAgdGhpcy5zZXQodGhpcy5tb2RpZmllcik7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyh0aGlzLl8uZGVmYXVsdE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHNldCB0cmFuc2Zvcm0obmV3VHJhbnNmb3JtKSB7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyh7dHJhbnNmb3JtOiBuZXdUcmFuc2Zvcm19KTtcbiAgICB9XG4gICAgZ2V0IHRyYW5zZm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy50cmFuc2Zvcm07XG4gICAgfVxufVxuIl19

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(5);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(6)(content, {});
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			module.hot.accept("!!/Users/josephpea/test/infamous-with-webpack/node_modules/css-loader/index.js!/Users/josephpea/test/infamous-with-webpack/node_modules/famous/src/core/famous.css", function() {
				var newContent = require("!!/Users/josephpea/test/infamous-with-webpack/node_modules/css-loader/index.js!/Users/josephpea/test/infamous-with-webpack/node_modules/famous/src/core/famous.css");
				if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
				update(newContent);
			});
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(8)();
		exports.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/.\n *\n * Owner: mark@famo.us\n * @license MPL 2.0\n * @copyright Famous Industries, Inc. 2014\n */\n\n.famous-root {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    opacity: .999999; /* ios8 hotfix */\n    overflow: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\n.famous-container, .famous-group {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px;\n    right: 0px;\n    overflow: visible;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    pointer-events: none;\n}\n\n.famous-group {\n    width: 0px;\n    height: 0px;\n    margin: 0px;\n    padding: 0px;\n}\n\n.famous-surface {\n    position: absolute;\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    pointer-events: auto;\n}\n\n.famous-container-group {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n", ""]);

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		var stylesInDom = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			isIE9 = memoize(function() {
				return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0;

		module.exports = function(list, options) {
			if(false) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}

			options = options || {};
			// Force single-tag solution on IE9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isIE9();

			var styles = listToStyles(list);
			addStylesToDom(styles, options);

			return function update(newList) {
				var mayRemove = [];
				for(var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if(newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for(var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if(domStyle.refs === 0) {
						for(var j = 0; j < domStyle.parts.length; j++)
							domStyle.parts[j]();
						delete stylesInDom[domStyle.id];
					}
				}
			};
		}

		function addStylesToDom(styles, options) {
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				if(domStyle) {
					domStyle.refs++;
					for(var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for(; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					var parts = [];
					for(var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
				}
			}
		}

		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = {css: css, media: media, sourceMap: sourceMap};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}

		function createStyleElement() {
			var styleElement = document.createElement("style");
			var head = getHeadElement();
			styleElement.type = "text/css";
			head.appendChild(styleElement);
			return styleElement;
		}

		function addStyle(obj, options) {
			var styleElement, update, remove;

			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement());
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else {
				styleElement = createStyleElement();
				update = applyToTag.bind(null, styleElement);
				remove = function () {
					styleElement.parentNode.removeChild(styleElement);
				};
			}

			update(obj);

			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
						return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}

		function replaceText(source, id, replacement) {
			var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
			var start = source.lastIndexOf(boundaries[0]);
			var wrappedReplacement = replacement
				? (boundaries[0] + replacement + boundaries[1])
				: "";
			if (source.lastIndexOf(boundaries[0]) >= 0) {
				var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
				return source.slice(0, start) + wrappedReplacement + source.slice(end);
			} else {
				return source + wrappedReplacement;
			}
		}

		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;

			if(styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}

		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;
			var sourceMap = obj.sourceMap;

			if(sourceMap && typeof btoa === "function") {
				try {
					css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
					css = "@import url(\"data:stylesheet/css;base64," + btoa(css) + "\")";
				} catch(e) {}
			}

			if(media) {
				styleElement.setAttribute("media", media)
			}

			if(styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while(styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Core.js 0.3.3
		 * https://github.com/zloirock/core-js
		 * License: http://rock.mit-license.org
		 * © 2014 Denis Pushkarev
		 */
		!function(returnThis, framework, undefined){
		'use strict';

		/******************************************************************************
		 * Module : common                                                            *
		 ******************************************************************************/

		var global          = returnThis()
		  // Shortcuts for [[Class]] & property names
		  , OBJECT          = 'Object'
		  , FUNCTION        = 'Function'
		  , ARRAY           = 'Array'
		  , STRING          = 'String'
		  , NUMBER          = 'Number'
		  , REGEXP          = 'RegExp'
		  , DATE            = 'Date'
		  , MAP             = 'Map'
		  , SET             = 'Set'
		  , WEAKMAP         = 'WeakMap'
		  , WEAKSET         = 'WeakSet'
		  , SYMBOL          = 'Symbol'
		  , PROMISE         = 'Promise'
		  , MATH            = 'Math'
		  , ARGUMENTS       = 'Arguments'
		  , PROTOTYPE       = 'prototype'
		  , CONSTRUCTOR     = 'constructor'
		  , TO_STRING       = 'toString'
		  , TO_STRING_TAG   = TO_STRING + 'Tag'
		  , TO_LOCALE       = 'toLocaleString'
		  , HAS_OWN         = 'hasOwnProperty'
		  , FOR_EACH        = 'forEach'
		  , ITERATOR        = 'iterator'
		  , FF_ITERATOR     = '@@' + ITERATOR
		  , PROCESS         = 'process'
		  , CREATE_ELEMENT  = 'createElement'
		  // Aliases global objects and prototypes
		  , Function        = global[FUNCTION]
		  , Object          = global[OBJECT]
		  , Array           = global[ARRAY]
		  , String          = global[STRING]
		  , Number          = global[NUMBER]
		  , RegExp          = global[REGEXP]
		  , Date            = global[DATE]
		  , Map             = global[MAP]
		  , Set             = global[SET]
		  , WeakMap         = global[WEAKMAP]
		  , WeakSet         = global[WEAKSET]
		  , Symbol          = global[SYMBOL]
		  , Math            = global[MATH]
		  , TypeError       = global.TypeError
		  , setTimeout      = global.setTimeout
		  , setImmediate    = global.setImmediate
		  , clearImmediate  = global.clearImmediate
		  , process         = global[PROCESS]
		  , nextTick        = process && process.nextTick
		  , document        = global.document
		  , html            = document && document.documentElement
		  , navigator       = global.navigator
		  , define          = global.define
		  , ArrayProto      = Array[PROTOTYPE]
		  , ObjectProto     = Object[PROTOTYPE]
		  , FunctionProto   = Function[PROTOTYPE]
		  , Infinity        = 1 / 0
		  , DOT             = '.';

		// http://jsperf.com/core-js-isobject
		function isObject(it){
		  return it != null && (typeof it == 'object' || typeof it == 'function');
		}
		function isFunction(it){
		  return typeof it == 'function';
		}
		// Native function?
		var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);

		// Object internal [[Class]] or toStringTag
		// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
		var buildIn = {
		  Undefined: 1, Null: 1, Array: 1, String: 1, Arguments: 1,
		  Function: 1, Error: 1, Boolean: 1, Number: 1, Date: 1, RegExp:1 
		} , toString = ObjectProto[TO_STRING];
		function setToStringTag(it, tag, stat){
		  if(it)has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG) || hidden(it, SYMBOL_TAG, tag);
		}
		function cof(it){
		  return it == undefined ? it === undefined
		    ? 'Undefined' : 'Null' : toString.call(it).slice(8, -1);
		}
		function classof(it){
		  var klass = cof(it), tag;
		  return klass == OBJECT && (tag = it[SYMBOL_TAG]) ? has(buildIn, tag) ? '~' + tag : tag : klass;
		}

		// Function
		var call = FunctionProto.call
		  , REFERENCE_GET;
		// Partial apply
		function part(/* ...args */){
		  var length = arguments.length
		    , args   = Array(length)
		    , i      = 0
		    , _      = path._
		    , holder = false;
		  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
		  return partial(this, args, length, holder, _, false);
		}
		// Internal partial application & context binding
		function partial(fn, argsPart, lengthPart, holder, _, bind, context){
		  assertFunction(fn);
		  return function(/* ...args */){
		    var that   = bind ? context : this
		      , length = arguments.length
		      , i = 0, j = 0, args;
		    if(!holder && !length)return invoke(fn, argsPart, that);
		    args = argsPart.slice();
		    if(holder)for(;lengthPart > i; i++)if(args[i] === _)args[i] = arguments[j++];
		    while(length > j)args.push(arguments[j++]);
		    return invoke(fn, args, that);
		  }
		}
		// Optional / simple context binding
		function ctx(fn, that, length){
		  assertFunction(fn);
		  if(~length && that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    }
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    }
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    }
		  } return function(/* ...args */){
		      return fn.apply(that, arguments);
		  }
		}
		// Fast apply
		// http://jsperf.lnkit.com/fast-apply/5
		function invoke(fn, args, that){
		  var un = that === undefined;
		  switch(args.length | 0){
		    case 0: return un ? fn()
		                      : fn.call(that);
		    case 1: return un ? fn(args[0])
		                      : fn.call(that, args[0]);
		    case 2: return un ? fn(args[0], args[1])
		                      : fn.call(that, args[0], args[1]);
		    case 3: return un ? fn(args[0], args[1], args[2])
		                      : fn.call(that, args[0], args[1], args[2]);
		    case 4: return un ? fn(args[0], args[1], args[2], args[3])
		                      : fn.call(that, args[0], args[1], args[2], args[3]);
		    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
		                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
		  } return              fn.apply(that, args);
		}

		// Object:
		var create           = Object.create
		  , getPrototypeOf   = Object.getPrototypeOf
		  , defineProperty   = Object.defineProperty
		  , defineProperties = Object.defineProperties
		  , getOwnDescriptor = Object.getOwnPropertyDescriptor
		  , getKeys          = Object.keys
		  , getNames         = Object.getOwnPropertyNames
		  , getSymbols       = Object.getOwnPropertySymbols
		  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
		  // Dummy, fix for not array-like ES3 string in es5 module
		  , ES5Object        = Object;
		function get(object, key){
		  if(has(object, key))return object[key];
		}
		function ownKeys(it){
		  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
		}
		// 19.1.2.1 Object.assign(target, source, ...)
		var assign = Object.assign || function(target, source){
		  var T = Object(assertDefined(target))
		    , l = arguments.length
		    , i = 1;
		  while(l > i){
		    var S      = ES5Object(arguments[i++])
		      , keys   = getKeys(S)
		      , length = keys.length
		      , j      = 0
		      , key;
		    while(length > j)T[key = keys[j++]] = S[key];
		  }
		  return T;
		}
		function keyOf(object, el){
		  var O      = ES5Object(object)
		    , keys   = getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		}

		// Array
		// array('str1,str2,str3') => ['str1', 'str2', 'str3']
		function array(it){
		  return String(it).split(',');
		}
		var push    = ArrayProto.push
		  , unshift = ArrayProto.unshift
		  , slice   = ArrayProto.slice
		  , splice  = ArrayProto.splice
		  , indexOf = ArrayProto.indexOf
		  , forEach = ArrayProto[FOR_EACH];
		/*
		 * 0 -> forEach
		 * 1 -> map
		 * 2 -> filter
		 * 3 -> some
		 * 4 -> every
		 * 5 -> find
		 * 6 -> findIndex
		 */
		function createArrayMethod(type){
		  var isMap       = type == 1
		    , isFilter    = type == 2
		    , isSome      = type == 3
		    , isEvery     = type == 4
		    , isFindIndex = type == 6
		    , noholes     = type == 5 || isFindIndex;
		  return function(callbackfn, that /* = undefined */){
		    var O      = Object(assertDefined(this))
		      , self   = ES5Object(O)
		      , f      = ctx(callbackfn, that, 3)
		      , length = toLength(self.length)
		      , index  = 0
		      , result = isMap ? Array(length) : isFilter ? [] : undefined
		      , val, res;
		    for(;length > index; index++)if(noholes || index in self){
		      val = self[index];
		      res = f(val, index, O);
		      if(type){
		        if(isMap)result[index] = res;             // map
		        else if(res)switch(type){
		          case 3: return true;                    // some
		          case 5: return val;                     // find
		          case 6: return index;                   // findIndex
		          case 2: result.push(val);               // filter
		        } else if(isEvery)return false;           // every
		      }
		    }
		    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
		  }
		}
		function createArrayContains(isContains){
		  return function(el, fromIndex /* = 0 */){
		    var O      = ES5Object(assertDefined(this))
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length);
		    if(isContains && el != el){
		      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
		    } else for(;length > index; index++)if(isContains || index in O){
		      if(O[index] === el)return isContains || index;
		    } return !isContains && -1;
		  }
		}
		// Simple reduce to object
		function turn(mapfn, target /* = [] */){
		  assertFunction(mapfn);
		  var memo   = target == undefined ? [] : Object(target)
		    , O      = ES5Object(this)
		    , length = toLength(O.length)
		    , index  = 0;
		  for(;length > index; index++){
		    if(mapfn(memo, O[index], index, this) === false)break;
		  }
		  return memo;
		}
		function generic(A, B){
		  // strange IE quirks mode bug -> use typeof vs isFunction
		  return typeof A == 'function' ? A : B;
		}

		// Math
		var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
		  , ceil   = Math.ceil
		  , floor  = Math.floor
		  , max    = Math.max
		  , min    = Math.min
		  , random = Math.random
		  , trunc  = Math.trunc || function(it){
		      return (it > 0 ? floor : ceil)(it);
		    }
		// 20.1.2.4 Number.isNaN(number)
		function sameNaN(number){
		  return number != number;
		}
		// 7.1.4 ToInteger
		function toInteger(it){
		  return isNaN(it) ? 0 : trunc(it);
		}
		// 7.1.15 ToLength
		function toLength(it){
		  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
		}
		function toIndex(index, length){
		  var index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		}

		function createReplacer(regExp, replace, isStatic){
		  var replacer = isObject(replace) ? function(part){
		    return replace[part];
		  } : replace;
		  return function(it){
		    return String(isStatic ? it : this).replace(regExp, replacer);
		  }
		}
		function createPointAt(toString){
		  return function(pos){
		    var s = String(assertDefined(this))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return toString ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? toString ? s.charAt(i) : a
		      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  }
		}

		// Assertion & errors
		var REDUCE_ERROR = 'Reduce of empty object with no initial value';
		function assert(condition, msg1, msg2){
		  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
		}
		function assertDefined(it){
		  if(it == undefined)throw TypeError('Function called on null or undefined');
		  return it;
		}
		function assertFunction(it){
		  assert(isFunction(it), it, ' is not a function!');
		  return it;
		}
		function assertObject(it){
		  assert(isObject(it), it, ' is not an object!');
		  return it;
		}
		function assertInstance(it, Constructor, name){
		  assert(it instanceof Constructor, name, ": use the 'new' operator!");
		}

		// Property descriptors & Symbol
		function descriptor(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  }
		}
		function simpleSet(object, key, value){
		  object[key] = value;
		  return object;
		}
		function createDefiner(bitmap){
		  return DESC ? function(object, key, value){
		    return defineProperty(object, key, descriptor(bitmap, value));
		  } : simpleSet;
		}
		function uid(key){
		  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
		}
		function getWellKnownSymbol(name, setter){
		  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
		}
		// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
		var DESC   = !!function(){try{return defineProperty({}, 0, ObjectProto)}catch(e){}}()
		  , sid    = 0
		  , hidden = createDefiner(1)
		  , set    = Symbol ? simpleSet : hidden
		  , safeSymbol = Symbol || uid;
		function assignHidden(target, src){
		  for(var key in src)hidden(target, key, src[key]);
		  return target;
		}

		// Iterators
		var SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR)
		  , SYMBOL_TAG      = getWellKnownSymbol(TO_STRING_TAG)
		  , SUPPORT_FF_ITER = FF_ITERATOR in ArrayProto
		  , ITER  = safeSymbol('iter')
		  , KEY   = 1
		  , VALUE = 2
		  , Iterators = {}
		  , IteratorPrototype = {}
		  , NATIVE_ITERATORS = SYMBOL_ITERATOR in ArrayProto
		    // Safari define byggy iterators w/o `next`
		  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		setIterator(IteratorPrototype, returnThis);
		function setIterator(O, value){
		  hidden(O, SYMBOL_ITERATOR, value);
		  // Add iterator for FF iterator protocol
		  SUPPORT_FF_ITER && hidden(O, FF_ITERATOR, value);
		}
		function createIterator(Constructor, NAME, next, proto){
		  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		}
		function defineIterator(Constructor, NAME, value, DEFAULT){
		  var proto = Constructor[PROTOTYPE]
		    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
		  if(framework){
		    // Define iterator
		    setIterator(proto, iter);
		    if(iter !== value){
		      var iterProto = getPrototypeOf(iter.call(new Constructor));
		      // Set @@toStringTag to native iterators
		      setToStringTag(iterProto, NAME + ' Iterator', true);
		      // FF fix
		      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
		    }
		  }
		  // Plug for library
		  Iterators[NAME] = iter;
		  // FF & v8 fix
		  Iterators[NAME + ' Iterator'] = returnThis;
		}
		function defineStdIterators(Base, NAME, Constructor, next, DEFAULT){
		  function createIter(kind){
		    return function(){
		      return new Constructor(this, kind);
		    }
		  }
		  createIterator(Constructor, NAME, next);
		  defineIterator(Base, NAME, createIter(DEFAULT), DEFAULT == VALUE ? 'values' : 'entries');
		  DEFAULT && $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
		    entries: createIter(KEY+VALUE),
		    keys:    createIter(KEY),
		    values:  createIter(VALUE)
		  });
		}
		function iterResult(done, value){
		  return {value: value, done: !!done};
		}
		function isIterable(it){
		  var O = Object(it);
		  return SYMBOL_ITERATOR in O || has(Iterators, classof(O));
		}
		function getIterator(it){
		  return assertObject((it[SYMBOL_ITERATOR] || Iterators[classof(it)]).call(it));
		}
		function stepCall(fn, value, entries){
		  return entries ? invoke(fn, value) : fn(value);
		}
		function forOf(iterable, entries, fn, that){
		  var iterator = getIterator(iterable)
		    , f        = ctx(fn, that, entries ? 2 : 1)
		    , step;
		  while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false)return;
		}

		// core
		var NODE = cof(process) == PROCESS
		  , core = {}
		  , path = framework ? global : core
		  , old  = global.core
		  // type bitmap
		  , FORCED = 1
		  , GLOBAL = 2
		  , STATIC = 4
		  , PROTO  = 8
		  , BIND   = 16
		  , WRAP   = 32;
		function $define(type, name, source){
		  var key, own, out, exp
		    , isGlobal = type & GLOBAL
		    , target   = isGlobal ? global : (type & STATIC)
		        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
		    , exports  = isGlobal ? core : core[name] || (core[name] = {});
		  if(isGlobal)source = name;
		  for(key in source){
		    // there is a similar native
		    own = !(type & FORCED) && target && key in target
		      && (!isFunction(target[key]) || isNative(target[key]));
		    // export native or passed
		    out = (own ? target : source)[key];
		    // bind timers to global for call from export context
		    if(type & BIND && own)exp = ctx(out, global);
		    // wrap global constructors for prevent change them in library
		    else if(type & WRAP && !framework && target[key] == out){
		      exp = function(param){
		        return this instanceof out ? new out(param) : out(param);
		      }
		      exp[PROTOTYPE] = out[PROTOTYPE];
		    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
		    // export
		    if(exports[key] != out)hidden(exports, key, exp);
		    // extend global
		    if(framework && target && !own){
		      if(isGlobal)target[key] = out;
		      else delete target[key] && hidden(target, key, out);
		    }
		  }
		}
		// CommonJS export
		if(NODE)module.exports = core;
		// RequireJS export
		if(isFunction(define) && define.amd)define(function(){return core});
		// Export to global object
		if(!NODE || framework){
		  core.noConflict = function(){
		    global.core = old;
		    return core;
		  }
		  global.core = core;
		}

		/******************************************************************************
		 * Module : global                                                            *
		 ******************************************************************************/

		$define(GLOBAL + FORCED, {global: global});

		/******************************************************************************
		 * Module : es6_symbol                                                        *
		 ******************************************************************************/

		// ECMAScript 6 symbols shim
		!function(TAG, SymbolRegistry, setter){
		  // 19.4.1.1 Symbol([description])
		  if(!isNative(Symbol)){
		    Symbol = function(description){
		      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
		      var tag = uid(description);
		      setter && defineProperty(ObjectProto, tag, {
		        configurable: true,
		        set: function(value){
		          hidden(this, tag, value);
		        }
		      });
		      return set(create(Symbol[PROTOTYPE]), TAG, tag);
		    }
		    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
		      return this[TAG];
		    });
		  }
		  $define(GLOBAL + WRAP, {Symbol: Symbol});
		  
		  var symbolStatics = {
		    // 19.4.2.1 Symbol.for(key)
		    'for': function(key){
		      return has(SymbolRegistry, key += '')
		        ? SymbolRegistry[key]
		        : SymbolRegistry[key] = Symbol(key);
		    },
		    // 19.4.2.4 Symbol.iterator
		    iterator: SYMBOL_ITERATOR,
		    // 19.4.2.5 Symbol.keyFor(sym)
		    keyFor: part.call(keyOf, SymbolRegistry),
		    // 19.4.2.13 Symbol.toStringTag
		    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
		    pure: safeSymbol,
		    set: set,
		    useSetter: function(){setter = true},
		    useSimple: function(){setter = false}
		  };
		  // 19.4.2.2 Symbol.hasInstance
		  // 19.4.2.3 Symbol.isConcatSpreadable
		  // 19.4.2.6 Symbol.match
		  // 19.4.2.8 Symbol.replace
		  // 19.4.2.9 Symbol.search
		  // 19.4.2.10 Symbol.species
		  // 19.4.2.11 Symbol.split
		  // 19.4.2.12 Symbol.toPrimitive
		  // 19.4.2.14 Symbol.unscopables
		  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,' +
		    'species,split,toPrimitive,unscopables'), function(it){
		      symbolStatics[it] = getWellKnownSymbol(it);
		    }
		  );
		  $define(STATIC, SYMBOL, symbolStatics);
		  
		  setToStringTag(Symbol, SYMBOL);
		  
		  // 26.1.11 Reflect.ownKeys(target)
		  $define(GLOBAL, {Reflect: {ownKeys: ownKeys}});
		}(safeSymbol('tag'), {}, true);

		/******************************************************************************
		 * Module : es6                                                               *
		 ******************************************************************************/

		// ECMAScript 6 shim
		!function(isFinite, tmp){
		  var RangeError = global.RangeError
		      // 20.1.2.3 Number.isInteger(number)
		    , isInteger = Number.isInteger || function(it){
		        return !isObject(it) && isFinite(it) && floor(it) === it;
		      }
		      // 20.2.2.28 Math.sign(x)
		    , sign = Math.sign || function sign(it){
		        return (it = +it) == 0 || it != it ? it : it < 0 ? -1 : 1;
		      }
		    , pow  = Math.pow
		    , abs  = Math.abs
		    , exp  = Math.exp
		    , log  = Math.log
		    , sqrt = Math.sqrt
		    , fcc  = String.fromCharCode
		    , at   = createPointAt(true);
		  
		  var objectStatic = {
		    // 19.1.3.1 Object.assign(target, source)
		    assign: assign,
		    // 19.1.3.10 Object.is(value1, value2)
		    is: function(x, y){
		      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
		    }
		  };
		  // 19.1.3.19 Object.setPrototypeOf(O, proto)
		  // Works with __proto__ only. Old v8 can't works with null proto objects.
		  '__proto__' in ObjectProto && function(buggy, set){
		    try {
		      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
		      set({}, ArrayProto);
		    } catch(e){ buggy = true }
		    objectStatic.setPrototypeOf = function(O, proto){
		      assertObject(O);
		      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
		      if(buggy)O.__proto__ = proto;
		      else set(O, proto);
		      return O;
		    }
		  }();
		  $define(STATIC, OBJECT, objectStatic);
		  
		  // 20.2.2.5 Math.asinh(x)
		  function asinh(x){
		    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
		  }
		  
		  $define(STATIC, NUMBER, {
		    // 20.1.2.1 Number.EPSILON
		    EPSILON: pow(2, -52),
		    // 20.1.2.2 Number.isFinite(number)
		    isFinite: function(it){
		      return typeof it == 'number' && isFinite(it);
		    },
		    // 20.1.2.3 Number.isInteger(number)
		    isInteger: isInteger,
		    // 20.1.2.4 Number.isNaN(number)
		    isNaN: sameNaN,
		    // 20.1.2.5 Number.isSafeInteger(number)
		    isSafeInteger: function(number){
		      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
		    },
		    // 20.1.2.6 Number.MAX_SAFE_INTEGER
		    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
		    // 20.1.2.10 Number.MIN_SAFE_INTEGER
		    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
		    // 20.1.2.12 Number.parseFloat(string)
		    parseFloat: parseFloat,
		    // 20.1.2.13 Number.parseInt(string, radix)
		    parseInt: parseInt
		  });
		  
		  $define(STATIC, MATH, {
		    // 20.2.2.3 Math.acosh(x)
		    acosh: function(x){
		      return x < 1 ? NaN : log(x + sqrt(x * x - 1));
		    },
		    // 20.2.2.5 Math.asinh(x)
		    asinh: asinh,
		    // 20.2.2.7 Math.atanh(x)
		    atanh: function(x){
		      return x == 0 ? +x : log((1 + +x) / (1 - x)) / 2;
		    },
		    // 20.2.2.9 Math.cbrt(x)
		    cbrt: function(x){
		      return sign(x) * pow(abs(x), 1 / 3);
		    },
		    // 20.2.2.11 Math.clz32 (x)
		    clz32: function(x){
		      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
		    },
		    // 20.2.2.12 Math.cosh(x)
		    cosh: function(x){
		      return (exp(x) + exp(-x)) / 2;
		    },
		    // 20.2.2.14 Math.expm1(x)
		    expm1: function(x){
		      return x == 0 ? +x : x > -1e-6 && x < 1e-6 ? +x + x * x / 2 : exp(x) - 1;
		    },
		    // 20.2.2.16 Math.fround(x)
		    // TODO: fallback for IE9-
		    fround: function(x){
		      return new Float32Array([x])[0];
		    },
		    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
		    // TODO: work with very large & small numbers
		    hypot: function(value1, value2){
		      var sum    = 0
		        , length = arguments.length
		        , value;
		      while(length--){
		        value = +arguments[length];
		        if(value == Infinity || value == -Infinity)return Infinity;
		        sum += value * value;
		      }
		      return sqrt(sum);
		    },
		    // 20.2.2.18 Math.imul(x, y)
		    imul: function(x, y){
		      var UInt16 = 0xffff
		        , xl = UInt16 & x
		        , yl = UInt16 & y;
		      return 0 | xl * yl + ((UInt16 & x >>> 16) * yl + xl * (UInt16 & y >>> 16) << 16 >>> 0);
		    },
		    // 20.2.2.20 Math.log1p(x)
		    log1p: function(x){
		      return x > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + +x);
		    },
		    // 20.2.2.21 Math.log10(x)
		    log10: function(x){
		      return log(x) / Math.LN10;
		    },
		    // 20.2.2.22 Math.log2(x)
		    log2: function(x){
		      return log(x) / Math.LN2;
		    },
		    // 20.2.2.28 Math.sign(x)
		    sign: sign,
		    // 20.2.2.30 Math.sinh(x)
		    sinh: function(x){
		      return x == 0 ? +x : (exp(x) - exp(-x)) / 2;
		    },
		    // 20.2.2.33 Math.tanh(x)
		    tanh: function(x){
		      return isFinite(x) ? x == 0 ? +x : (exp(x) - exp(-x)) / (exp(x) + exp(-x)) : sign(x);
		    },
		    // 20.2.2.34 Math.trunc(x)
		    trunc: trunc
		  });
		  // 20.2.1.9 Math[@@toStringTag]
		  setToStringTag(Math, MATH, true);
		  
		  function assertNotRegExp(it){
		    if(isObject(it) && it instanceof RegExp)throw TypeError();
		  }
		  $define(STATIC, STRING, {
		    // 21.1.2.2 String.fromCodePoint(...codePoints)
		    fromCodePoint: function(){
		      var res = []
		        , len = arguments.length
		        , i   = 0
		        , code
		      while(len > i){
		        code = +arguments[i++];
		        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
		        res.push(code < 0x10000
		          ? fcc(code)
		          : fcc(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
		        );
		      } return res.join('');
		    },
		    // 21.1.2.4 String.raw(callSite, ...substitutions)
		    raw: function(callSite){
		      var raw = ES5Object(assertDefined(callSite.raw))
		        , len = toLength(raw.length)
		        , sln = arguments.length
		        , res = []
		        , i   = 0;
		      while(len > i){
		        res.push(String(raw[i++]));
		        if(i < sln)res.push(String(arguments[i]));
		      } return res.join('');
		    }
		  });
		  $define(PROTO, STRING, {
		    // 21.1.3.3 String.prototype.codePointAt(pos)
		    codePointAt: createPointAt(false),
		    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
		    endsWith: function(searchString, endPosition /* = @length */){
		      assertNotRegExp(searchString);
		      var len = this.length
		        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
		      searchString += '';
		      return String(this).slice(end - searchString.length, end) === searchString;
		    },
		    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
		    includes: function(searchString, position /* = 0 */){
		      return !!~String(assertDefined(this)).indexOf(searchString, position);
		    },
		    // 21.1.3.13 String.prototype.repeat(count)
		    repeat: function(count){
		      var str = String(assertDefined(this))
		        , res = ''
		        , n   = toInteger(count);
		      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
		      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
		      return res;
		    },
		    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
		    startsWith: function(searchString, position /* = 0 */){
		      assertNotRegExp(searchString);
		      var index = toLength(min(position, this.length));
		      searchString += '';
		      return String(this).slice(index, index + searchString.length) === searchString;
		    }
		  });
		  // 21.1.3.27 String.prototype[@@iterator]()
		  defineStdIterators(String, STRING, function(iterated){
		    set(this, ITER, {o: String(iterated), i: 0});
		  // 21.1.5.2.1 %StringIteratorPrototype%.next()
		  }, function(){
		    var iter  = this[ITER]
		      , O     = iter.o
		      , index = iter.i
		      , point;
		    if(index >= O.length)return iterResult(1);
		    point = at.call(O, index);
		    iter.i += point.length;
		    return iterResult(0, point);
		  });
		  
		  $define(STATIC, ARRAY, {
		    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
		    from: function(arrayLike, mapfn /* -> it */, that /* = undefind */){
		      var O       = Object(assertDefined(arrayLike))
		        , result  = new (generic(this, Array))
		        , mapping = mapfn !== undefined
		        , f       = mapping ? ctx(mapfn, that, 2) : undefined
		        , index   = 0
		        , length;
		      if(isIterable(O))for(var iter = getIterator(O), step; !(step = iter.next()).done; index++){
		        result[index] = mapping ? f(step.value, index) : step.value;
		      } else for(length = toLength(O.length); length > index; index++){
		        result[index] = mapping ? f(O[index], index) : O[index];
		      }
		      result.length = index;
		      return result;
		    },
		    // 22.1.2.3 Array.of( ...items)
		    of: function(/* ...args */){
		      var index  = 0
		        , length = arguments.length
		        , result = new (generic(this, Array))(length);
		      while(length > index)result[index] = arguments[index++];
		      result.length = length;
		      return result;
		    }
		  });
		  $define(PROTO, ARRAY, {
		    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
		    copyWithin: function(target /* = 0 */, start /* = 0 */, end /* = @length */){
		      var O     = Object(assertDefined(this))
		        , len   = toLength(O.length)
		        , to    = toIndex(target, len)
		        , from  = toIndex(start, len)
		        , fin   = end === undefined ? len : toIndex(end, len)
		        , count = min(fin - from, len - to)
		        , inc   = 1;
		      if(from < to && to < from + count){
		        inc  = -1;
		        from = from + count - 1;
		        to   = to + count - 1;
		      }
		      while(count-- > 0){
		        if(from in O)O[to] = O[from];
		        else delete O[to];
		        to += inc;
		        from += inc;
		      } return O;
		    },
		    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
		    fill: function(value, start /* = 0 */, end /* = @length */){
		      var O      = Object(assertDefined(this))
		        , length = toLength(O.length)
		        , index  = toIndex(start, length)
		        , endPos = end === undefined ? length : toIndex(end, length);
		      while(endPos > index)O[index++] = value;
		      return O;
		    },
		    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
		    find: createArrayMethod(5),
		    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
		    findIndex: createArrayMethod(6)
		  });
		  // 22.1.3.4 Array.prototype.entries()
		  // 22.1.3.13 Array.prototype.keys()
		  // 22.1.3.29 Array.prototype.values()
		  // 22.1.3.30 Array.prototype[@@iterator]()
		  defineStdIterators(Array, ARRAY, function(iterated, kind){
		    set(this, ITER, {o: ES5Object(iterated), i: 0, k: kind});
		  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		  }, function(){
		    var iter  = this[ITER]
		      , O     = iter.o
		      , kind  = iter.k
		      , index = iter.i++;
		    if(!O || index >= O.length)return iter.o = undefined, iterResult(1);
		    if(kind == KEY)  return iterResult(0, index);
		    if(kind == VALUE)return iterResult(0, O[index]);
		                     return iterResult(0, [index, O[index]]);
		  }, VALUE);
		  
		  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		  Iterators[ARGUMENTS] = Iterators[ARRAY];
		  
		  // 24.3.3 JSON[@@toStringTag]
		  setToStringTag(global.JSON, 'JSON', true);
		  
		  if(framework){
		    // 19.1.3.6 Object.prototype.toString()
		    tmp[SYMBOL_TAG] = DOT;
		    if(cof(tmp) != DOT)hidden(ObjectProto, TO_STRING, function(){
		      return '[object ' + classof(this) + ']';
		    });
		    
		    // 21.2.5.3 get RegExp.prototype.flags()
		    if(/./g.flags != 'g')defineProperty(RegExp[PROTOTYPE], 'flags', {
		      configurable: true,
		      get: createReplacer(/^.*\/(\w*)$/, '$1')
		    });
		  }
		}(isFinite, {});

		/******************************************************************************
		 * Module : immediate                                                         *
		 ******************************************************************************/

		// setImmediate shim
		// Node.js 0.9+ & IE10+ has setImmediate, else:
		isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
		  var postMessage      = global.postMessage
		    , addEventListener = global.addEventListener
		    , MessageChannel   = global.MessageChannel
		    , counter          = 0
		    , queue            = {}
		    , defer, channel, port;
		  setImmediate = function(fn){
		    var args = [], i = 1;
		    while(arguments.length > i)args.push(arguments[i++]);
		    queue[++counter] = function(){
		      invoke(isFunction(fn) ? fn : Function(fn), args);
		    }
		    defer(counter);
		    return counter;
		  }
		  clearImmediate = function(id){
		    delete queue[id];
		  }
		  function run(id){
		    if(has(queue, id)){
		      var fn = queue[id];
		      delete queue[id];
		      fn();
		    }
		  }
		  function listner(event){
		    run(event.data);
		  }
		  // Node.js 0.8-
		  if(NODE){
		    defer = function(id){
		      nextTick(part.call(run, id));
		    }
		  // Modern browsers, skip implementation for WebWorkers
		  // IE8 has postMessage, but it's sync & typeof its postMessage is object
		  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
		    defer = function(id){
		      postMessage(id, '*');
		    }
		    addEventListener('message', listner, false);
		  // WebWorkers
		  } else if(isFunction(MessageChannel)){
		    channel = new MessageChannel;
		    port    = channel.port2;
		    channel.port1.onmessage = listner;
		    defer = ctx(port.postMessage, port, 1);
		  // IE8-
		  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
		    defer = function(id){
		      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
		        html.removeChild(this);
		        run(id);
		      }
		    }
		  // Rest old browsers
		  } else {
		    defer = function(id){
		      setTimeout(part.call(run, id), 0);
		    }
		  }
		}('onreadystatechange');
		$define(GLOBAL + BIND, {
		  setImmediate:   setImmediate,
		  clearImmediate: clearImmediate
		});

		/******************************************************************************
		 * Module : es6_promise                                                       *
		 ******************************************************************************/

		// ES6 promises shim
		// Based on https://github.com/getify/native-promise-only/
		!function(Promise, test){
		  isFunction(Promise) && isFunction(Promise.resolve)
		  && Promise.resolve(test = new Promise(Function())) == test
		  || function(asap, DEF){
		    function isThenable(o){
		      var then;
		      if(isObject(o))then = o.then;
		      return isFunction(then) ? then : false;
		    }
		    function notify(def){
		      var chain = def.chain;
		      chain.length && asap(function(){
		        var msg = def.msg
		          , ok  = def.state == 1
		          , i   = 0;
		        while(chain.length > i)!function(react){
		          var cb = ok ? react.ok : react.fail
		            , ret, then;
		          try {
		            if(cb){
		              ret = cb === true ? msg : cb(msg);
		              if(ret === react.P){
		                react.rej(TypeError(PROMISE + '-chain cycle'));
		              } else if(then = isThenable(ret)){
		                then.call(ret, react.res, react.rej);
		              } else react.res(ret);
		            } else react.rej(msg);
		          } catch(err){
		            react.rej(err);
		          }
		        }(chain[i++]);
		        chain.length = 0;
		      });
		    }
		    function resolve(msg){
		      var def = this
		        , then, wrapper;
		      if(def.done)return;
		      def.done = true;
		      def = def.def || def; // unwrap
		      try {
		        if(then = isThenable(msg)){
		          wrapper = {def: def, done: false}; // wrap
		          then.call(msg, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
		        } else {
		          def.msg = msg;
		          def.state = 1;
		          notify(def);
		        }
		      } catch(err){
		        reject.call(wrapper || {def: def, done: false}, err); // wrap
		      }
		    }
		    function reject(msg){
		      var def = this;
		      if(def.done)return;
		      def.done = true;
		      def = def.def || def; // unwrap
		      def.msg = msg;
		      def.state = 2;
		      notify(def);
		    }
		    // 25.4.3.1 Promise(executor)
		    Promise = function(executor){
		      assertFunction(executor);
		      assertInstance(this, Promise, PROMISE);
		      var def = {chain: [], state: 0, done: false, msg: undefined};
		      hidden(this, DEF, def);
		      try {
		        executor(ctx(resolve, def, 1), ctx(reject, def, 1));
		      } catch(err){
		        reject.call(def, err);
		      }
		    }
		    assignHidden(Promise[PROTOTYPE], {
		      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
		      then: function(onFulfilled, onRejected){
		        var react = {
		          ok:   isFunction(onFulfilled) ? onFulfilled : true,
		          fail: isFunction(onRejected)  ? onRejected  : false
		        } , P = react.P = new this[CONSTRUCTOR](function(resolve, reject){
		          react.res = assertFunction(resolve);
		          react.rej = assertFunction(reject);
		        }), def = this[DEF];
		        def.chain.push(react);
		        def.state && notify(def);
		        return P;
		      },
		      // 25.4.5.1 Promise.prototype.catch(onRejected)
		      'catch': function(onRejected){
		        return this.then(undefined, onRejected);
		      }
		    });
		    assignHidden(Promise, {
		      // 25.4.4.1 Promise.all(iterable)
		      all: function(iterable){
		        var Promise = this
		          , values  = [];
		        return new Promise(function(resolve, reject){
		          forOf(iterable, false, push, values);
		          var remaining = values.length
		            , results   = Array(remaining);
		          if(remaining)forEach.call(values, function(promise, index){
		            Promise.resolve(promise).then(function(value){
		              results[index] = value;
		              --remaining || resolve(results);
		            }, reject);
		          });
		          else resolve(results);
		        });
		      },
		      // 25.4.4.4 Promise.race(iterable)
		      race: function(iterable){
		        var Promise = this;
		        return new Promise(function(resolve, reject){
		          forOf(iterable, false, function(promise){
		            Promise.resolve(promise).then(resolve, reject);
		          });
		        });
		      },
		      // 25.4.4.5 Promise.reject(r)
		      reject: function(r){
		        return new this(function(resolve, reject){
		          reject(r);
		        });
		      },
		      // 25.4.4.6 Promise.resolve(x)
		      resolve: function(x){
		        return isObject(x) && getPrototypeOf(x) === this[PROTOTYPE]
		          ? x : new this(function(resolve, reject){
		            resolve(x);
		          });
		      }
		    });
		  }(nextTick || setImmediate, safeSymbol('def'));
		  setToStringTag(Promise, PROMISE);
		  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
		}(global[PROMISE]);

		/******************************************************************************
		 * Module : es6_collections                                                   *
		 ******************************************************************************/

		// ECMAScript 6 collections shim
		!function(){
		  var UID   = safeSymbol('uid')
		    , DATA  = safeSymbol('data')
		    , WEAK  = safeSymbol('weak')
		    , LAST  = safeSymbol('last')
		    , FIRST = safeSymbol('first')
		    , SIZE  = DESC ? safeSymbol('size') : 'size'
		    , uid   = 0;
		  
		  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
		    var ADDER = isMap ? 'set' : 'add'
		      , proto = C && C[PROTOTYPE]
		      , O     = {};
		    function initFromIterable(that, iterable){
		      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
		      return that;
		    }
		    function fixSVZ(key, chain){
		      var method = proto[key];
		      framework && hidden(proto, key, function(a, b){
		        var result = method.call(this, a === 0 ? 0 : a, b);
		        return chain ? this : result;
		      });
		    }
		    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, 'entries')))){
		      // create collection constructor
		      C = isWeak
		        ? function(iterable){
		            assertInstance(this, C, NAME);
		            set(this, UID, uid++);
		            initFromIterable(this, iterable);
		          }
		        : function(iterable){
		            var that = this;
		            assertInstance(that, C, NAME);
		            set(that, DATA, create(null));
		            set(that, SIZE, 0);
		            set(that, LAST, undefined);
		            set(that, FIRST, undefined);
		            initFromIterable(that, iterable);
		          };
		      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
		      isWeak || defineProperty(C[PROTOTYPE], 'size', {get: function(){
		        return assertDefined(this[SIZE]);
		      }});
		    } else {
		      var Native = C
		        , inst   = new C
		        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
		        , buggyZero;
		      // wrap to init collections from iterable
		      if(!NATIVE_ITERATORS || !C.length){
		        C = function(iterable){
		          assertInstance(this, C, NAME);
		          return initFromIterable(new Native, iterable);
		        }
		        C[PROTOTYPE] = proto;
		      }
		      isWeak || inst[FOR_EACH](function(val, key){
		        buggyZero = 1 / key === -Infinity;
		      });
		      // fix converting -0 key to +0
		      if(buggyZero){
		        fixSVZ('delete');
		        fixSVZ('has');
		        isMap && fixSVZ('get');
		      }
		      // + fix .add & .set for chaining
		      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
		    }
		    setToStringTag(C, NAME);
		    
		    O[NAME] = C;
		    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
		    
		    // add .keys, .values, .entries, [@@iterator]
		    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
		    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
		      set(this, ITER, {o: iterated, k: kind});
		    }, function(){
		      var iter  = this[ITER]
		        , O     = iter.o
		        , kind  = iter.k
		        , entry = iter.l;
		      while(entry && entry.r)entry = entry.p;
		      if(!O || !(iter.l = entry = entry ? entry.n : O[FIRST]))return iter.o = undefined, iterResult(1);
		      if(kind == KEY)  return iterResult(0, entry.k);
		      if(kind == VALUE)return iterResult(0, entry.v);
		                       return iterResult(0, [entry.k, entry.v]);   
		    }, isMap ? KEY+VALUE : VALUE);
		    
		    return C;
		  }
		  
		  function fastKey(it, create){
		    // return it with 'S' prefix if it's string or with 'P' prefix for over primitives
		    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
		    // if it hasn't object id - add next
		    if(!has(it, UID)){
		      if(create)hidden(it, UID, ++uid);
		      else return '';
		    }
		    // return object id with 'O' prefix
		    return 'O' + it[UID];
		  }
		  
		  function def(that, key, value){
		    var index = fastKey(key, true)
		      , data  = that[DATA]
		      , last  = that[LAST]
		      , entry;
		    if(index in data)data[index].v = value;
		    else {
		      entry = data[index] = {k: key, v: value, p: last};
		      if(!that[FIRST])that[FIRST] = entry;
		      if(last)last.n = entry;
		      that[LAST] = entry;
		      that[SIZE]++;
		    } return that;
		  }
		  function del(that, index){
		    var data  = that[DATA]
		      , entry = data[index]
		      , next  = entry.n
		      , prev  = entry.p;
		    delete data[index];
		    entry.r = true;
		    if(prev)prev.n = next;
		    if(next)next.p = prev;
		    if(that[FIRST] == entry)that[FIRST] = next;
		    if(that[LAST] == entry)that[LAST] = prev;
		    that[SIZE]--;
		  }

		  var collectionMethods = {
		    // 23.1.3.1 Map.prototype.clear()
		    // 23.2.3.2 Set.prototype.clear()
		    clear: function(){
		      for(var index in this[DATA])del(this, index);
		    },
		    // 23.1.3.3 Map.prototype.delete(key)
		    // 23.2.3.4 Set.prototype.delete(value)
		    'delete': function(key){
		      var index    = fastKey(key)
		        , contains = index in this[DATA];
		      if(contains)del(this, index);
		      return contains;
		    },
		    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
		    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
		    forEach: function(callbackfn, that /* = undefined */){
		      var f = ctx(callbackfn, that, 3)
		        , entry;
		      while(entry = entry ? entry.n : this[FIRST]){
		        f(entry.v, entry.k, this);
		        while(entry && entry.r)entry = entry.p;
		      }
		    },
		    // 23.1.3.7 Map.prototype.has(key)
		    // 23.2.3.7 Set.prototype.has(value)
		    has: function(key){
		      return fastKey(key) in this[DATA];
		    }
		  }
		  
		  // 23.1 Map Objects
		  Map = getCollection(Map, MAP, {
		    // 23.1.3.6 Map.prototype.get(key)
		    get: function(key){
		      var entry = this[DATA][fastKey(key)];
		      return entry && entry.v;
		    },
		    // 23.1.3.9 Map.prototype.set(key, value)
		    set: function(key, value){
		      return def(this, key === 0 ? 0 : key, value);
		    }
		  }, collectionMethods, true);
		  
		  // 23.2 Set Objects
		  Set = getCollection(Set, SET, {
		    // 23.2.3.1 Set.prototype.add(value)
		    add: function(value){
		      return def(this, value = value === 0 ? 0 : value, value);
		    }
		  }, collectionMethods);
		  
		  function setWeak(that, key, value){
		    has(assertObject(key), WEAK) || hidden(key, WEAK, {});
		    key[WEAK][that[UID]] = value;
		    return that;
		  }
		  function hasWeak(key){
		    return isObject(key) && has(key, WEAK) && has(key[WEAK], this[UID]);
		  }
		  var weakMethods = {
		    // 23.3.3.2 WeakMap.prototype.delete(key)
		    // 23.4.3.3 WeakSet.prototype.delete(value)
		    'delete': function(key){
		      return hasWeak.call(this, key) && delete key[WEAK][this[UID]];
		    },
		    // 23.3.3.4 WeakMap.prototype.has(key)
		    // 23.4.3.4 WeakSet.prototype.has(value)
		    has: hasWeak
		  };
		  
		  // 23.3 WeakMap Objects
		  WeakMap = getCollection(WeakMap, WEAKMAP, {
		    // 23.3.3.3 WeakMap.prototype.get(key)
		    get: function(key){
		      if(isObject(key) && has(key, WEAK))return key[WEAK][this[UID]];
		    },
		    // 23.3.3.5 WeakMap.prototype.set(key, value)
		    set: function(key, value){
		      return setWeak(this, key, value);
		    }
		  }, weakMethods, true, true);
		  
		  // 23.4 WeakSet Objects
		  WeakSet = getCollection(WeakSet, WEAKSET, {
		    // 23.4.3.1 WeakSet.prototype.add(value)
		    add: function(value){
		      return setWeak(this, value, true);
		    }
		  }, weakMethods, false, true);
		}();

		/******************************************************************************
		 * Module : es7                                                               *
		 ******************************************************************************/

		!function(){
		  $define(PROTO, ARRAY, {
		    // https://github.com/domenic/Array.prototype.includes
		    includes: createArrayContains(true)
		  });
		  $define(PROTO, STRING, {
		    // https://github.com/mathiasbynens/String.prototype.at
		    at: createPointAt(true)
		  });
		  
		  function createObjectToArray(isEntries){
		    return function(object){
		      var O      = ES5Object(object)
		        , keys   = getKeys(object)
		        , length = keys.length
		        , i      = 0
		        , result = Array(length)
		        , key;
		      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
		      else while(length > i)result[i] = O[keys[i++]];
		      return result;
		    }
		  }
		  $define(STATIC, OBJECT, {
		    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
		    values: createObjectToArray(false),
		    entries: createObjectToArray(true)
		  });
		  $define(STATIC, REGEXP, {
		    // https://gist.github.com/kangax/9698100
		    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
		  });
		}();

		/******************************************************************************
		 * Module : es7_refs                                                          *
		 ******************************************************************************/

		// https://github.com/zenparsing/es-abstract-refs
		!function(REFERENCE){
		  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
		  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
		    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
		  
		  $define(STATIC, SYMBOL, {
		    referenceGet: REFERENCE_GET,
		    referenceSet: REFERENCE_SET,
		    referenceDelete: REFERENCE_DELETE
		  });
		  
		  hidden(FunctionProto, REFERENCE_GET, returnThis);
		  
		  function setMapMethods(Constructor){
		    if(Constructor){
		      var MapProto = Constructor[PROTOTYPE];
		      hidden(MapProto, REFERENCE_GET, MapProto.get);
		      hidden(MapProto, REFERENCE_SET, MapProto.set);
		      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
		    }
		  }
		  setMapMethods(Map);
		  setMapMethods(WeakMap);
		}('reference');

		/******************************************************************************
		 * Module : dict                                                              *
		 ******************************************************************************/

		!function(DICT){
		  function Dict(iterable){
		    var dict = create(null);
		    if(iterable != undefined){
		      if(isIterable(iterable)){
		        for(var iter = getIterator(iterable), step, value; !(step = iter.next()).done;){
		          value = step.value;
		          dict[value[0]] = value[1];
		        }
		      } else assign(dict, iterable);
		    }
		    return dict;
		  }
		  Dict[PROTOTYPE] = null;
		  
		  function DictIterator(iterated, kind){
		    set(this, ITER, {o: ES5Object(iterated), a: getKeys(iterated), i: 0, k: kind});
		  }
		  createIterator(DictIterator, DICT, function(){
		    var iter  = this[ITER]
		      , O     = iter.o
		      , keys  = iter.a
		      , kind  = iter.k
		      , key;
		    while(true){
		      if(iter.i >= keys.length)return iterResult(1);
		      if(has(O, key = keys[iter.i++]))break;
		    }
		    if(kind == KEY)  return iterResult(0, key);
		    if(kind == VALUE)return iterResult(0, O[key]);
		                     return iterResult(0, [key, O[key]]);
		  });
		  function createDictIter(kind){
		    return function(it){
		      return new DictIterator(it, kind);
		    }
		  }
		  
		  /*
		   * 0 -> forEach
		   * 1 -> map
		   * 2 -> filter
		   * 3 -> some
		   * 4 -> every
		   * 5 -> find
		   * 6 -> findKey
		   * 7 -> mapPairs
		   */
		  function createDictMethod(type){
		    var isMap    = type == 1
		      , isEvery  = type == 4;
		    return function(object, callbackfn, that /* = undefined */){
		      var f      = ctx(callbackfn, that, 3)
		        , O      = ES5Object(object)
		        , result = isMap || type == 7 || type == 2 ? new (generic(this, Dict)) : undefined
		        , key, val, res;
		      for(key in O)if(has(O, key)){
		        val = O[key];
		        res = f(val, key, object);
		        if(type){
		          if(isMap)result[key] = res;             // map
		          else if(res)switch(type){
		            case 2: result[key] = val; break      // filter
		            case 3: return true;                  // some
		            case 5: return val;                   // find
		            case 6: return key;                   // findKey
		            case 7: result[res[0]] = res[1];      // mapPairs
		          } else if(isEvery)return false;         // every
		        }
		      }
		      return type == 3 || isEvery ? isEvery : result;
		    }
		  }
		  function createDictReduce(isTurn){
		    return function(object, mapfn, init){
		      assertFunction(mapfn);
		      var O      = ES5Object(object)
		        , keys   = getKeys(O)
		        , length = keys.length
		        , i      = 0
		        , memo, key, result;
		      if(isTurn)memo = init == undefined ? new (generic(this, Dict)) : Object(init);
		      else if(arguments.length < 3){
		        assert(length, REDUCE_ERROR);
		        memo = O[keys[i++]];
		      } else memo = Object(init);
		      while(length > i)if(has(O, key = keys[i++])){
		        result = mapfn(memo, O[key], key, object);
		        if(isTurn){
		          if(result === false)break;
		        } else memo = result;
		      }
		      return memo;
		    }
		  }
		  var findKey = createDictMethod(6);
		  function includes(object, el){
		    return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
		  }
		  
		  var dictMethods = {
		    keys:    createDictIter(KEY),
		    values:  createDictIter(VALUE),
		    entries: createDictIter(KEY+VALUE),
		    forEach: createDictMethod(0),
		    map:     createDictMethod(1),
		    filter:  createDictMethod(2),
		    some:    createDictMethod(3),
		    every:   createDictMethod(4),
		    find:    createDictMethod(5),
		    findKey: findKey,
		    mapPairs:createDictMethod(7),
		    reduce:  createDictReduce(false),
		    turn:    createDictReduce(true),
		    keyOf:   keyOf,
		    includes:includes,
		    // Has / get / set own property
		    has: has,
		    get: get,
		    set: createDefiner(0),
		    isDict: function(it){
		      return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
		    }
		  };
		  
		  if(REFERENCE_GET)for(var key in dictMethods)!function(fn){
		    function method(){
		      for(var args = [this], i = 0; i < arguments.length;)args.push(arguments[i++]);
		      return invoke(fn, args);
		    }
		    fn[REFERENCE_GET] = function(){
		      return method;
		    }
		  }(dictMethods[key]);
		  
		  $define(GLOBAL + FORCED, {Dict: assignHidden(Dict, dictMethods)});
		}('Dict');

		/******************************************************************************
		 * Module : $for                                                              *
		 ******************************************************************************/

		!function(ENTRIES, FN){  
		  function $for(iterable, entries){
		    if(!(this instanceof $for))return new $for(iterable, entries);
		    this[ITER]    = getIterator(iterable);
		    this[ENTRIES] = !!entries;
		  }
		  
		  createIterator($for, 'Wrapper', function(){
		    return this[ITER].next();
		  });
		  var $forProto = $for[PROTOTYPE];
		  setIterator($forProto, function(){
		    return this[ITER]; // unwrap
		  });
		  
		  function createChainIterator(next){
		    function Iter(I, fn, that){
		      this[ITER]    = getIterator(I);
		      this[ENTRIES] = I[ENTRIES];
		      this[FN]      = ctx(fn, that, I[ENTRIES] ? 2 : 1);
		    }
		    createIterator(Iter, 'Chain', next, $forProto);
		    setIterator(Iter[PROTOTYPE], returnThis); // override $forProto iterator
		    return Iter;
		  }
		  
		  var MapIter = createChainIterator(function(){
		    var step = this[ITER].next();
		    return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
		  });
		  
		  var FilterIter = createChainIterator(function(){
		    for(;;){
		      var step = this[ITER].next();
		      if(step.done || stepCall(this[FN], step.value, this[ENTRIES]))return step;
		    }
		  });
		  
		  assignHidden($forProto, {
		    of: function(fn, that){
		      forOf(this, this[ENTRIES], fn, that);
		    },
		    array: function(fn, that){
		      var result = [];
		      forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
		      return result;
		    },
		    filter: function(fn, that){
		      return new FilterIter(this, fn, that);
		    },
		    map: function(fn, that){
		      return new MapIter(this, fn, that);
		    }
		  });
		  
		  $for.isIterable  = isIterable;
		  $for.getIterator = getIterator;
		  
		  $define(GLOBAL + FORCED, {$for: $for});
		}('entries', safeSymbol('fn'));

		/******************************************************************************
		 * Module : binding                                                           *
		 ******************************************************************************/

		!function(_, toLocaleString){
		  // Placeholder
		  core._ = path._ = path._ || {};

		  $define(PROTO + FORCED, FUNCTION, {
		    part: part,
		    by: function(that){
		      var fn     = this
		        , _      = path._
		        , holder = false
		        , length = arguments.length
		        , isThat = that === _
		        , i      = +!isThat
		        , indent = i
		        , it, args;
		      if(isThat){
		        it = fn;
		        fn = call;
		      } else it = that;
		      if(length < 2)return ctx(fn, it, -1);
		      args = Array(length - indent);
		      while(length > i)if((args[i - indent] = arguments[i++]) === _)holder = true;
		      return partial(fn, args, length, holder, _, true, it);
		    },
		    only: function(numberArguments, that /* = @ */){
		      var fn     = assertFunction(this)
		        , n      = toLength(numberArguments)
		        , isThat = arguments.length > 1;
		      return function(/* ...args */){
		        var length = min(n, arguments.length)
		          , args   = Array(length)
		          , i      = 0;
		        while(length > i)args[i] = arguments[i++];
		        return invoke(fn, args, isThat ? that : this);
		      }
		    }
		  });
		  
		  function tie(key){
		    var that  = this
		      , bound = {};
		    return hidden(that, _, function(key){
		      if(key === undefined || !(key in that))return toLocaleString.call(that);
		      return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
		    })[_](key);
		  }
		  
		  hidden(path._, TO_STRING, function(){
		    return _;
		  });
		  
		  hidden(ObjectProto, _, tie);
		  DESC || hidden(ArrayProto, _, tie);
		  // IE8- dirty hack - redefined toLocaleString is not enumerable
		}(DESC ? uid('tie') : TO_LOCALE, ObjectProto[TO_LOCALE]);

		/******************************************************************************
		 * Module : object                                                            *
		 ******************************************************************************/

		!function(){
		  function define(target, mixin){
		    var keys   = ownKeys(ES5Object(mixin))
		      , length = keys.length
		      , i = 0, key;
		    while(length > i)defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
		    return target;
		  };
		  $define(STATIC + FORCED, OBJECT, {
		    isObject: isObject,
		    classof: classof,
		    define: define,
		    make: function(proto, mixin){
		      return define(create(proto), mixin);
		    }
		  });
		}();

		/******************************************************************************
		 * Module : array                                                             *
		 ******************************************************************************/

		$define(PROTO + FORCED, ARRAY, {
		  turn: turn
		});

		/******************************************************************************
		 * Module : array_statics                                                     *
		 ******************************************************************************/

		// JavaScript 1.6 / Strawman array statics shim
		!function(){
		  function setArrayStatics(keys, length){
		    $define(STATIC, ARRAY, turn.call(
		      array(keys),
		      function(memo, key){
		        if(key in ArrayProto)memo[key] = ctx(call, ArrayProto[key], length);
		      }, {}
		    ));
		  }
		  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
		  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
		  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
		                  'reduce,reduceRight,copyWithin,fill,turn');
		}();

		/******************************************************************************
		 * Module : number                                                            *
		 ******************************************************************************/

		!function(){  
		  function NumberIterator(iterated){
		    set(this, ITER, {l: toLength(iterated), i: 0});
		  }
		  createIterator(NumberIterator, NUMBER, function(){
		    var iter = this[ITER]
		      , i    = iter.i++;
		    return i < iter.l ? iterResult(0, i) : iterResult(1);
		  });
		  defineIterator(Number, NUMBER, function(){
		    return new NumberIterator(this);
		  });
		  
		  $define(PROTO + FORCED, NUMBER, {
		    random: function(lim /* = 0 */){
		      var a = +this
		        , b = lim == undefined ? 0 : +lim
		        , m = min(a, b);
		      return random() * (max(a, b) - m) + m;
		    }
		  });

		  $define(PROTO + FORCED, NUMBER, turn.call(
		    array(
		      // ES3:
		      'round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' +
		      // ES6:
		      'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'
		    ),
		    function(memo, key){
		      var fn = Math[key];
		      if(fn)memo[key] = function(/* ...args */){
		        // ie9- dont support strict mode & convert `this` to object -> convert it to number
		        var args = [+this]
		          , i    = 0;
		        while(arguments.length > i)args.push(arguments[i++]);
		        return invoke(fn, args);
		      }
		    }, {}
		  ));
		}();

		/******************************************************************************
		 * Module : string                                                            *
		 ******************************************************************************/

		!function(){
		  var escapeHTMLDict = {
		    '&': '&amp;',
		    '<': '&lt;',
		    '>': '&gt;',
		    '"': '&quot;',
		    "'": '&apos;'
		  }, unescapeHTMLDict = {}, key;
		  for(key in escapeHTMLDict)unescapeHTMLDict[escapeHTMLDict[key]] = key;
		  $define(PROTO + FORCED, STRING, {
		    escapeHTML:   createReplacer(/[&<>"']/g, escapeHTMLDict),
		    unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
		  });
		}();

		/******************************************************************************
		 * Module : date                                                              *
		 ******************************************************************************/

		!function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR){
		  function createFormat(prefix){
		    return function(template, locale /* = current */){
		      var that = this
		        , dict = locales[has(locales, locale) ? locale : current];
		      function get(unit){
		        return that[prefix + unit]();
		      }
		      return String(template).replace(formatRegExp, function(part){
		        switch(part){
		          case 's'  : return get(SECONDS);                  // Seconds : 0-59
		          case 'ss' : return lz(get(SECONDS));              // Seconds : 00-59
		          case 'm'  : return get(MINUTES);                  // Minutes : 0-59
		          case 'mm' : return lz(get(MINUTES));              // Minutes : 00-59
		          case 'h'  : return get(HOURS);                    // Hours   : 0-23
		          case 'hh' : return lz(get(HOURS));                // Hours   : 00-23
		          case 'D'  : return get(DATE);                     // Date    : 1-31
		          case 'DD' : return lz(get(DATE));                 // Date    : 01-31
		          case 'W'  : return dict[0][get('Day')];           // Day     : Понедельник
		          case 'N'  : return get(MONTH) + 1;                // Month   : 1-12
		          case 'NN' : return lz(get(MONTH) + 1);            // Month   : 01-12
		          case 'M'  : return dict[2][get(MONTH)];           // Month   : Январь
		          case 'MM' : return dict[1][get(MONTH)];           // Month   : Января
		          case 'Y'  : return get(YEAR);                     // Year    : 2014
		          case 'YY' : return lz(get(YEAR) % 100);           // Year    : 14
		        } return part;
		      });
		    }
		  }
		  function lz(num){
		    return num > 9 ? num : '0' + num;
		  }
		  function addLocale(lang, locale){
		    function split(index){
		      return turn.call(array(locale.months), function(memo, it){
		        memo.push(it.replace(flexioRegExp, '$' + index));
		      });
		    }
		    locales[lang] = [array(locale.weekdays), split(1), split(2)];
		    return core;
		  }
		  $define(PROTO + FORCED, DATE, {
		    format:    createFormat('get'),
		    formatUTC: createFormat('getUTC')
		  });
		  addLocale(current, {
		    weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
		    months: 'January,February,March,April,May,June,July,August,September,October,November,December'
		  });
		  addLocale('ru', {
		    weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
		    months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' +
		            'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
		  });
		  core.locale = function(locale){
		    return has(locales, locale) ? current = locale : current;
		  };
		  core.addLocale = addLocale;
		}(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');
		}(Function('return this'), false);

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function() {
			var list = [];
			list.toString = function toString() {
				var result = [];
				for(var i = 0; i < this.length; i++) {
					var item = this[i];
					if(item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
			};
			return list;
		}

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var ElementOutput = __webpack_require__(20);

		    /**
		     * A base class for viewable content and event
		     *   targets inside a Famo.us application, containing a renderable document
		     *   fragment. Like an HTML div, it can accept internal markup,
		     *   properties, classes, and handle events.
		     *
		     * @class Surface
		     * @constructor
		     *
		     * @param {Object} [options] default option overrides
		     * @param {Array.Number} [options.size] [width, height] in pixels
		     * @param {Array.string} [options.classes] CSS classes to set on target div
		     * @param {Array} [options.properties] string dictionary of HTML attributes to set on target div
		     * @param {string} [options.content] inner (HTML) content of surface
		     */
		    function Surface(options) {
		        ElementOutput.call(this);

		        this.options = {};

		        this.properties = {};
		        this.attributes = {};
		        this.content = '';
		        this.classList = [];
		        this.size = null;

		        this._classesDirty = true;
		        this._stylesDirty = true;
		        this._attributesDirty = true;
		        this._sizeDirty = true;
		        this._contentDirty = true;
		        this._trueSizeCheck = true;

		        this._dirtyClasses = [];

		        if (options) this.setOptions(options);

		        this._currentTarget = null;
		    }
		    Surface.prototype = Object.create(ElementOutput.prototype);
		    Surface.prototype.constructor = Surface;
		    Surface.prototype.elementType = 'div';
		    Surface.prototype.elementClass = 'famous-surface';

		    /**
		     * Set HTML attributes on this Surface. Note that this will cause
		     *    dirtying and thus re-rendering, even if values do not change.
		     *
		     * @method setAttributes
		    * @param {Object} attributes property dictionary of "key" => "value"
		     */
		    Surface.prototype.setAttributes = function setAttributes(attributes) {
		        for (var n in attributes) {
		            if (n === 'style') throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');
		            this.attributes[n] = attributes[n];
		        }
		        this._attributesDirty = true;
		    };

		    /**
		     * Get HTML attributes on this Surface.
		     *
		     * @method getAttributes
		     *
		     * @return {Object} Dictionary of this Surface's attributes.
		     */
		    Surface.prototype.getAttributes = function getAttributes() {
		        return this.attributes;
		    };

		    /**
		     * Set CSS-style properties on this Surface. Note that this will cause
		     *    dirtying and thus re-rendering, even if values do not change.
		     *
		     * @method setProperties
		     * @chainable
		     * @param {Object} properties property dictionary of "key" => "value"
		     */
		    Surface.prototype.setProperties = function setProperties(properties) {
		        for (var n in properties) {
		            this.properties[n] = properties[n];
		        }
		        this._stylesDirty = true;
		        return this;
		    };

		    /**
		     * Get CSS-style properties on this Surface.
		     *
		     * @method getProperties
		     *
		     * @return {Object} Dictionary of this Surface's properties.
		     */
		    Surface.prototype.getProperties = function getProperties() {
		        return this.properties;
		    };

		    /**
		     * Add CSS-style class to the list of classes on this Surface. Note
		     *   this will map directly to the HTML property of the actual
		     *   corresponding rendered <div>.
		     *
		     * @method addClass
		     * @chainable
		     * @param {string} className name of class to add
		     */
		    Surface.prototype.addClass = function addClass(className) {
		        if (this.classList.indexOf(className) < 0) {
		            this.classList.push(className);
		            this._classesDirty = true;
		        }
		        return this;
		    };

		    /**
		     * Remove CSS-style class from the list of classes on this Surface.
		     *   Note this will map directly to the HTML property of the actual
		     *   corresponding rendered <div>.
		     *
		     * @method removeClass
		     * @chainable
		     * @param {string} className name of class to remove
		     */
		    Surface.prototype.removeClass = function removeClass(className) {
		        var i = this.classList.indexOf(className);
		        if (i >= 0) {
		            this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
		            this._classesDirty = true;
		        }
		        return this;
		    };

		    /**
		     * Toggle CSS-style class from the list of classes on this Surface.
		     *   Note this will map directly to the HTML property of the actual
		     *   corresponding rendered <div>.
		     *
		     * @method toggleClass
		     * @param {string} className name of class to toggle
		     */
		    Surface.prototype.toggleClass = function toggleClass(className) {
		        var i = this.classList.indexOf(className);
		        if (i >= 0) {
		            this.removeClass(className);
		        } else {
		            this.addClass(className);
		        }
		        return this;
		    };

		    /**
		     * Reset class list to provided dictionary.
		     * @method setClasses
		     * @chainable
		     * @param {Array.string} classList
		     */
		    Surface.prototype.setClasses = function setClasses(classList) {
		        var i = 0;
		        var removal = [];
		        for (i = 0; i < this.classList.length; i++) {
		            if (classList.indexOf(this.classList[i]) < 0) removal.push(this.classList[i]);
		        }
		        for (i = 0; i < removal.length; i++) this.removeClass(removal[i]);
		        // duplicates are already checked by addClass()
		        for (i = 0; i < classList.length; i++) this.addClass(classList[i]);
		        return this;
		    };

		    /**
		     * Get array of CSS-style classes attached to this div.
		     *
		     * @method getClasslist
		     * @return {Array.string} array of class names
		     */
		    Surface.prototype.getClassList = function getClassList() {
		        return this.classList;
		    };

		    /**
		     * Set or overwrite inner (HTML) content of this surface. Note that this
		     *    causes a re-rendering if the content has changed.
		     *
		     * @method setContent
		     * @chainable
		     * @param {string|Document Fragment} content HTML content
		     */
		    Surface.prototype.setContent = function setContent(content) {
		        if (this.content !== content) {
		            this.content = content;
		            this._contentDirty = true;
		        }
		        return this;
		    };

		    /**
		     * Return inner (HTML) content of this surface.
		     *
		     * @method getContent
		     *
		     * @return {string} inner (HTML) content
		     */
		    Surface.prototype.getContent = function getContent() {
		        return this.content;
		    };

		    /**
		     * Set options for this surface
		     *
		     * @method setOptions
		     * @chainable
		     * @param {Object} [options] overrides for default options.  See constructor.
		     */
		    Surface.prototype.setOptions = function setOptions(options) {
		        if (options.size) this.setSize(options.size);
		        if (options.classes) this.setClasses(options.classes);
		        if (options.properties) this.setProperties(options.properties);
		        if (options.attributes) this.setAttributes(options.attributes);
		        if (options.content) this.setContent(options.content);
		        return this;
		    };

		    //  Apply to document all changes from removeClass() since last setup().
		    function _cleanupClasses(target) {
		        for (var i = 0; i < this._dirtyClasses.length; i++) target.classList.remove(this._dirtyClasses[i]);
		        this._dirtyClasses = [];
		    }

		    // Apply values of all Famous-managed styles to the document element.
		    //  These will be deployed to the document on call to #setup().
		    function _applyStyles(target) {
		        for (var n in this.properties) {
		            target.style[n] = this.properties[n];
		        }
		    }

		    // Clear all Famous-managed styles from the document element.
		    // These will be deployed to the document on call to #setup().
		    function _cleanupStyles(target) {
		        for (var n in this.properties) {
		            target.style[n] = '';
		        }
		    }

		    // Apply values of all Famous-managed attributes to the document element.
		    //  These will be deployed to the document on call to #setup().
		    function _applyAttributes(target) {
		        for (var n in this.attributes) {
		            target.setAttribute(n, this.attributes[n]);
		        }
		    }

		    // Clear all Famous-managed attributes from the document element.
		    // These will be deployed to the document on call to #setup().
		    function _cleanupAttributes(target) {
		        for (var n in this.attributes) {
		            target.removeAttribute(n);
		        }
		    }

		    function _xyNotEquals(a, b) {
		        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
		    }

		    /**
		     * One-time setup for an element to be ready for commits to document.
		     *
		     * @private
		     * @method setup
		     *
		     * @param {ElementAllocator} allocator document element pool for this context
		     */
		    Surface.prototype.setup = function setup(allocator) {
		        var target = allocator.allocate(this.elementType);
		        if (this.elementClass) {
		            if (this.elementClass instanceof Array) {
		                for (var i = 0; i < this.elementClass.length; i++) {
		                    target.classList.add(this.elementClass[i]);
		                }
		            }
		            else {
		                target.classList.add(this.elementClass);
		            }
		        }
		        target.style.display = '';
		        this.attach(target);
		        this._opacity = null;
		        this._currentTarget = target;
		        this._stylesDirty = true;
		        this._classesDirty = true;
		        this._attributesDirty = true;
		        this._sizeDirty = true;
		        this._contentDirty = true;
		        this._originDirty = true;
		        this._transformDirty = true;
		    };

		    /**
		     * Apply changes from this component to the corresponding document element.
		     * This includes changes to classes, styles, size, content, opacity, origin,
		     * and matrix transforms.
		     *
		     * @private
		     * @method commit
		     * @param {Context} context commit context
		     */
		    Surface.prototype.commit = function commit(context) {
		        if (!this._currentTarget) this.setup(context.allocator);
		        var target = this._currentTarget;
		        var size = context.size;

		        if (this._classesDirty) {
		            _cleanupClasses.call(this, target);
		            var classList = this.getClassList();
		            for (var i = 0; i < classList.length; i++) target.classList.add(classList[i]);
		            this._classesDirty = false;
		            this._trueSizeCheck = true;
		        }

		        if (this._stylesDirty) {
		            _applyStyles.call(this, target);
		            this._stylesDirty = false;
		            this._trueSizeCheck = true;
		        }

		        if (this._attributesDirty) {
		            _applyAttributes.call(this, target);
		            this._attributesDirty = false;
		            this._trueSizeCheck = true;
		        }

		        if (this.size) {
		            var origSize = context.size;
		            size = [this.size[0], this.size[1]];
		            if (size[0] === undefined) size[0] = origSize[0];
		            if (size[1] === undefined) size[1] = origSize[1];
		            if (size[0] === true || size[1] === true) {
		                if (size[0] === true && (this._trueSizeCheck || this._size[0] === 0)) {
		                    var width = target.offsetWidth;
		                    if (this._size && this._size[0] !== width) {
		                        this._size[0] = width;
		                        this._sizeDirty = true;
		                    }
		                    size[0] = width;
		                } else {
		                    if (this._size) size[0] = this._size[0];
		                }
		                if (size[1] === true && (this._trueSizeCheck || this._size[1] === 0)) {
		                    var height = target.offsetHeight;
		                    if (this._size && this._size[1] !== height) {
		                        this._size[1] = height;
		                        this._sizeDirty = true;
		                    }
		                    size[1] = height;
		                } else {
		                    if (this._size) size[1] = this._size[1];
		                }
		                this._trueSizeCheck = false;
		            }
		        }

		        if (_xyNotEquals(this._size, size)) {
		            if (!this._size) this._size = [0, 0];
		            this._size[0] = size[0];
		            this._size[1] = size[1];

		            this._sizeDirty = true;
		        }

		        if (this._sizeDirty) {
		            if (this._size) {
		                target.style.width = (this.size && this.size[0] === true) ? '' : this._size[0] + 'px';
		                target.style.height = (this.size && this.size[1] === true) ?  '' : this._size[1] + 'px';
		            }

		            this._eventOutput.emit('resize');
		        }

		        if (this._contentDirty) {
		            this.deploy(target);
		            this._eventOutput.emit('deploy');
		            this._contentDirty = false;
		            this._trueSizeCheck = true;
		        }

		        ElementOutput.prototype.commit.call(this, context);
		    };

		    /**
		     *  Remove all Famous-relevant attributes from a document element.
		     *    This is called by SurfaceManager's detach().
		     *    This is in some sense the reverse of .deploy().
		     *
		     * @private
		     * @method cleanup
		     * @param {ElementAllocator} allocator
		     */
		    Surface.prototype.cleanup = function cleanup(allocator) {
		        var i = 0;
		        var target = this._currentTarget;
		        this._eventOutput.emit('recall');
		        this.recall(target);
		        target.style.display = 'none';
		        target.style.opacity = '';
		        target.style.width = '';
		        target.style.height = '';
		        _cleanupStyles.call(this, target);
		        _cleanupAttributes.call(this, target);
		        var classList = this.getClassList();
		        _cleanupClasses.call(this, target);
		        for (i = 0; i < classList.length; i++) target.classList.remove(classList[i]);
		        if (this.elementClass) {
		            if (this.elementClass instanceof Array) {
		                for (i = 0; i < this.elementClass.length; i++) {
		                    target.classList.remove(this.elementClass[i]);
		                }
		            }
		            else {
		                target.classList.remove(this.elementClass);
		            }
		        }
		        this.detach(target);
		        this._currentTarget = null;
		        allocator.deallocate(target);
		    };

		    /**
		     * Place the document element that this component manages into the document.
		     *
		     * @private
		     * @method deploy
		     * @param {Node} target document parent of this container
		     */
		    Surface.prototype.deploy = function deploy(target) {
		        var content = this.getContent();
		        if (content instanceof Node) {
		            while (target.hasChildNodes()) target.removeChild(target.firstChild);
		            target.appendChild(content);
		        }
		        else target.innerHTML = content;
		    };

		    /**
		     * Remove any contained document content associated with this surface
		     *   from the actual document.
		     *
		     * @private
		     * @method recall
		     */
		    Surface.prototype.recall = function recall(target) {
		        var df = document.createDocumentFragment();
		        while (target.hasChildNodes()) df.appendChild(target.firstChild);
		        this.setContent(df);
		    };

		    /**
		     *  Get the x and y dimensions of the surface.
		     *
		     * @method getSize
		     * @return {Array.Number} [x,y] size of surface
		     */
		    Surface.prototype.getSize = function getSize() {
		        return this._size ? this._size : this.size;
		    };

		    /**
		     * Set x and y dimensions of the surface.
		     *
		     * @method setSize
		     * @chainable
		     * @param {Array.Number} size as [width, height]
		     */
		    Surface.prototype.setSize = function setSize(size) {
		        this.size = size ? [size[0], size[1]] : null;
		        this._sizeDirty = true;
		        return this;
		    };

		    module.exports = Surface;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

		    /**
		     * The singleton object initiated upon process
		     *   startup which manages all active Context instances, runs
		     *   the render dispatch loop, and acts as a listener and dispatcher
		     *   for events.  All methods are therefore static.
		     *
		     *   On static initialization, window.requestAnimationFrame is called with
		     *     the event loop function.
		     *
		     *   Note: Any window in which Engine runs will prevent default
		     *     scrolling behavior on the 'touchmove' event.
		     *
		     * @static
		     * @class Engine
		     */
		    var Context = __webpack_require__(16);
		    var EventHandler = __webpack_require__(13);
		    var OptionsManager = __webpack_require__(17);

		    var Engine = {};

		    var contexts = [];
		    var nextTickQueue = [];
		    var deferQueue = [];

		    var lastTime = Date.now();
		    var frameTime;
		    var frameTimeLimit;
		    var loopEnabled = true;
		    var eventForwarders = {};
		    var eventHandler = new EventHandler();

		    var options = {
		        containerType: 'div',
		        containerClass: 'famous-container',
		        fpsCap: undefined,
		        runLoop: true,
		        appMode: true
		    };
		    var optionsManager = new OptionsManager(options);

		    /** @const */
		    var MAX_DEFER_FRAME_TIME = 10;

		    /**
		     * Inside requestAnimationFrame loop, step() is called, which:
		     *   calculates current FPS (throttling loop if it is over limit set in setFPSCap),
		     *   emits dataless 'prerender' event on start of loop,
		     *   calls in order any one-shot functions registered by nextTick on last loop,
		     *   calls Context.update on all Context objects registered,
		     *   and emits dataless 'postrender' event on end of loop.
		     *
		     * @static
		     * @private
		     * @method step
		     */
		    Engine.step = function step() {
		        var currentTime = Date.now();

		        // skip frame if we're over our framerate cap
		        if (frameTimeLimit && currentTime - lastTime < frameTimeLimit) return;

		        var i = 0;

		        frameTime = currentTime - lastTime;
		        lastTime = currentTime;

		        eventHandler.emit('prerender');

		        // empty the queue
		        for (i = 0; i < nextTickQueue.length; i++) nextTickQueue[i].call(this);
		        nextTickQueue.splice(0);

		        // limit total execution time for deferrable functions
		        while (deferQueue.length && (Date.now() - currentTime) < MAX_DEFER_FRAME_TIME) {
		            deferQueue.shift().call(this);
		        }

		        for (i = 0; i < contexts.length; i++) contexts[i].update();

		        eventHandler.emit('postrender');
		    };

		    // engage requestAnimationFrame
		    function loop() {
		        if (options.runLoop) {
		            Engine.step();
		            window.requestAnimationFrame(loop);
		        }
		        else loopEnabled = false;
		    }
		    window.requestAnimationFrame(loop);

		    //
		    // Upon main document window resize (unless on an "input" HTML element):
		    //   scroll to the top left corner of the window,
		    //   and for each managed Context: emit the 'resize' event and update its size.
		    // @param {Object=} event document event
		    //
		    function handleResize(event) {
		        for (var i = 0; i < contexts.length; i++) {
		            contexts[i].emit('resize');
		        }
		        eventHandler.emit('resize');
		    }
		    window.addEventListener('resize', handleResize, false);
		    handleResize();

		    /**
		     * Initialize famous for app mode
		     *
		     * @static
		     * @private
		     * @method initialize
		     */
		    function initialize() {
		        // prevent scrolling via browser
		        window.addEventListener('touchmove', function(event) {
		            event.preventDefault();
		        }, true);
		        document.body.classList.add('famous-root');
		        document.documentElement.classList.add('famous-root');
		    }
		    var initialized = false;

		    /**
		     * Add event handler object to set of downstream handlers.
		     *
		     * @method pipe
		     *
		     * @param {EventHandler} target event handler target object
		     * @return {EventHandler} passed event handler
		     */
		    Engine.pipe = function pipe(target) {
		        if (target.subscribe instanceof Function) return target.subscribe(Engine);
		        else return eventHandler.pipe(target);
		    };

		    /**
		     * Remove handler object from set of downstream handlers.
		     *   Undoes work of "pipe".
		     *
		     * @method unpipe
		     *
		     * @param {EventHandler} target target handler object
		     * @return {EventHandler} provided target
		     */
		    Engine.unpipe = function unpipe(target) {
		        if (target.unsubscribe instanceof Function) return target.unsubscribe(Engine);
		        else return eventHandler.unpipe(target);
		    };

		    /**
		     * Bind a callback function to an event type handled by this object.
		     *
		     * @static
		     * @method "on"
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {function(string, Object)} handler callback
		     * @return {EventHandler} this
		     */
		    Engine.on = function on(type, handler) {
		        if (!(type in eventForwarders)) {
		            eventForwarders[type] = eventHandler.emit.bind(eventHandler, type);
		            if (document.body) {
		                document.body.addEventListener(type, eventForwarders[type]);
		            }
		            else {
		                Engine.nextTick(function(type, forwarder) {
		                    document.body.addEventListener(type, forwarder);
		                }.bind(this, type, eventForwarders[type]));
		            }
		        }
		        return eventHandler.on(type, handler);
		    };

		    /**
		     * Trigger an event, sending to all downstream handlers
		     *   listening for provided 'type' key.
		     *
		     * @method emit
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {Object} event event data
		     * @return {EventHandler} this
		     */
		    Engine.emit = function emit(type, event) {
		        return eventHandler.emit(type, event);
		    };

		    /**
		     * Unbind an event by type and handler.
		     *   This undoes the work of "on".
		     *
		     * @static
		     * @method removeListener
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {function} handler function object to remove
		     * @return {EventHandler} internal event handler object (for chaining)
		     */
		    Engine.removeListener = function removeListener(type, handler) {
		        return eventHandler.removeListener(type, handler);
		    };

		    /**
		     * Return the current calculated frames per second of the Engine.
		     *
		     * @static
		     * @method getFPS
		     *
		     * @return {Number} calculated fps
		     */
		    Engine.getFPS = function getFPS() {
		        return 1000 / frameTime;
		    };

		    /**
		     * Set the maximum fps at which the system should run. If internal render
		     *    loop is called at a greater frequency than this FPSCap, Engine will
		     *    throttle render and update until this rate is achieved.
		     *
		     * @static
		     * @method setFPSCap
		     *
		     * @param {Number} fps maximum frames per second
		     */
		    Engine.setFPSCap = function setFPSCap(fps) {
		        frameTimeLimit = Math.floor(1000 / fps);
		    };

		    /**
		     * Return engine options.
		     *
		     * @static
		     * @method getOptions
		     * @param {string} key
		     * @return {Object} engine options
		     */
		    Engine.getOptions = function getOptions(key) {
		        return optionsManager.getOptions(key);
		    };

		    /**
		     * Set engine options
		     *
		     * @static
		     * @method setOptions
		     *
		     * @param {Object} [options] overrides of default options
		     * @param {Number} [options.fpsCap]  maximum fps at which the system should run
		     * @param {boolean} [options.runLoop=true] whether the run loop should continue
		     * @param {string} [options.containerType="div"] type of container element.  Defaults to 'div'.
		     * @param {string} [options.containerClass="famous-container"] type of container element.  Defaults to 'famous-container'.
		     */
		    Engine.setOptions = function setOptions(options) {
		        return optionsManager.setOptions.apply(optionsManager, arguments);
		    };

		    /**
		     * Creates a new Context for rendering and event handling with
		     *    provided document element as top of each tree. This will be tracked by the
		     *    process-wide Engine.
		     *
		     * @static
		     * @method createContext
		     *
		     * @param {Node} el will be top of Famo.us document element tree
		     * @return {Context} new Context within el
		     */
		    Engine.createContext = function createContext(el) {
		        if (!initialized && options.appMode) Engine.nextTick(initialize);

		        var needMountContainer = false;
		        if (!el) {
		            el = document.createElement(options.containerType);
		            el.classList.add(options.containerClass);
		            needMountContainer = true;
		        }
		        var context = new Context(el);
		        Engine.registerContext(context);
		        if (needMountContainer) {
		            Engine.nextTick(function(context, el) {
		                document.body.appendChild(el);
		                context.emit('resize');
		            }.bind(this, context, el));
		        }
		        return context;
		    };

		    /**
		     * Registers an existing context to be updated within the run loop.
		     *
		     * @static
		     * @method registerContext
		     *
		     * @param {Context} context Context to register
		     * @return {FamousContext} provided context
		     */
		    Engine.registerContext = function registerContext(context) {
		        contexts.push(context);
		        return context;
		    };

		    /**
		     * Returns a list of all contexts.
		     *
		     * @static
		     * @method getContexts
		     * @return {Array} contexts that are updated on each tick
		     */
		    Engine.getContexts = function getContexts() {
		        return contexts;
		    };

		    /**
		     * Removes a context from the run loop. Note: this does not do any
		     *     cleanup.
		     *
		     * @static
		     * @method deregisterContext
		     *
		     * @param {Context} context Context to deregister
		     */
		    Engine.deregisterContext = function deregisterContext(context) {
		        var i = contexts.indexOf(context);
		        if (i >= 0) contexts.splice(i, 1);
		    };

		    /**
		     * Queue a function to be executed on the next tick of the
		     *    Engine.
		     *
		     * @static
		     * @method nextTick
		     *
		     * @param {function(Object)} fn function accepting window object
		     */
		    Engine.nextTick = function nextTick(fn) {
		        nextTickQueue.push(fn);
		    };

		    /**
		     * Queue a function to be executed sometime soon, at a time that is
		     *    unlikely to affect frame rate.
		     *
		     * @static
		     * @method defer
		     *
		     * @param {Function} fn
		     */
		    Engine.defer = function defer(fn) {
		        deferQueue.push(fn);
		    };

		    optionsManager.on('change', function(data) {
		        if (data.id === 'fpsCap') Engine.setFPSCap(data.value);
		        else if (data.id === 'runLoop') {
		            // kick off the loop only if it was stopped
		            if (!loopEnabled && data.value) {
		                loopEnabled = true;
		                window.requestAnimationFrame(loop);
		            }
		        }
		    });

		    module.exports = Engine;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var Transform = __webpack_require__(18);

		    /* TODO: remove these dependencies when deprecation complete */
		    var Transitionable = __webpack_require__(19);
		    var TransitionableTransform = __webpack_require__(14);

		    /**
		     *
		     *  A collection of visual changes to be
		     *    applied to another renderable component. This collection includes a
		     *    transform matrix, an opacity constant, a size, an origin specifier.
		     *    Modifier objects can be added to any RenderNode or object
		     *    capable of displaying renderables.  The Modifier's children and descendants
		     *    are transformed by the amounts specified in the Modifier's properties.
		     *
		     * @class Modifier
		     * @constructor
		     * @param {Object} [options] overrides of default options
		     * @param {Transform} [options.transform] affine transformation matrix
		     * @param {Number} [options.opacity]
		     * @param {Array.Number} [options.origin] origin adjustment
		     * @param {Array.Number} [options.size] size to apply to descendants
		     */
		    function Modifier(options) {
		        this._transformGetter = null;
		        this._opacityGetter = null;
		        this._originGetter = null;
		        this._alignGetter = null;
		        this._sizeGetter = null;
		        this._proportionGetter = null;

		        /* TODO: remove this when deprecation complete */
		        this._legacyStates = {};

		        this._output = {
		            transform: Transform.identity,
		            opacity: 1,
		            origin: null,
		            align: null,
		            size: null,
		            proportions: null,
		            target: null
		        };

		        if (options) {
		            if (options.transform) this.transformFrom(options.transform);
		            if (options.opacity !== undefined) this.opacityFrom(options.opacity);
		            if (options.origin) this.originFrom(options.origin);
		            if (options.align) this.alignFrom(options.align);
		            if (options.size) this.sizeFrom(options.size);
		            if (options.proportions) this.proportionsFrom(options.proportions);
		        }
		    }

		    /**
		     * Function, object, or static transform matrix which provides the transform.
		     *   This is evaluated on every tick of the engine.
		     *
		     * @method transformFrom
		     *
		     * @param {Object} transform transform provider object
		     * @return {Modifier} this
		     */
		    Modifier.prototype.transformFrom = function transformFrom(transform) {
		        if (transform instanceof Function) this._transformGetter = transform;
		        else if (transform instanceof Object && transform.get) this._transformGetter = transform.get.bind(transform);
		        else {
		            this._transformGetter = null;
		            this._output.transform = transform;
		        }
		        return this;
		    };

		    /**
		     * Set function, object, or number to provide opacity, in range [0,1].
		     *
		     * @method opacityFrom
		     *
		     * @param {Object} opacity provider object
		     * @return {Modifier} this
		     */
		    Modifier.prototype.opacityFrom = function opacityFrom(opacity) {
		        if (opacity instanceof Function) this._opacityGetter = opacity;
		        else if (opacity instanceof Object && opacity.get) this._opacityGetter = opacity.get.bind(opacity);
		        else {
		            this._opacityGetter = null;
		            this._output.opacity = opacity;
		        }
		        return this;
		    };

		    /**
		     * Set function, object, or numerical array to provide origin, as [x,y],
		     *   where x and y are in the range [0,1].
		     *
		     * @method originFrom
		     *
		     * @param {Object} origin provider object
		     * @return {Modifier} this
		     */
		    Modifier.prototype.originFrom = function originFrom(origin) {
		        if (origin instanceof Function) this._originGetter = origin;
		        else if (origin instanceof Object && origin.get) this._originGetter = origin.get.bind(origin);
		        else {
		            this._originGetter = null;
		            this._output.origin = origin;
		        }
		        return this;
		    };

		    /**
		     * Set function, object, or numerical array to provide align, as [x,y],
		     *   where x and y are in the range [0,1].
		     *
		     * @method alignFrom
		     *
		     * @param {Object} align provider object
		     * @return {Modifier} this
		     */
		    Modifier.prototype.alignFrom = function alignFrom(align) {
		        if (align instanceof Function) this._alignGetter = align;
		        else if (align instanceof Object && align.get) this._alignGetter = align.get.bind(align);
		        else {
		            this._alignGetter = null;
		            this._output.align = align;
		        }
		        return this;
		    };

		    /**
		     * Set function, object, or numerical array to provide size, as [width, height].
		     *
		     * @method sizeFrom
		     *
		     * @param {Object} size provider object
		     * @return {Modifier} this
		     */
		    Modifier.prototype.sizeFrom = function sizeFrom(size) {
		        if (size instanceof Function) this._sizeGetter = size;
		        else if (size instanceof Object && size.get) this._sizeGetter = size.get.bind(size);
		        else {
		            this._sizeGetter = null;
		            this._output.size = size;
		        }
		        return this;
		    };

		    /**
		     * Set function, object, or numerical array to provide proportions, as [percent of width, percent of height].
		     *
		     * @method proportionsFrom
		     *
		     * @param {Object} proportions provider object
		     * @return {Modifier} this
		     */
		    Modifier.prototype.proportionsFrom = function proportionsFrom(proportions) {
		        if (proportions instanceof Function) this._proportionGetter = proportions;
		        else if (proportions instanceof Object && proportions.get) this._proportionGetter = proportions.get.bind(proportions);
		        else {
		            this._proportionGetter = null;
		            this._output.proportions = proportions;
		        }
		        return this;
		    };

		     /**
		     * Deprecated: Prefer transformFrom with static Transform, or use a TransitionableTransform.
		     * @deprecated
		     * @method setTransform
		     *
		     * @param {Transform} transform Transform to transition to
		     * @param {Transitionable} transition Valid transitionable object
		     * @param {Function} callback callback to call after transition completes
		     * @return {Modifier} this
		     */
		    Modifier.prototype.setTransform = function setTransform(transform, transition, callback) {
		        if (transition || this._legacyStates.transform) {
		            if (!this._legacyStates.transform) {
		                this._legacyStates.transform = new TransitionableTransform(this._output.transform);
		            }
		            if (!this._transformGetter) this.transformFrom(this._legacyStates.transform);

		            this._legacyStates.transform.set(transform, transition, callback);
		            return this;
		        }
		        else return this.transformFrom(transform);
		    };

		    /**
		     * Deprecated: Prefer opacityFrom with static opacity array, or use a Transitionable with that opacity.
		     * @deprecated
		     * @method setOpacity
		     *
		     * @param {Number} opacity Opacity value to transition to.
		     * @param {Transitionable} transition Valid transitionable object
		     * @param {Function} callback callback to call after transition completes
		     * @return {Modifier} this
		     */
		    Modifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
		        if (transition || this._legacyStates.opacity) {
		            if (!this._legacyStates.opacity) {
		                this._legacyStates.opacity = new Transitionable(this._output.opacity);
		            }
		            if (!this._opacityGetter) this.opacityFrom(this._legacyStates.opacity);

		            return this._legacyStates.opacity.set(opacity, transition, callback);
		        }
		        else return this.opacityFrom(opacity);
		    };

		    /**
		     * Deprecated: Prefer originFrom with static origin array, or use a Transitionable with that origin.
		     * @deprecated
		     * @method setOrigin
		     *
		     * @param {Array.Number} origin two element array with values between 0 and 1.
		     * @param {Transitionable} transition Valid transitionable object
		     * @param {Function} callback callback to call after transition completes
		     * @return {Modifier} this
		     */
		    Modifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
		        /* TODO: remove this if statement when deprecation complete */
		        if (transition || this._legacyStates.origin) {

		            if (!this._legacyStates.origin) {
		                this._legacyStates.origin = new Transitionable(this._output.origin || [0, 0]);
		            }
		            if (!this._originGetter) this.originFrom(this._legacyStates.origin);

		            this._legacyStates.origin.set(origin, transition, callback);
		            return this;
		        }
		        else return this.originFrom(origin);
		    };

		    /**
		     * Deprecated: Prefer alignFrom with static align array, or use a Transitionable with that align.
		     * @deprecated
		     * @method setAlign
		     *
		     * @param {Array.Number} align two element array with values between 0 and 1.
		     * @param {Transitionable} transition Valid transitionable object
		     * @param {Function} callback callback to call after transition completes
		     * @return {Modifier} this
		     */
		    Modifier.prototype.setAlign = function setAlign(align, transition, callback) {
		        /* TODO: remove this if statement when deprecation complete */
		        if (transition || this._legacyStates.align) {

		            if (!this._legacyStates.align) {
		                this._legacyStates.align = new Transitionable(this._output.align || [0, 0]);
		            }
		            if (!this._alignGetter) this.alignFrom(this._legacyStates.align);

		            this._legacyStates.align.set(align, transition, callback);
		            return this;
		        }
		        else return this.alignFrom(align);
		    };

		    /**
		     * Deprecated: Prefer sizeFrom with static origin array, or use a Transitionable with that size.
		     * @deprecated
		     * @method setSize
		     * @param {Array.Number} size two element array of [width, height]
		     * @param {Transitionable} transition Valid transitionable object
		     * @param {Function} callback callback to call after transition completes
		     * @return {Modifier} this
		     */
		    Modifier.prototype.setSize = function setSize(size, transition, callback) {
		        if (size && (transition || this._legacyStates.size)) {
		            if (!this._legacyStates.size) {
		                this._legacyStates.size = new Transitionable(this._output.size || [0, 0]);
		            }
		            if (!this._sizeGetter) this.sizeFrom(this._legacyStates.size);

		            this._legacyStates.size.set(size, transition, callback);
		            return this;
		        }
		        else return this.sizeFrom(size);
		    };

		    /**
		     * Deprecated: Prefer proportionsFrom with static origin array, or use a Transitionable with those proportions.
		     * @deprecated
		     * @method setProportions
		     * @param {Array.Number} proportions two element array of [percent of width, percent of height]
		     * @param {Transitionable} transition Valid transitionable object
		     * @param {Function} callback callback to call after transition completes
		     * @return {Modifier} this
		     */
		    Modifier.prototype.setProportions = function setProportions(proportions, transition, callback) {
		        if (proportions && (transition || this._legacyStates.proportions)) {
		            if (!this._legacyStates.proportions) {
		                this._legacyStates.proportions = new Transitionable(this._output.proportions || [0, 0]);
		            }
		            if (!this._proportionGetter) this.proportionsFrom(this._legacyStates.proportions);

		            this._legacyStates.proportions.set(proportions, transition, callback);
		            return this;
		        }
		        else return this.proportionsFrom(proportions);
		    };

		    /**
		     * Deprecated: Prefer to stop transform in your provider object.
		     * @deprecated
		     * @method halt
		     */
		    Modifier.prototype.halt = function halt() {
		        if (this._legacyStates.transform) this._legacyStates.transform.halt();
		        if (this._legacyStates.opacity) this._legacyStates.opacity.halt();
		        if (this._legacyStates.origin) this._legacyStates.origin.halt();
		        if (this._legacyStates.align) this._legacyStates.align.halt();
		        if (this._legacyStates.size) this._legacyStates.size.halt();
		        if (this._legacyStates.proportions) this._legacyStates.proportions.halt();
		        this._transformGetter = null;
		        this._opacityGetter = null;
		        this._originGetter = null;
		        this._alignGetter = null;
		        this._sizeGetter = null;
		        this._proportionGetter = null;
		    };

		    /**
		     * Deprecated: Prefer to use your provided transform or output of your transform provider.
		     * @deprecated
		     * @method getTransform
		     * @return {Object} transform provider object
		     */
		    Modifier.prototype.getTransform = function getTransform() {
		        return this._transformGetter();
		    };

		    /**
		     * Deprecated: Prefer to determine the end state of your transform from your transform provider
		     * @deprecated
		     * @method getFinalTransform
		     * @return {Transform} transform matrix
		     */
		    Modifier.prototype.getFinalTransform = function getFinalTransform() {
		        return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform;
		    };

		    /**
		     * Deprecated: Prefer to use your provided opacity or output of your opacity provider.
		     * @deprecated
		     * @method getOpacity
		     * @return {Object} opacity provider object
		     */
		    Modifier.prototype.getOpacity = function getOpacity() {
		        return this._opacityGetter();
		    };

		    /**
		     * Deprecated: Prefer to use your provided origin or output of your origin provider.
		     * @deprecated
		     * @method getOrigin
		     * @return {Object} origin provider object
		     */
		    Modifier.prototype.getOrigin = function getOrigin() {
		        return this._originGetter();
		    };

		    /**
		     * Deprecated: Prefer to use your provided align or output of your align provider.
		     * @deprecated
		     * @method getAlign
		     * @return {Object} align provider object
		     */
		    Modifier.prototype.getAlign = function getAlign() {
		        return this._alignGetter();
		    };

		    /**
		     * Deprecated: Prefer to use your provided size or output of your size provider.
		     * @deprecated
		     * @method getSize
		     * @return {Object} size provider object
		     */
		    Modifier.prototype.getSize = function getSize() {
		        return this._sizeGetter ? this._sizeGetter() : this._output.size;
		    };

		    /**
		     * Deprecated: Prefer to use your provided proportions or output of your proportions provider.
		     * @deprecated
		     * @method getProportions
		     * @return {Object} proportions provider object
		     */
		    Modifier.prototype.getProportions = function getProportions() {
		        return this._proportionGetter ? this._proportionGetter() : this._output.proportions;
		    };

		    // call providers on tick to receive render spec elements to apply
		    function _update() {
		        if (this._transformGetter) this._output.transform = this._transformGetter();
		        if (this._opacityGetter) this._output.opacity = this._opacityGetter();
		        if (this._originGetter) this._output.origin = this._originGetter();
		        if (this._alignGetter) this._output.align = this._alignGetter();
		        if (this._sizeGetter) this._output.size = this._sizeGetter();
		        if (this._proportionGetter) this._output.proportions = this._proportionGetter();
		    }

		    /**
		     * Return render spec for this Modifier, applying to the provided
		     *    target component.  This is similar to render() for Surfaces.
		     *
		     * @private
		     * @method modify
		     *
		     * @param {Object} target (already rendered) render spec to
		     *    which to apply the transform.
		     * @return {Object} render spec for this Modifier, including the
		     *    provided target
		     */
		    Modifier.prototype.modify = function modify(target) {
		        _update.call(this);
		        this._output.target = target;
		        return this._output;
		    };

		    module.exports = Modifier;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var Entity = __webpack_require__(21);
		    var SpecParser = __webpack_require__(22);

		    /**
		     * A wrapper for inserting a renderable component (like a Modifer or
		     *   Surface) into the render tree.
		     *
		     * @class RenderNode
		     * @constructor
		     *
		     * @param {Object} object Target renderable component
		     */
		    function RenderNode(object) {
		        this._object = null;
		        this._child = null;
		        this._hasMultipleChildren = false;
		        this._isRenderable = false;
		        this._isModifier = false;

		        this._resultCache = {};
		        this._prevResults = {};

		        this._childResult = null;

		        if (object) this.set(object);
		    }

		    /**
		     * Append a renderable to the list of this node's children.
		     *   This produces a new RenderNode in the tree.
		     *   Note: Does not double-wrap if child is a RenderNode already.
		     *
		     * @method add
		     * @param {Object} child renderable object
		     * @return {RenderNode} new render node wrapping child
		     */
		    RenderNode.prototype.add = function add(child) {
		        var childNode = (child instanceof RenderNode) ? child : new RenderNode(child);
		        if (this._child instanceof Array) this._child.push(childNode);
		        else if (this._child) {
		            this._child = [this._child, childNode];
		            this._hasMultipleChildren = true;
		            this._childResult = []; // to be used later
		        }
		        else this._child = childNode;

		        return childNode;
		    };

		    /**
		     * Return the single wrapped object.  Returns null if this node has multiple child nodes.
		     *
		     * @method get
		     *
		     * @return {Ojbect} contained renderable object
		     */
		    RenderNode.prototype.get = function get() {
		        return this._object || (this._hasMultipleChildren ? null : (this._child ? this._child.get() : null));
		    };

		    /**
		     * Overwrite the list of children to contain the single provided object
		     *
		     * @method set
		     * @param {Object} child renderable object
		     * @return {RenderNode} this render node, or child if it is a RenderNode
		     */
		    RenderNode.prototype.set = function set(child) {
		        this._childResult = null;
		        this._hasMultipleChildren = false;
		        this._isRenderable = child.render ? true : false;
		        this._isModifier = child.modify ? true : false;
		        this._object = child;
		        this._child = null;
		        if (child instanceof RenderNode) return child;
		        else return this;
		    };

		    /**
		     * Get render size of contained object.
		     *
		     * @method getSize
		     * @return {Array.Number} size of this or size of single child.
		     */
		    RenderNode.prototype.getSize = function getSize() {
		        var result = null;
		        var target = this.get();
		        if (target && target.getSize) result = target.getSize();
		        if (!result && this._child && this._child.getSize) result = this._child.getSize();
		        return result;
		    };

		    // apply results of rendering this subtree to the document
		    function _applyCommit(spec, context, cacheStorage) {
		        var result = SpecParser.parse(spec, context);
		        var keys = Object.keys(result);
		        for (var i = 0; i < keys.length; i++) {
		            var id = keys[i];
		            var childNode = Entity.get(id);
		            var commitParams = result[id];
		            commitParams.allocator = context.allocator;
		            var commitResult = childNode.commit(commitParams);
		            if (commitResult) _applyCommit(commitResult, context, cacheStorage);
		            else cacheStorage[id] = commitParams;
		        }
		    }

		    /**
		     * Commit the content change from this node to the document.
		     *
		     * @private
		     * @method commit
		     * @param {Context} context render context
		     */
		    RenderNode.prototype.commit = function commit(context) {
		        // free up some divs from the last loop
		        var prevKeys = Object.keys(this._prevResults);
		        for (var i = 0; i < prevKeys.length; i++) {
		            var id = prevKeys[i];
		            if (this._resultCache[id] === undefined) {
		                var object = Entity.get(id);
		                if (object.cleanup) object.cleanup(context.allocator);
		            }
		        }

		        this._prevResults = this._resultCache;
		        this._resultCache = {};
		        _applyCommit(this.render(), context, this._resultCache);
		    };

		    /**
		     * Generate a render spec from the contents of the wrapped component.
		     *
		     * @private
		     * @method render
		     *
		     * @return {Object} render specification for the component subtree
		     *    only under this node.
		     */
		    RenderNode.prototype.render = function render() {
		        if (this._isRenderable) return this._object.render();

		        var result = null;
		        if (this._hasMultipleChildren) {
		            result = this._childResult;
		            var children = this._child;
		            for (var i = 0; i < children.length; i++) {
		                result[i] = children[i].render();
		            }
		        }
		        else if (this._child) result = this._child.render();

		        return this._isModifier ? this._object.modify(result) : result;
		    };

		    module.exports = RenderNode;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var EventEmitter = __webpack_require__(23);

		    /**
		     * EventHandler forwards received events to a set of provided callback functions.
		     * It allows events to be captured, processed, and optionally piped through to other event handlers.
		     *
		     * @class EventHandler
		     * @extends EventEmitter
		     * @constructor
		     */
		    function EventHandler() {
		        EventEmitter.apply(this, arguments);

		        this.downstream = []; // downstream event handlers
		        this.downstreamFn = []; // downstream functions

		        this.upstream = []; // upstream event handlers
		        this.upstreamListeners = {}; // upstream listeners
		    }
		    EventHandler.prototype = Object.create(EventEmitter.prototype);
		    EventHandler.prototype.constructor = EventHandler;

		    /**
		     * Assign an event handler to receive an object's input events.
		     *
		     * @method setInputHandler
		     * @static
		     *
		     * @param {Object} object object to mix trigger, subscribe, and unsubscribe functions into
		     * @param {EventHandler} handler assigned event handler
		     */
		    EventHandler.setInputHandler = function setInputHandler(object, handler) {
		        object.trigger = handler.trigger.bind(handler);
		        if (handler.subscribe && handler.unsubscribe) {
		            object.subscribe = handler.subscribe.bind(handler);
		            object.unsubscribe = handler.unsubscribe.bind(handler);
		        }
		    };

		    /**
		     * Assign an event handler to receive an object's output events.
		     *
		     * @method setOutputHandler
		     * @static
		     *
		     * @param {Object} object object to mix pipe, unpipe, on, addListener, and removeListener functions into
		     * @param {EventHandler} handler assigned event handler
		     */
		    EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
		        if (handler instanceof EventHandler) handler.bindThis(object);
		        object.pipe = handler.pipe.bind(handler);
		        object.unpipe = handler.unpipe.bind(handler);
		        object.on = handler.on.bind(handler);
		        object.addListener = object.on;
		        object.removeListener = handler.removeListener.bind(handler);
		    };

		    /**
		     * Trigger an event, sending to all downstream handlers
		     *   listening for provided 'type' key.
		     *
		     * @method emit
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {Object} event event data
		     * @return {EventHandler} this
		     */
		    EventHandler.prototype.emit = function emit(type, event) {
		        EventEmitter.prototype.emit.apply(this, arguments);
		        var i = 0;
		        for (i = 0; i < this.downstream.length; i++) {
		            if (this.downstream[i].trigger) this.downstream[i].trigger(type, event);
		        }
		        for (i = 0; i < this.downstreamFn.length; i++) {
		            this.downstreamFn[i](type, event);
		        }
		        return this;
		    };

		    /**
		     * Alias for emit
		     * @method addListener
		     */
		    EventHandler.prototype.trigger = EventHandler.prototype.emit;

		    /**
		     * Add event handler object to set of downstream handlers.
		     *
		     * @method pipe
		     *
		     * @param {EventHandler} target event handler target object
		     * @return {EventHandler} passed event handler
		     */
		    EventHandler.prototype.pipe = function pipe(target) {
		        if (target.subscribe instanceof Function) return target.subscribe(this);

		        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
		        var index = downstreamCtx.indexOf(target);
		        if (index < 0) downstreamCtx.push(target);

		        if (target instanceof Function) target('pipe', null);
		        else if (target.trigger) target.trigger('pipe', null);

		        return target;
		    };

		    /**
		     * Remove handler object from set of downstream handlers.
		     *   Undoes work of "pipe".
		     *
		     * @method unpipe
		     *
		     * @param {EventHandler} target target handler object
		     * @return {EventHandler} provided target
		     */
		    EventHandler.prototype.unpipe = function unpipe(target) {
		        if (target.unsubscribe instanceof Function) return target.unsubscribe(this);

		        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
		        var index = downstreamCtx.indexOf(target);
		        if (index >= 0) {
		            downstreamCtx.splice(index, 1);
		            if (target instanceof Function) target('unpipe', null);
		            else if (target.trigger) target.trigger('unpipe', null);
		            return target;
		        }
		        else return false;
		    };

		    /**
		     * Bind a callback function to an event type handled by this object.
		     *
		     * @method "on"
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {function(string, Object)} handler callback
		     * @return {EventHandler} this
		     */
		    EventHandler.prototype.on = function on(type, handler) {
		        EventEmitter.prototype.on.apply(this, arguments);
		        if (!(type in this.upstreamListeners)) {
		            var upstreamListener = this.trigger.bind(this, type);
		            this.upstreamListeners[type] = upstreamListener;
		            for (var i = 0; i < this.upstream.length; i++) {
		                this.upstream[i].on(type, upstreamListener);
		            }
		        }
		        return this;
		    };

		    /**
		     * Alias for "on"
		     * @method addListener
		     */
		    EventHandler.prototype.addListener = EventHandler.prototype.on;

		    /**
		     * Listen for events from an upstream event handler.
		     *
		     * @method subscribe
		     *
		     * @param {EventEmitter} source source emitter object
		     * @return {EventHandler} this
		     */
		    EventHandler.prototype.subscribe = function subscribe(source) {
		        var index = this.upstream.indexOf(source);
		        if (index < 0) {
		            this.upstream.push(source);
		            for (var type in this.upstreamListeners) {
		                source.on(type, this.upstreamListeners[type]);
		            }
		        }
		        return this;
		    };

		    /**
		     * Stop listening to events from an upstream event handler.
		     *
		     * @method unsubscribe
		     *
		     * @param {EventEmitter} source source emitter object
		     * @return {EventHandler} this
		     */
		    EventHandler.prototype.unsubscribe = function unsubscribe(source) {
		        var index = this.upstream.indexOf(source);
		        if (index >= 0) {
		            this.upstream.splice(index, 1);
		            for (var type in this.upstreamListeners) {
		                source.removeListener(type, this.upstreamListeners[type]);
		            }
		        }
		        return this;
		    };

		    module.exports = EventHandler;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: david@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var Transitionable = __webpack_require__(19);
		    var Transform = __webpack_require__(18);
		    var Utility = __webpack_require__(24);

		    /**
		     * A class for transitioning the state of a Transform by transitioning the
		     * X, Y, and Z axes of it's translate, scale, skew and rotate components
		     * independently.
		     *
		     * @class TransitionableTransform
		     * @constructor
		     *
		     * @param [transform=Transform.identity] {Transform} The initial transform state
		     */
		    function TransitionableTransform(transform) {
		        this._final = Transform.identity.slice();

		        this._finalTranslate = [0, 0, 0];
		        this._finalRotate = [0, 0, 0];
		        this._finalSkew = [0, 0, 0];
		        this._finalScale = [1, 1, 1];

		        this.translate = [];
		        this.rotate    = [];
		        this.skew      = [];
		        this.scale     = [];

		        for (var i=0; i<3; i+=1) {
		            this.translate[i] = new Transitionable(this._finalTranslate[i]);
		            this.rotate[i]    = new Transitionable(this._finalRotate[i]);
		            this.skew[i]      = new Transitionable(this._finalSkew[i]);
		            this.scale[i]     = new Transitionable(this._finalScale[i]);
		        }

		        if (transform) this.set(transform);
		    }

		    function _build() {
		        return Transform.build({
		            translate: [this.translate[0].get(), this.translate[1].get(), this.translate[2].get()],
		            rotate:    [this.rotate[0].get(),    this.rotate[1].get(),    this.rotate[2].get()],
		            skew:      [this.skew[0].get(),      this.skew[1].get(),      this.skew[2].get()],
		            scale:     [this.scale[0].get(),     this.scale[1].get(),     this.scale[2].get()]
		        });
		    }

		    function _buildFinal() {
		        return Transform.build({
		            translate: this._finalTranslate,
		            rotate: this._finalRotate,
		            skew: this._finalSkew,
		            scale: this._finalScale
		        });
		    }

		    function _countOfType(array, type) {
		        var count = 0;
		        for (var i=0; i<array.length; i+=1) {
		            if (typeof array[i] === type+'') {
		                count+=1;
		            }
		        }
		        return count;
		    }

		    /**
		     * An optimized way of setting only the translation component of a Transform. Axes who's values are null will not be affected.
		     *
		     * @method setTranslate
		     * @chainable
		     *
		     * @param translate {Array}     New translation state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setTranslate = function setTranslate(translate, transition, callback) {
		        var numberOfAxes = _countOfType(translate, 'number');
		        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
		        for (var i=0; i<translate.length; i+=1) {
		            if (typeof translate[i] === 'number') {
		                this.translate[i].set(translate[i], transition, _callback);
		                this._finalTranslate[i] = translate[i];
		            }
		        }
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Translate only along the X axis of the translation component of a Transform.
		     *
		     * @method setTranslateX
		     * @chainable
		     *
		     * @param translate {Number}     New translation state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setTranslateX = function setTranslateX(translate, transition, callback) {
		        this.translate[0].set(translate, transition, callback);
		        this._finalTranslate[0] = translate;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Translate only along the Y axis of the translation component of a Transform.
		     *
		     * @method setTranslateY
		     * @chainable
		     *
		     * @param translate {Number}     New translation state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setTranslateY = function setTranslateY(translate, transition, callback) {
		        this.translate[1].set(translate, transition, callback);
		        this._finalTranslate[1] = translate;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Translate only along the Z axis of the translation component of a Transform.
		     *
		     * @method setTranslateZ
		     * @chainable
		     *
		     * @param translate {Number}     New translation state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setTranslateZ = function setTranslateZ(translate, transition, callback) {
		        this.translate[2].set(translate, transition, callback);
		        this._finalTranslate[2] = translate;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * An optimized way of setting only the scale component of a Transform. Axes who's values are null will not be affected.
		     *
		     * @method setScale
		     * @chainable
		     *
		     * @param scale {Array}         New scale state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setScale = function setScale(scale, transition, callback) {
		        var numberOfAxes = _countOfType(scale, 'number');
		        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
		        for (var i=0; i<scale.length; i+=1) {
		            if (typeof scale[i] === 'number') {
		                this.scale[i].set(scale[i], transition, _callback);
		                this._finalScale[i] = scale[i];
		            }
		        }
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Scale only along the X axis of the scale component of a Transform.
		     *
		     * @method setScaleX
		     * @chainable
		     *
		     * @param scale {Number}     New scale state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setScaleX = function setScaleX(scale, transition, callback) {
		        this.scale[0].set(scale, transition, callback);
		        this._finalScale[0] = scale;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Scale only along the Y axis of the scale component of a Transform.
		     *
		     * @method setScaleY
		     * @chainable
		     *
		     * @param scale {Number}     New scale state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setScaleY = function setScaleY(scale, transition, callback) {
		        this.scale[1].set(scale, transition, callback);
		        this._finalScale[1] = scale;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Scale only along the Z axis of the scale component of a Transform.
		     *
		     * @method setScaleZ
		     * @chainable
		     *
		     * @param scale {Number}     New scale state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setScaleZ = function setScaleZ(scale, transition, callback) {
		        this.scale[2].set(scale, transition, callback);
		        this._finalScale[2] = scale;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * An optimized way of setting only the rotational component of a Transform. Axes who's values are null will not be affected.
		     *
		     * @method setRotate
		     * @chainable
		     *
		     * @param eulerAngles {Array}   Euler angles for new rotation state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setRotate = function setRotate(eulerAngles, transition, callback) {
		        var numberOfAxes = _countOfType(eulerAngles, 'number');
		        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
		        for (var i=0; i<eulerAngles.length; i+=1) {
		            if (typeof eulerAngles[i] === 'number') {
		                this.rotate[i].set(eulerAngles[i], transition, _callback);
		                this._finalRotate[i] = eulerAngles[i];
		            }
		        }
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Rotate only about the X axis of the rotational component of a Transform.
		     *
		     * @method setScaleX
		     * @chainable
		     *
		     * @param eulerAngle {Number}     New rotational state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setRotateX = function setRotateX(eulerAngle, transition, callback) {
		        this.rotate[0].set(eulerAngle, transition, callback);
		        this._finalRotate[0] = eulerAngle;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Rotate only about the Y axis of the rotational component of a Transform.
		     *
		     * @method setScaleY
		     * @chainable
		     *
		     * @param eulerAngle {Number}     New rotational state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setRotateY = function setRotateY(eulerAngle, transition, callback) {
		        this.rotate[1].set(eulerAngle, transition, callback);
		        this._finalRotate[1] = eulerAngle;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Rotate only about the Z axis of the rotational component of a Transform.
		     *
		     * @method setScaleZ
		     * @chainable
		     *
		     * @param eulerAngle {Number}     New rotational state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setRotateZ = function setRotateZ(eulerAngle, transition, callback) {
		        this.rotate[2].set(eulerAngle, transition, callback);
		        this._finalRotate[2] = eulerAngle;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * An optimized way of setting only the skew component of a Transform. Axes who's values are null will not be affected.
		     *
		     * @method setSkew
		     * @chainable
		     *
		     * @param skewAngles {Array}    New skew state. Axes who's values are null will not be affected.
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setSkew = function setSkew(skewAngles, transition, callback) {
		        var numberOfAxes = _countOfType(skewAngles, 'number');
		        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
		        for (var i=0; i<skewAngles.length; i+=1) {
		            if (typeof skewAngles[i] === 'number') {
		                this.skew[i].set(skewAngles[i], transition, _callback);
		                this._finalSkew[i] = skewAngles[i];
		            }
		        }
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Skew only about the X axis of the skew component of a Transform.
		     *
		     * @method setSkewX
		     * @chainable
		     *
		     * @param skewAngle {Number}     New skew state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setSkewX = function setSkewX(skewAngle, transition, callback) {
		        this.skew[0].set(skewAngle, transition, callback);
		        this._finalSkew[0] = skewAngle;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Skew only about the Y axis of the skew component of a Transform.
		     *
		     * @method setSkewY
		     * @chainable
		     *
		     * @param skewAngle {Number}     New skew state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setSkewY = function setSkewY(skewAngle, transition, callback) {
		        this.skew[1].set(skewAngle, transition, callback);
		        this._finalSkew[1] = skewAngle;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Skew only about the Z axis of the skew component of a Transform.
		     *
		     * @method setSkewZ
		     * @chainable
		     *
		     * @param skewAngle {Number}     New skew state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.setSkewZ = function setSkewZ(skewAngle, transition, callback) {
		        this.skew[2].set(skewAngle, transition, callback);
		        this._finalSkew[2] = skewAngle;
		        this._final = _buildFinal.call(this);
		        return this;
		    };

		    /**
		     * Setter for a TransitionableTransform with optional parameters to transition
		     * between Transforms. Animates all axes of all components.
		     *
		     * @method set
		     * @chainable
		     *
		     * @param transform {Array}     New transform state
		     * @param [transition] {Object} Transition definition
		     * @param [callback] {Function} Callback
		     * @return {TransitionableTransform}
		     */
		    TransitionableTransform.prototype.set = function set(transform, transition, callback) {
		        var components = Transform.interpret(transform);

		        this._finalTranslate = components.translate;
		        this._finalRotate = components.rotate;
		        this._finalSkew = components.skew;
		        this._finalScale = components.scale;
		        this._final = transform;

		        var _callback = callback ? Utility.after(12, callback) : null;
		        for (var i=0; i<3; i+=1) {
		            this.translate[i].set(components.translate[i], transition, _callback);
		            this.rotate[i].set(components.rotate[i], transition, _callback);
		            this.skew[i].set(components.skew[i], transition, _callback);
		            this.scale[i].set(components.scale[i], transition, _callback);
		        }
		        return this;
		    };

		    /**
		     * Sets the default transition to use for transitioning betwen Transform states
		     *
		     * @method setDefaultTransition
		     *
		     * @param transition {Object} Transition definition
		     */
		    TransitionableTransform.prototype.setDefaultTransition = function setDefaultTransition(transition) {
		        for (var i=0; i<3; i+=1) {
		            this.translate[i].setDefault(transition);
		            this.rotate[i].setDefault(transition);
		            this.skew[i].setDefault(transition);
		            this.scale[i].setDefault(transition);
		        }
		    };

		    /**
		     * Getter. Returns the current state of the Transform
		     *
		     * @method get
		     *
		     * @return {Transform}
		     */
		    TransitionableTransform.prototype.get = function get() {
		        if (this.isActive()) {
		            return _build.call(this);
		        }
		        else return this._final;
		    };

		    /**
		     * Get the destination state of the Transform
		     *
		     * @method getFinal
		     *
		     * @return Transform {Transform}
		     */
		    TransitionableTransform.prototype.getFinal = function getFinal() {
		        return this._final;
		    };

		    /**
		     * Determine if the TransitionableTransform is currently transitioning
		     *
		     * @method isActive
		     *
		     * @return {Boolean}
		     */
		    TransitionableTransform.prototype.isActive = function isActive() {
		        var isActive = false;

		        for (var i=0; i<3; i+=1) {
		            if (
		                this.translate[i].isActive()
		                || this.rotate[i].isActive()
		                || this.skew[i].isActive()
		                || this.scale[i].isActive()
		            ) {
		                isActive = true; break;
		            }
		        }
		        return isActive;
		    };

		    /**
		     * Halts the transition
		     *
		     * @method halt
		     */
		    TransitionableTransform.prototype.halt = function halt() {
		        for (var i=0; i<3; i+=1) {
		            this.translate[i].halt();
		            this.rotate[i].halt();
		            this.skew[i].halt();
		            this.scale[i].halt();

		            this._finalTranslate[i] = this.translate[i].get();
		            this._finalRotate[i] = this.rotate[i].get();
		            this._finalSkew[i] = this.skew[i].get();
		            this._finalScale[i] = this.scale[i].get();
		        }

		        this._final = this.get();

		        return this;
		    };

		    module.exports = TransitionableTransform;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		
		// Polyfill for Function.name on browsers that do not support it (IE):
		// See: http://stackoverflow.com/questions/6903762/function-name-not-supported-in-ie
		if (!(function f() {}).name) {
		    Object.defineProperty(Function.prototype, 'name', {
		        get: function() {
		            var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

		            // For better performance only parse once, and then cache the
		            // result through a new accessor for repeated access.
		            Object.defineProperty(this, 'name', { value: name });

		            return name;
		        }
		    });
		}


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var RenderNode = __webpack_require__(12);
		    var EventHandler = __webpack_require__(13);
		    var ElementAllocator = __webpack_require__(25);
		    var Transform = __webpack_require__(18);
		    var Transitionable = __webpack_require__(19);

		    var _zeroZero = [0, 0];
		    var usePrefix = !('perspective' in document.documentElement.style);

		    function _getElementSize(element) {
		        return [element.clientWidth, element.clientHeight];
		    }

		    var _setPerspective = usePrefix ? function(element, perspective) {
		        element.style.webkitPerspective = perspective ? perspective.toFixed() + 'px' : '';
		    } : function(element, perspective) {
		        element.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
		    };

		    /**
		     * The top-level container for a Famous-renderable piece of the document.
		     *   It is directly updated by the process-wide Engine object, and manages one
		     *   render tree root, which can contain other renderables.
		     *
		     * @class Context
		     * @constructor
		     * @private
		     * @param {Node} container Element in which content will be inserted
		     */
		    function Context(container) {
		        this.container = container;
		        this._allocator = new ElementAllocator(container);

		        this._node = new RenderNode();
		        this._eventOutput = new EventHandler();
		        this._size = _getElementSize(this.container);

		        this._perspectiveState = new Transitionable(0);
		        this._perspective = undefined;

		        this._nodeContext = {
		            allocator: this._allocator,
		            transform: Transform.identity,
		            opacity: 1,
		            origin: _zeroZero,
		            align: _zeroZero,
		            size: this._size
		        };

		        this._eventOutput.on('resize', function() {
		            this.setSize(_getElementSize(this.container));
		        }.bind(this));

		    }

		    // Note: Unused
		    Context.prototype.getAllocator = function getAllocator() {
		        return this._allocator;
		    };

		    /**
		     * Add renderables to this Context's render tree.
		     *
		     * @method add
		     *
		     * @param {Object} obj renderable object
		     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
		     */
		    Context.prototype.add = function add(obj) {
		        return this._node.add(obj);
		    };

		    /**
		     * Move this Context to another containing document element.
		     *
		     * @method migrate
		     *
		     * @param {Node} container Element to which content will be migrated
		     */
		    Context.prototype.migrate = function migrate(container) {
		        if (container === this.container) return;
		        this.container = container;
		        this._allocator.migrate(container);
		    };

		    /**
		     * Gets viewport size for Context.
		     *
		     * @method getSize
		     *
		     * @return {Array.Number} viewport size as [width, height]
		     */
		    Context.prototype.getSize = function getSize() {
		        return this._size;
		    };

		    /**
		     * Sets viewport size for Context.
		     *
		     * @method setSize
		     *
		     * @param {Array.Number} size [width, height].  If unspecified, use size of root document element.
		     */
		    Context.prototype.setSize = function setSize(size) {
		        if (!size) size = _getElementSize(this.container);
		        this._size[0] = size[0];
		        this._size[1] = size[1];
		    };

		    /**
		     * Commit this Context's content changes to the document.
		     *
		     * @private
		     * @method update
		     * @param {Object} contextParameters engine commit specification
		     */
		    Context.prototype.update = function update(contextParameters) {
		        if (contextParameters) {
		            if (contextParameters.transform) this._nodeContext.transform = contextParameters.transform;
		            if (contextParameters.opacity) this._nodeContext.opacity = contextParameters.opacity;
		            if (contextParameters.origin) this._nodeContext.origin = contextParameters.origin;
		            if (contextParameters.align) this._nodeContext.align = contextParameters.align;
		            if (contextParameters.size) this._nodeContext.size = contextParameters.size;
		        }
		        var perspective = this._perspectiveState.get();
		        if (perspective !== this._perspective) {
		            _setPerspective(this.container, perspective);
		            this._perspective = perspective;
		        }

		        this._node.commit(this._nodeContext);
		    };

		    /**
		     * Get current perspective of this context in pixels.
		     *
		     * @method getPerspective
		     * @return {Number} depth perspective in pixels
		     */
		    Context.prototype.getPerspective = function getPerspective() {
		        return this._perspectiveState.get();
		    };

		    /**
		     * Set current perspective of this context in pixels.
		     *
		     * @method setPerspective
		     * @param {Number} perspective in pixels
		     * @param {Object} [transition] Transitionable object for applying the change
		     * @param {function(Object)} callback function called on completion of transition
		     */
		    Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
		        return this._perspectiveState.set(perspective, transition, callback);
		    };

		    /**
		     * Trigger an event, sending to all downstream handlers
		     *   listening for provided 'type' key.
		     *
		     * @method emit
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {Object} event event data
		     * @return {EventHandler} this
		     */
		    Context.prototype.emit = function emit(type, event) {
		        return this._eventOutput.emit(type, event);
		    };

		    /**
		     * Bind a callback function to an event type handled by this object.
		     *
		     * @method "on"
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {function(string, Object)} handler callback
		     * @return {EventHandler} this
		     */
		    Context.prototype.on = function on(type, handler) {
		        return this._eventOutput.on(type, handler);
		    };

		    /**
		     * Unbind an event by type and handler.
		     *   This undoes the work of "on".
		     *
		     * @method removeListener
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {function} handler function object to remove
		     * @return {EventHandler} internal event handler object (for chaining)
		     */
		    Context.prototype.removeListener = function removeListener(type, handler) {
		        return this._eventOutput.removeListener(type, handler);
		    };

		    /**
		     * Add event handler object to set of downstream handlers.
		     *
		     * @method pipe
		     *
		     * @param {EventHandler} target event handler target object
		     * @return {EventHandler} passed event handler
		     */
		    Context.prototype.pipe = function pipe(target) {
		        return this._eventOutput.pipe(target);
		    };

		    /**
		     * Remove handler object from set of downstream handlers.
		     *   Undoes work of "pipe".
		     *
		     * @method unpipe
		     *
		     * @param {EventHandler} target target handler object
		     * @return {EventHandler} provided target
		     */
		    Context.prototype.unpipe = function unpipe(target) {
		        return this._eventOutput.unpipe(target);
		    };

		    module.exports = Context;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var EventHandler = __webpack_require__(13);

		    /**
		     *  A collection of methods for setting options which can be extended
		     *  onto other classes.
		     *
		     *
		     *  **** WARNING ****
		     *  You can only pass through objects that will compile into valid JSON.
		     *
		     *  Valid options:
		     *      Strings,
		     *      Arrays,
		     *      Objects,
		     *      Numbers,
		     *      Nested Objects,
		     *      Nested Arrays.
		     *
		     *    This excludes:
		     *        Document Fragments,
		     *        Functions
		     * @class OptionsManager
		     * @constructor
		     * @param {Object} value options dictionary
		     */
		    function OptionsManager(value) {
		        this._value = value;
		        this.eventOutput = null;
		    }

		    /**
		     * Create options manager from source dictionary with arguments overriden by patch dictionary.
		     *
		     * @static
		     * @method OptionsManager.patch
		     *
		     * @param {Object} source source arguments
		     * @param {...Object} data argument additions and overwrites
		     * @return {Object} source object
		     */
		    OptionsManager.patch = function patchObject(source, data) {
		        var manager = new OptionsManager(source);
		        for (var i = 1; i < arguments.length; i++) manager.patch(arguments[i]);
		        return source;
		    };

		    function _createEventOutput() {
		        this.eventOutput = new EventHandler();
		        this.eventOutput.bindThis(this);
		        EventHandler.setOutputHandler(this, this.eventOutput);
		    }

		    /**
		     * Create OptionsManager from source with arguments overriden by patches.
		     *   Triggers 'change' event on this object's event handler if the state of
		     *   the OptionsManager changes as a result.
		     *
		     * @method patch
		     *
		     * @param {...Object} arguments list of patch objects
		     * @return {OptionsManager} this
		     */
		    OptionsManager.prototype.patch = function patch() {
		        var myState = this._value;
		        for (var i = 0; i < arguments.length; i++) {
		            var data = arguments[i];
		            for (var k in data) {
		                if ((k in myState) && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
		                    if (!myState.hasOwnProperty(k)) myState[k] = Object.create(myState[k]);
		                    this.key(k).patch(data[k]);
		                    if (this.eventOutput) this.eventOutput.emit('change', {id: k, value: this.key(k).value()});
		                }
		                else this.set(k, data[k]);
		            }
		        }
		        return this;
		    };

		    /**
		     * Alias for patch
		     *
		     * @method setOptions
		     *
		     */
		    OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;

		    /**
		     * Return OptionsManager based on sub-object retrieved by key
		     *
		     * @method key
		     *
		     * @param {string} identifier key
		     * @return {OptionsManager} new options manager with the value
		     */
		    OptionsManager.prototype.key = function key(identifier) {
		        var result = new OptionsManager(this._value[identifier]);
		        if (!(result._value instanceof Object) || result._value instanceof Array) result._value = {};
		        return result;
		    };

		    /**
		     * Look up value by key or get the full options hash
		     * @method get
		     *
		     * @param {string} key key
		     * @return {Object} associated object or full options hash
		     */
		    OptionsManager.prototype.get = function get(key) {
		        return key ? this._value[key] : this._value;
		    };

		    /**
		     * Alias for get
		     * @method getOptions
		     */
		    OptionsManager.prototype.getOptions = OptionsManager.prototype.get;

		    /**
		     * Set key to value.  Outputs 'change' event if a value is overwritten.
		     *
		     * @method set
		     *
		     * @param {string} key key string
		     * @param {Object} value value object
		     * @return {OptionsManager} new options manager based on the value object
		     */
		    OptionsManager.prototype.set = function set(key, value) {
		        var originalValue = this.get(key);
		        this._value[key] = value;
		        if (this.eventOutput && value !== originalValue) this.eventOutput.emit('change', {id: key, value: value});
		        return this;
		    };

		    /**
		     * Bind a callback function to an event type handled by this object.
		     *
		     * @method "on"
		     *
		     * @param {string} type event type key (for example, 'change')
		     * @param {function(string, Object)} handler callback
		     * @return {EventHandler} this
		     */
		    OptionsManager.prototype.on = function on() {
		        _createEventOutput.call(this);
		        return this.on.apply(this, arguments);
		    };

		    /**
		     * Unbind an event by type and handler.
		     *   This undoes the work of "on".
		     *
		     * @method removeListener
		     *
		     * @param {string} type event type key (for example, 'change')
		     * @param {function} handler function object to remove
		     * @return {EventHandler} internal event handler object (for chaining)
		     */
		    OptionsManager.prototype.removeListener = function removeListener() {
		        _createEventOutput.call(this);
		        return this.removeListener.apply(this, arguments);
		    };

		    /**
		     * Add event handler object to set of downstream handlers.
		     *
		     * @method pipe
		     *
		     * @param {EventHandler} target event handler target object
		     * @return {EventHandler} passed event handler
		     */
		    OptionsManager.prototype.pipe = function pipe() {
		        _createEventOutput.call(this);
		        return this.pipe.apply(this, arguments);
		    };

		    /**
		     * Remove handler object from set of downstream handlers.
		     * Undoes work of "pipe"
		     *
		     * @method unpipe
		     *
		     * @param {EventHandler} target target handler object
		     * @return {EventHandler} provided target
		     */
		    OptionsManager.prototype.unpipe = function unpipe() {
		        _createEventOutput.call(this);
		        return this.unpipe.apply(this, arguments);
		    };

		    module.exports = OptionsManager;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

		    /**
		     *  A high-performance static matrix math library used to calculate
		     *    affine transforms on surfaces and other renderables.
		     *    Famo.us uses 4x4 matrices corresponding directly to
		     *    WebKit matrices (column-major order).
		     *
		     *    The internal "type" of a Matrix is a 16-long float array in
		     *    row-major order, with:
		     *    elements [0],[1],[2],[4],[5],[6],[8],[9],[10] forming the 3x3
		     *          transformation matrix;
		     *    elements [12], [13], [14] corresponding to the t_x, t_y, t_z
		     *           translation;
		     *    elements [3], [7], [11] set to 0;
		     *    element [15] set to 1.
		     *    All methods are static.
		     *
		     * @static
		     *
		     * @class Transform
		     */
		    var Transform = {};

		    // WARNING: these matrices correspond to WebKit matrices, which are
		    //    transposed from their math counterparts
		    Transform.precision = 1e-6;
		    Transform.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

		    /**
		     * Multiply two or more Transform matrix types to return a Transform matrix.
		     *
		     * @method multiply4x4
		     * @static
		     * @param {Transform} a left Transform
		     * @param {Transform} b right Transform
		     * @return {Transform}
		     */
		    Transform.multiply4x4 = function multiply4x4(a, b) {
		        return [
		            a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
		            a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
		            a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
		            a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
		            a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
		            a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
		            a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
		            a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
		            a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
		            a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
		            a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
		            a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
		            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
		            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
		            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
		            a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
		        ];
		    };

		    /**
		     * Fast-multiply two or more Transform matrix types to return a
		     *    Matrix, assuming bottom row on each is [0 0 0 1].
		     *
		     * @method multiply
		     * @static
		     * @param {Transform} a left Transform
		     * @param {Transform} b right Transform
		     * @return {Transform}
		     */
		    Transform.multiply = function multiply(a, b) {
		        return [
		            a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
		            a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
		            a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
		            0,
		            a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
		            a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
		            a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
		            0,
		            a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
		            a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
		            a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
		            0,
		            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
		            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
		            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
		            1
		        ];
		    };

		    /**
		     * Return a Transform translated by additional amounts in each
		     *    dimension. This is equivalent to the result of
		     *
		     *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
		     *
		     * @method thenMove
		     * @static
		     * @param {Transform} m a Transform
		     * @param {Array.Number} t floats delta vector of length 2 or 3
		     * @return {Transform}
		     */
		    Transform.thenMove = function thenMove(m, t) {
		        if (!t[2]) t[2] = 0;
		        return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
		    };

		    /**
		     * Return a Transform atrix which represents the result of a transform matrix
		     *    applied after a move. This is faster than the equivalent multiply.
		     *    This is equivalent to the result of:
		     *
		     *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
		     *
		     * @method moveThen
		     * @static
		     * @param {Array.Number} v vector representing initial movement
		     * @param {Transform} m matrix to apply afterwards
		     * @return {Transform} the resulting matrix
		     */
		    Transform.moveThen = function moveThen(v, m) {
		        if (!v[2]) v[2] = 0;
		        var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
		        var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
		        var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
		        return Transform.thenMove(m, [t0, t1, t2]);
		    };

		    /**
		     * Return a Transform which represents a translation by specified
		     *    amounts in each dimension.
		     *
		     * @method translate
		     * @static
		     * @param {Number} x x translation
		     * @param {Number} y y translation
		     * @param {Number} z z translation
		     * @return {Transform}
		     */
		    Transform.translate = function translate(x, y, z) {
		        if (z === undefined) z = 0;
		        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
		    };

		    /**
		     * Return a Transform scaled by a vector in each
		     *    dimension. This is a more performant equivalent to the result of
		     *
		     *    Transform.multiply(Transform.scale(s[0], s[1], s[2]), m).
		     *
		     * @method thenScale
		     * @static
		     * @param {Transform} m a matrix
		     * @param {Array.Number} s delta vector (array of floats &&
		     *    array.length == 3)
		     * @return {Transform}
		     */
		    Transform.thenScale = function thenScale(m, s) {
		        return [
		            s[0] * m[0], s[1] * m[1], s[2] * m[2], 0,
		            s[0] * m[4], s[1] * m[5], s[2] * m[6], 0,
		            s[0] * m[8], s[1] * m[9], s[2] * m[10], 0,
		            s[0] * m[12], s[1] * m[13], s[2] * m[14], 1
		        ];
		    };

		    /**
		     * Return a Transform which represents a scale by specified amounts
		     *    in each dimension.
		     *
		     * @method scale
		     * @static
		     * @param {Number} x x scale factor
		     * @param {Number} y y scale factor
		     * @param {Number} z z scale factor
		     * @return {Transform}
		     */
		    Transform.scale = function scale(x, y, z) {
		        if (z === undefined) z = 1;
		        if (y === undefined) y = x;
		        return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
		    };

		    /**
		     * Return a Transform which represents a clockwise
		     *    rotation around the x axis.
		     *
		     * @method rotateX
		     * @static
		     * @param {Number} theta radians
		     * @return {Transform}
		     */
		    Transform.rotateX = function rotateX(theta) {
		        var cosTheta = Math.cos(theta);
		        var sinTheta = Math.sin(theta);
		        return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
		    };

		    /**
		     * Return a Transform which represents a clockwise
		     *    rotation around the y axis.
		     *
		     * @method rotateY
		     * @static
		     * @param {Number} theta radians
		     * @return {Transform}
		     */
		    Transform.rotateY = function rotateY(theta) {
		        var cosTheta = Math.cos(theta);
		        var sinTheta = Math.sin(theta);
		        return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
		    };

		    /**
		     * Return a Transform which represents a clockwise
		     *    rotation around the z axis.
		     *
		     * @method rotateZ
		     * @static
		     * @param {Number} theta radians
		     * @return {Transform}
		     */
		    Transform.rotateZ = function rotateZ(theta) {
		        var cosTheta = Math.cos(theta);
		        var sinTheta = Math.sin(theta);
		        return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
		    };

		    /**
		     * Return a Transform which represents composed clockwise
		     *    rotations along each of the axes. Equivalent to the result of
		     *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
		     *
		     * @method rotate
		     * @static
		     * @param {Number} phi radians to rotate about the positive x axis
		     * @param {Number} theta radians to rotate about the positive y axis
		     * @param {Number} psi radians to rotate about the positive z axis
		     * @return {Transform}
		     */
		    Transform.rotate = function rotate(phi, theta, psi) {
		        var cosPhi = Math.cos(phi);
		        var sinPhi = Math.sin(phi);
		        var cosTheta = Math.cos(theta);
		        var sinTheta = Math.sin(theta);
		        var cosPsi = Math.cos(psi);
		        var sinPsi = Math.sin(psi);
		        var result = [
		            cosTheta * cosPsi,
		            cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
		            sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
		            0,
		            -cosTheta * sinPsi,
		            cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
		            sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
		            0,
		            sinTheta,
		            -sinPhi * cosTheta,
		            cosPhi * cosTheta,
		            0,
		            0, 0, 0, 1
		        ];
		        return result;
		    };

		    /**
		     * Return a Transform which represents an axis-angle rotation
		     *
		     * @method rotateAxis
		     * @static
		     * @param {Array.Number} v unit vector representing the axis to rotate about
		     * @param {Number} theta radians to rotate clockwise about the axis
		     * @return {Transform}
		     */
		    Transform.rotateAxis = function rotateAxis(v, theta) {
		        var sinTheta = Math.sin(theta);
		        var cosTheta = Math.cos(theta);
		        var verTheta = 1 - cosTheta; // versine of theta

		        var xxV = v[0] * v[0] * verTheta;
		        var xyV = v[0] * v[1] * verTheta;
		        var xzV = v[0] * v[2] * verTheta;
		        var yyV = v[1] * v[1] * verTheta;
		        var yzV = v[1] * v[2] * verTheta;
		        var zzV = v[2] * v[2] * verTheta;
		        var xs = v[0] * sinTheta;
		        var ys = v[1] * sinTheta;
		        var zs = v[2] * sinTheta;

		        var result = [
		            xxV + cosTheta, xyV + zs, xzV - ys, 0,
		            xyV - zs, yyV + cosTheta, yzV + xs, 0,
		            xzV + ys, yzV - xs, zzV + cosTheta, 0,
		            0, 0, 0, 1
		        ];
		        return result;
		    };

		    /**
		     * Return a Transform which represents a transform matrix applied about
		     * a separate origin point.
		     *
		     * @method aboutOrigin
		     * @static
		     * @param {Array.Number} v origin point to apply matrix
		     * @param {Transform} m matrix to apply
		     * @return {Transform}
		     */
		    Transform.aboutOrigin = function aboutOrigin(v, m) {
		        var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
		        var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
		        var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
		        return Transform.thenMove(m, [t0, t1, t2]);
		    };

		    /**
		     * Return a Transform representation of a skew transformation
		     *
		     * @method skew
		     * @static
		     * @param {Number} phi scale factor skew in the x axis
		     * @param {Number} theta scale factor skew in the y axis
		     * @param {Number} psi scale factor skew in the z axis
		     * @return {Transform}
		     */
		    Transform.skew = function skew(phi, theta, psi) {
		        return [1, Math.tan(theta), 0, 0, Math.tan(psi), 1, 0, 0, 0, Math.tan(phi), 1, 0, 0, 0, 0, 1];
		    };

		    /**
		     * Return a Transform representation of a skew in the x-direction
		     *
		     * @method skewX
		     * @static
		     * @param {Number} angle the angle between the top and left sides
		     * @return {Transform}
		     */
		    Transform.skewX = function skewX(angle) {
		        return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
		    };

		    /**
		     * Return a Transform representation of a skew in the y-direction
		     *
		     * @method skewY
		     * @static
		     * @param {Number} angle the angle between the top and right sides
		     * @return {Transform}
		     */
		    Transform.skewY = function skewY(angle) {
		        return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
		    };

		    /**
		     * Returns a perspective Transform matrix
		     *
		     * @method perspective
		     * @static
		     * @param {Number} focusZ z position of focal point
		     * @return {Transform}
		     */
		    Transform.perspective = function perspective(focusZ) {
		        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
		    };

		    /**
		     * Return translation vector component of given Transform
		     *
		     * @method getTranslate
		     * @static
		     * @param {Transform} m Transform
		     * @return {Array.Number} the translation vector [t_x, t_y, t_z]
		     */
		    Transform.getTranslate = function getTranslate(m) {
		        return [m[12], m[13], m[14]];
		    };

		    /**
		     * Return inverse affine transform for given Transform.
		     *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
		     *   Will provide incorrect results if not invertible or preconditions not met.
		     *
		     * @method inverse
		     * @static
		     * @param {Transform} m Transform
		     * @return {Transform}
		     */
		    Transform.inverse = function inverse(m) {
		        // only need to consider 3x3 section for affine
		        var c0 = m[5] * m[10] - m[6] * m[9];
		        var c1 = m[4] * m[10] - m[6] * m[8];
		        var c2 = m[4] * m[9] - m[5] * m[8];
		        var c4 = m[1] * m[10] - m[2] * m[9];
		        var c5 = m[0] * m[10] - m[2] * m[8];
		        var c6 = m[0] * m[9] - m[1] * m[8];
		        var c8 = m[1] * m[6] - m[2] * m[5];
		        var c9 = m[0] * m[6] - m[2] * m[4];
		        var c10 = m[0] * m[5] - m[1] * m[4];
		        var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
		        var invD = 1 / detM;
		        var result = [
		            invD * c0, -invD * c4, invD * c8, 0,
		            -invD * c1, invD * c5, -invD * c9, 0,
		            invD * c2, -invD * c6, invD * c10, 0,
		            0, 0, 0, 1
		        ];
		        result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
		        result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
		        result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
		        return result;
		    };

		    /**
		     * Returns the transpose of a 4x4 matrix
		     *
		     * @method transpose
		     * @static
		     * @param {Transform} m matrix
		     * @return {Transform} the resulting transposed matrix
		     */
		    Transform.transpose = function transpose(m) {
		        return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
		    };

		    function _normSquared(v) {
		        return (v.length === 2) ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
		    }
		    function _norm(v) {
		        return Math.sqrt(_normSquared(v));
		    }
		    function _sign(n) {
		        return (n < 0) ? -1 : 1;
		    }

		    /**
		     * Decompose Transform into separate .translate, .rotate, .scale,
		     *    and .skew components.
		     *
		     * @method interpret
		     * @static
		     * @param {Transform} M transform matrix
		     * @return {Object} matrix spec object with component matrices .translate,
		     *    .rotate, .scale, .skew
		     */
		    Transform.interpret = function interpret(M) {

		        // QR decomposition via Householder reflections
		        //FIRST ITERATION

		        //default Q1 to the identity matrix;
		        var x = [M[0], M[1], M[2]];                // first column vector
		        var sgn = _sign(x[0]);                     // sign of first component of x (for stability)
		        var xNorm = _norm(x);                      // norm of first column vector
		        var v = [x[0] + sgn * xNorm, x[1], x[2]];  // v = x + sign(x[0])|x|e1
		        var mult = 2 / _normSquared(v);            // mult = 2/v'v

		        //bail out if our Matrix is singular
		        if (mult >= Infinity) {
		            return {translate: Transform.getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
		        }

		        //evaluate Q1 = I - 2vv'/v'v
		        var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

		        //diagonals
		        Q1[0]  = 1 - mult * v[0] * v[0];    // 0,0 entry
		        Q1[5]  = 1 - mult * v[1] * v[1];    // 1,1 entry
		        Q1[10] = 1 - mult * v[2] * v[2];    // 2,2 entry

		        //upper diagonal
		        Q1[1] = -mult * v[0] * v[1];        // 0,1 entry
		        Q1[2] = -mult * v[0] * v[2];        // 0,2 entry
		        Q1[6] = -mult * v[1] * v[2];        // 1,2 entry

		        //lower diagonal
		        Q1[4] = Q1[1];                      // 1,0 entry
		        Q1[8] = Q1[2];                      // 2,0 entry
		        Q1[9] = Q1[6];                      // 2,1 entry

		        //reduce first column of M
		        var MQ1 = Transform.multiply(Q1, M);

		        //SECOND ITERATION on (1,1) minor
		        var x2 = [MQ1[5], MQ1[6]];
		        var sgn2 = _sign(x2[0]);                    // sign of first component of x (for stability)
		        var x2Norm = _norm(x2);                     // norm of first column vector
		        var v2 = [x2[0] + sgn2 * x2Norm, x2[1]];    // v = x + sign(x[0])|x|e1
		        var mult2 = 2 / _normSquared(v2);           // mult = 2/v'v

		        //evaluate Q2 = I - 2vv'/v'v
		        var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

		        //diagonal
		        Q2[5]  = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
		        Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry

		        //off diagonals
		        Q2[6] = -mult2 * v2[0] * v2[1];     // 2,1 entry
		        Q2[9] = Q2[6];                      // 1,2 entry

		        //calc QR decomposition. Q = Q1*Q2, R = Q'*M
		        var Q = Transform.multiply(Q2, Q1);      //note: really Q transpose
		        var R = Transform.multiply(Q, M);

		        //remove negative scaling
		        var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
		        R = Transform.multiply(R, remover);
		        Q = Transform.multiply(remover, Q);

		        //decompose into rotate/scale/skew matrices
		        var result = {};
		        result.translate = Transform.getTranslate(M);
		        result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
		        if (!result.rotate[0]) {
		            result.rotate[0] = 0;
		            result.rotate[2] = Math.atan2(Q[4], Q[5]);
		        }
		        result.scale = [R[0], R[5], R[10]];
		        result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];

		        //double rotation workaround
		        if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
		            result.rotate[1] = Math.PI - result.rotate[1];
		            if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
		            if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
		            if (result.rotate[0] < 0) result.rotate[0] += Math.PI;
		            else result.rotate[0] -= Math.PI;
		            if (result.rotate[2] < 0) result.rotate[2] += Math.PI;
		            else result.rotate[2] -= Math.PI;
		        }

		        return result;
		    };

		    /**
		     * Weighted average between two matrices by averaging their
		     *     translation, rotation, scale, skew components.
		     *     f(M1,M2,t) = (1 - t) * M1 + t * M2
		     *
		     * @method average
		     * @static
		     * @param {Transform} M1 f(M1,M2,0) = M1
		     * @param {Transform} M2 f(M1,M2,1) = M2
		     * @param {Number} t
		     * @return {Transform}
		     */
		    Transform.average = function average(M1, M2, t) {
		        t = (t === undefined) ? 0.5 : t;
		        var specM1 = Transform.interpret(M1);
		        var specM2 = Transform.interpret(M2);

		        var specAvg = {
		            translate: [0, 0, 0],
		            rotate: [0, 0, 0],
		            scale: [0, 0, 0],
		            skew: [0, 0, 0]
		        };

		        for (var i = 0; i < 3; i++) {
		            specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
		            specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
		            specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
		            specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
		        }
		        return Transform.build(specAvg);
		    };

		    /**
		     * Compose .translate, .rotate, .scale, .skew components into
		     * Transform matrix
		     *
		     * @method build
		     * @static
		     * @param {matrixSpec} spec object with component matrices .translate,
		     *    .rotate, .scale, .skew
		     * @return {Transform} composed transform
		     */
		    Transform.build = function build(spec) {
		        var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
		        var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
		        var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
		        return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
		    };

		    /**
		     * Determine if two Transforms are component-wise equal
		     *   Warning: breaks on perspective Transforms
		     *
		     * @method equals
		     * @static
		     * @param {Transform} a matrix
		     * @param {Transform} b matrix
		     * @return {boolean}
		     */
		    Transform.equals = function equals(a, b) {
		        return !Transform.notEquals(a, b);
		    };

		    /**
		     * Determine if two Transforms are component-wise unequal
		     *   Warning: breaks on perspective Transforms
		     *
		     * @method notEquals
		     * @static
		     * @param {Transform} a matrix
		     * @param {Transform} b matrix
		     * @return {boolean}
		     */
		    Transform.notEquals = function notEquals(a, b) {
		        if (a === b) return false;

		        // shortci
		        return !(a && b) ||
		            a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] ||
		            a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] ||
		            a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] ||
		            a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
		    };

		    /**
		     * Constrain angle-trio components to range of [-pi, pi).
		     *
		     * @method normalizeRotation
		     * @static
		     * @param {Array.Number} rotation phi, theta, psi (array of floats
		     *    && array.length == 3)
		     * @return {Array.Number} new phi, theta, psi triplet
		     *    (array of floats && array.length == 3)
		     */
		    Transform.normalizeRotation = function normalizeRotation(rotation) {
		        var result = rotation.slice(0);
		        if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
		            result[0] = -result[0];
		            result[1] = Math.PI - result[1];
		            result[2] -= Math.PI;
		        }
		        if (result[0] > Math.PI * 0.5) {
		            result[0] = result[0] - Math.PI;
		            result[1] = Math.PI - result[1];
		            result[2] -= Math.PI;
		        }
		        if (result[0] < -Math.PI * 0.5) {
		            result[0] = result[0] + Math.PI;
		            result[1] = -Math.PI - result[1];
		            result[2] -= Math.PI;
		        }
		        while (result[1] < -Math.PI) result[1] += 2 * Math.PI;
		        while (result[1] >= Math.PI) result[1] -= 2 * Math.PI;
		        while (result[2] < -Math.PI) result[2] += 2 * Math.PI;
		        while (result[2] >= Math.PI) result[2] -= 2 * Math.PI;
		        return result;
		    };

		    /**
		     * (Property) Array defining a translation forward in z by 1
		     *
		     * @property {array} inFront
		     * @static
		     * @final
		     */
		    Transform.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];

		    /**
		     * (Property) Array defining a translation backwards in z by 1
		     *
		     * @property {array} behind
		     * @static
		     * @final
		     */
		    Transform.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];

		    module.exports = Transform;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: david@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var MultipleTransition = __webpack_require__(26);
		    var TweenTransition = __webpack_require__(27);

		    /**
		     * A state maintainer for a smooth transition between
		     *    numerically-specified states. Example numeric states include floats or
		     *    Transform objects.
		     *
		     * An initial state is set with the constructor or set(startState). A
		     *    corresponding end state and transition are set with set(endState,
		     *    transition). Subsequent calls to set(endState, transition) begin at
		     *    the last state. Calls to get(timestamp) provide the interpolated state
		     *    along the way.
		     *
		     * Note that there is no event loop here - calls to get() are the only way
		     *    to find state projected to the current (or provided) time and are
		     *    the only way to trigger callbacks. Usually this kind of object would
		     *    be part of the render() path of a visible component.
		     *
		     * @class Transitionable
		     * @constructor
		     * @param {number|Array.Number|Object.<number|string, number>} start
		     *    beginning state
		     */
		    function Transitionable(start) {
		        this.currentAction = null;
		        this.actionQueue = [];
		        this.callbackQueue = [];

		        this.state = 0;
		        this.velocity = undefined;
		        this._callback = undefined;
		        this._engineInstance = null;
		        this._currentMethod = null;

		        this.set(start);
		    }

		    var transitionMethods = {};

		    Transitionable.register = function register(methods) {
		        var success = true;
		        for (var method in methods) {
		            if (!Transitionable.registerMethod(method, methods[method]))
		                success = false;
		        }
		        return success;
		    };

		    Transitionable.registerMethod = function registerMethod(name, engineClass) {
		        if (!(name in transitionMethods)) {
		            transitionMethods[name] = engineClass;
		            return true;
		        }
		        else return false;
		    };

		    Transitionable.unregisterMethod = function unregisterMethod(name) {
		        if (name in transitionMethods) {
		            delete transitionMethods[name];
		            return true;
		        }
		        else return false;
		    };

		    function _loadNext() {
		        if (this._callback) {
		            var callback = this._callback;
		            this._callback = undefined;
		            callback();
		        }
		        if (this.actionQueue.length <= 0) {
		            this.set(this.get()); // no update required
		            return;
		        }
		        this.currentAction = this.actionQueue.shift();
		        this._callback = this.callbackQueue.shift();

		        var method = null;
		        var endValue = this.currentAction[0];
		        var transition = this.currentAction[1];
		        if (transition instanceof Object && transition.method) {
		            method = transition.method;
		            if (typeof method === 'string') method = transitionMethods[method];
		        }
		        else {
		            method = TweenTransition;
		        }

		        if (this._currentMethod !== method) {
		            if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
		                this._engineInstance = new method();
		            }
		            else {
		                this._engineInstance = new MultipleTransition(method);
		            }
		            this._currentMethod = method;
		        }

		        this._engineInstance.reset(this.state, this.velocity);
		        if (this.velocity !== undefined) transition.velocity = this.velocity;
		        this._engineInstance.set(endValue, transition, _loadNext.bind(this));
		    }

		    /**
		     * Add transition to end state to the queue of pending transitions. Special
		     *    Use: calling without a transition resets the object to that state with
		     *    no pending actions
		     *
		     * @method set
		     *
		     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endState
		     *    end state to which we interpolate
		     * @param {transition=} transition object of type {duration: number, curve:
		     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
		     *    instantaneous.
		     * @param {function()=} callback Zero-argument function to call on observed
		     *    completion (t=1)
		     */
		    Transitionable.prototype.set = function set(endState, transition, callback) {
		        if (!transition) {
		            this.reset(endState);
		            if (callback) callback();
		            return this;
		        }

		        var action = [endState, transition];
		        this.actionQueue.push(action);
		        this.callbackQueue.push(callback);
		        if (!this.currentAction) _loadNext.call(this);
		        return this;
		    };

		    /**
		     * Cancel all transitions and reset to a stable state
		     *
		     * @method reset
		     *
		     * @param {number|Array.Number|Object.<number, number>} startState
		     *    stable state to set to
		     */
		    Transitionable.prototype.reset = function reset(startState, startVelocity) {
		        this._currentMethod = null;
		        this._engineInstance = null;
		        this._callback = undefined;
		        this.state = startState;
		        this.velocity = startVelocity;
		        this.currentAction = null;
		        this.actionQueue = [];
		        this.callbackQueue = [];
		    };

		    /**
		     * Add delay action to the pending action queue queue.
		     *
		     * @method delay
		     *
		     * @param {number} duration delay time (ms)
		     * @param {function} callback Zero-argument function to call on observed
		     *    completion (t=1)
		     */
		    Transitionable.prototype.delay = function delay(duration, callback) {
		        this.set(this.get(), {duration: duration,
		            curve: function() {
		                return 0;
		            }},
		            callback
		        );
		    };

		    /**
		     * Get interpolated state of current action at provided time. If the last
		     *    action has completed, invoke its callback.
		     *
		     * @method get
		     *
		     * @param {number=} timestamp Evaluate the curve at a normalized version of this
		     *    time. If omitted, use current time. (Unix epoch time)
		     * @return {number|Object.<number|string, number>} beginning state
		     *    interpolated to this point in time.
		     */
		    Transitionable.prototype.get = function get(timestamp) {
		        if (this._engineInstance) {
		            if (this._engineInstance.getVelocity)
		                this.velocity = this._engineInstance.getVelocity();
		            this.state = this._engineInstance.get(timestamp);
		        }
		        return this.state;
		    };

		    /**
		     * Is there at least one action pending completion?
		     *
		     * @method isActive
		     *
		     * @return {boolean}
		     */
		    Transitionable.prototype.isActive = function isActive() {
		        return !!this.currentAction;
		    };

		    /**
		     * Halt transition at current state and erase all pending actions.
		     *
		     * @method halt
		     */
		    Transitionable.prototype.halt = function halt() {
		        return this.set(this.get());
		    };

		    module.exports = Transitionable;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var Entity = __webpack_require__(21);
		    var EventHandler = __webpack_require__(13);
		    var Transform = __webpack_require__(18);

		    var usePrefix = !('transform' in document.documentElement.style);
		    var devicePixelRatio = window.devicePixelRatio || 1;

		    /**
		     * A base class for viewable content and event
		     *   targets inside a Famo.us application, containing a renderable document
		     *   fragment. Like an HTML div, it can accept internal markup,
		     *   properties, classes, and handle events.
		     *
		     * @class ElementOutput
		     * @constructor
		     *
		     * @param {Node} element document parent of this container
		     */
		    function ElementOutput(element) {
		        this._matrix = null;
		        this._opacity = 1;
		        this._origin = null;
		        this._size = null;

		        this._eventOutput = new EventHandler();
		        this._eventOutput.bindThis(this);

		        /** @ignore */
		        this.eventForwarder = function eventForwarder(event) {
		            this._eventOutput.emit(event.type, event);
		        }.bind(this);

		        this.id = Entity.register(this);
		        this._element = null;
		        this._sizeDirty = false;
		        this._originDirty = false;
		        this._transformDirty = false;

		        this._invisible = false;
		        if (element) this.attach(element);
		    }

		    /**
		     * Bind a callback function to an event type handled by this object.
		     *
		     * @method "on"
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {function(string, Object)} fn handler callback
		     * @return {EventHandler} this
		     */
		    ElementOutput.prototype.on = function on(type, fn) {
		        if (this._element) this._element.addEventListener(type, this.eventForwarder);
		        this._eventOutput.on(type, fn);
		    };

		    /**
		     * Unbind an event by type and handler.
		     *   This undoes the work of "on"
		     *
		     * @method removeListener
		     * @param {string} type event type key (for example, 'click')
		     * @param {function(string, Object)} fn handler
		     */
		    ElementOutput.prototype.removeListener = function removeListener(type, fn) {
		        this._eventOutput.removeListener(type, fn);
		    };

		    /**
		     * Trigger an event, sending to all downstream handlers
		     *   listening for provided 'type' key.
		     *
		     * @method emit
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {Object} [event] event data
		     * @return {EventHandler} this
		     */
		    ElementOutput.prototype.emit = function emit(type, event) {
		        if (event && !event.origin) event.origin = this;
		        var handled = this._eventOutput.emit(type, event);
		        if (handled && event && event.stopPropagation) event.stopPropagation();
		        return handled;
		    };

		    /**
		     * Add event handler object to set of downstream handlers.
		     *
		     * @method pipe
		     *
		     * @param {EventHandler} target event handler target object
		     * @return {EventHandler} passed event handler
		     */
		    ElementOutput.prototype.pipe = function pipe(target) {
		        return this._eventOutput.pipe(target);
		    };

		    /**
		     * Remove handler object from set of downstream handlers.
		     *   Undoes work of "pipe"
		     *
		     * @method unpipe
		     *
		     * @param {EventHandler} target target handler object
		     * @return {EventHandler} provided target
		     */
		    ElementOutput.prototype.unpipe = function unpipe(target) {
		        return this._eventOutput.unpipe(target);
		    };

		    /**
		     * Return spec for this surface. Note that for a base surface, this is
		     *    simply an id.
		     *
		     * @method render
		     * @private
		     * @return {Object} render spec for this surface (spec id)
		     */
		    ElementOutput.prototype.render = function render() {
		        return this.id;
		    };

		    //  Attach Famous event handling to document events emanating from target
		    //    document element.  This occurs just after attachment to the document.
		    //    Calling this enables methods like #on and #pipe.
		    function _addEventListeners(target) {
		        for (var i in this._eventOutput.listeners) {
		            target.addEventListener(i, this.eventForwarder);
		        }
		    }

		    //  Detach Famous event handling from document events emanating from target
		    //  document element.  This occurs just before detach from the document.
		    function _removeEventListeners(target) {
		        for (var i in this._eventOutput.listeners) {
		            target.removeEventListener(i, this.eventForwarder);
		        }
		    }

		    /**
		     * Return a Matrix's webkit css representation to be used with the
		     *    CSS3 -webkit-transform style.
		     *    Example: -webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
		     *
		     * @method _formatCSSTransform
		     * @private
		     * @param {FamousMatrix} m matrix
		     * @return {string} matrix3d CSS style representation of the transform
		     */
		    function _formatCSSTransform(m) {
		        m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
		        m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;

		        var result = 'matrix3d(';
		        for (var i = 0; i < 15; i++) {
		            result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
		        }
		        result += m[15] + ')';
		        return result;
		    }

		    /**
		     * Directly apply given FamousMatrix to the document element as the
		     *   appropriate webkit CSS style.
		     *
		     * @method setMatrix
		     *
		     * @static
		     * @private
		     * @param {Element} element document element
		     * @param {FamousMatrix} matrix
		     */

		    var _setMatrix;
		    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
		        _setMatrix = function(element, matrix) {
		            element.style.zIndex = (matrix[14] * 1000000) | 0;    // fix for Firefox z-buffer issues
		            element.style.transform = _formatCSSTransform(matrix);
		        };
		    }
		    else if (usePrefix) {
		        _setMatrix = function(element, matrix) {
		            element.style.webkitTransform = _formatCSSTransform(matrix);
		        };
		    }
		    else {
		        _setMatrix = function(element, matrix) {
		            element.style.transform = _formatCSSTransform(matrix);
		        };
		    }

		    // format origin as CSS percentage string
		    function _formatCSSOrigin(origin) {
		        return (100 * origin[0]) + '% ' + (100 * origin[1]) + '%';
		    }

		    // Directly apply given origin coordinates to the document element as the
		    // appropriate webkit CSS style.
		    var _setOrigin = usePrefix ? function(element, origin) {
		        element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
		    } : function(element, origin) {
		        element.style.transformOrigin = _formatCSSOrigin(origin);
		    };

		    // Shrink given document element until it is effectively invisible.
		    var _setInvisible = usePrefix ? function(element) {
		        element.style.webkitTransform = 'scale3d(0.0001,0.0001,0.0001)';
		        element.style.opacity = 0;
		    } : function(element) {
		        element.style.transform = 'scale3d(0.0001,0.0001,0.0001)';
		        element.style.opacity = 0;
		    };

		    function _xyNotEquals(a, b) {
		        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
		    }

		    /**
		     * Apply changes from this component to the corresponding document element.
		     * This includes changes to classes, styles, size, content, opacity, origin,
		     * and matrix transforms.
		     *
		     * @private
		     * @method commit
		     * @param {Context} context commit context
		     */
		    ElementOutput.prototype.commit = function commit(context) {
		        var target = this._element;
		        if (!target) return;

		        var matrix = context.transform;
		        var opacity = context.opacity;
		        var origin = context.origin;
		        var size = context.size;

		        if (!matrix && this._matrix) {
		            this._matrix = null;
		            this._opacity = 0;
		            _setInvisible(target);
		            return;
		        }

		        if (_xyNotEquals(this._origin, origin)) this._originDirty = true;
		        if (Transform.notEquals(this._matrix, matrix)) this._transformDirty = true;

		        if (this._invisible) {
		            this._invisible = false;
		            this._element.style.display = '';
		        }

		        if (this._opacity !== opacity) {
		            this._opacity = opacity;
		            target.style.opacity = (opacity >= 1) ? '0.999999' : opacity;
		        }

		        if (this._transformDirty || this._originDirty || this._sizeDirty) {
		            if (this._sizeDirty) this._sizeDirty = false;

		            if (this._originDirty) {
		                if (origin) {
		                    if (!this._origin) this._origin = [0, 0];
		                    this._origin[0] = origin[0];
		                    this._origin[1] = origin[1];
		                }
		                else this._origin = null;
		                _setOrigin(target, this._origin);
		                this._originDirty = false;
		            }

		            if (!matrix) matrix = Transform.identity;
		            this._matrix = matrix;
		            var aaMatrix = this._size ? Transform.thenMove(matrix, [-this._size[0]*origin[0], -this._size[1]*origin[1], 0]) : matrix;
		            _setMatrix(target, aaMatrix);
		            this._transformDirty = false;
		        }
		    };

		    ElementOutput.prototype.cleanup = function cleanup() {
		        if (this._element) {
		            this._invisible = true;
		            this._element.style.display = 'none';
		        }
		    };

		    /**
		     * Place the document element that this component manages into the document.
		     *
		     * @private
		     * @method attach
		     * @param {Node} target document parent of this container
		     */
		    ElementOutput.prototype.attach = function attach(target) {
		        this._element = target;
		        _addEventListeners.call(this, target);
		    };

		    /**
		     * Remove any contained document content associated with this surface
		     *   from the actual document.
		     *
		     * @private
		     * @method detach
		     */
		    ElementOutput.prototype.detach = function detach() {
		        var target = this._element;
		        if (target) {
		            _removeEventListeners.call(this, target);
		            if (this._invisible) {
		                this._invisible = false;
		                this._element.style.display = '';
		            }
		        }
		        this._element = null;
		        return target;
		    };

		    module.exports = ElementOutput;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    /**
		     * A singleton that maintains a global registry of Surfaces.
		     *   Private.
		     *
		     * @private
		     * @static
		     * @class Entity
		     */

		    var entities = [];

		    /**
		     * Get entity from global index.
		     *
		     * @private
		     * @method get
		     * @param {Number} id entity registration id
		     * @return {Surface} entity in the global index
		     */
		    function get(id) {
		        return entities[id];
		    }

		    /**
		     * Overwrite entity in the global index
		     *
		     * @private
		     * @method set
		     * @param {Number} id entity registration id
		     * @param {Surface} entity to add to the global index
		     */
		    function set(id, entity) {
		        entities[id] = entity;
		    }

		    /**
		     * Add entity to global index
		     *
		     * @private
		     * @method register
		     * @param {Surface} entity to add to global index
		     * @return {Number} new id
		     */
		    function register(entity) {
		        var id = entities.length;
		        set(id, entity);
		        return id;
		    }

		    /**
		     * Remove entity from global index
		     *
		     * @private
		     * @method unregister
		     * @param {Number} id entity registration id
		     */
		    function unregister(id) {
		        set(id, null);
		    }

		    module.exports = {
		        register: register,
		        unregister: unregister,
		        get: get,
		        set: set
		    };
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var Transform = __webpack_require__(18);

		    /**
		     *
		     * This object translates the rendering instructions ("render specs")
		     *   that renderable components generate into document update
		     *   instructions ("update specs").  Private.
		     *
		     * @private
		     * @class SpecParser
		     * @constructor
		     */
		    function SpecParser() {
		        this.result = {};
		    }
		    SpecParser._instance = new SpecParser();

		    /**
		     * Convert a render spec coming from the context's render chain to an
		     *    update spec for the update chain. This is the only major entry point
		     *    for a consumer of this class.
		     *
		     * @method parse
		     * @static
		     * @private
		     *
		     * @param {renderSpec} spec input render spec
		     * @param {Object} context context to do the parse in
		     * @return {Object} the resulting update spec (if no callback
		     *   specified, else none)
		     */
		    SpecParser.parse = function parse(spec, context) {
		        return SpecParser._instance.parse(spec, context);
		    };

		    /**
		     * Convert a renderSpec coming from the context's render chain to an update
		     *    spec for the update chain. This is the only major entrypoint for a
		     *    consumer of this class.
		     *
		     * @method parse
		     *
		     * @private
		     * @param {renderSpec} spec input render spec
		     * @param {Context} context
		     * @return {updateSpec} the resulting update spec
		     */
		    SpecParser.prototype.parse = function parse(spec, context) {
		        this.reset();
		        this._parseSpec(spec, context, Transform.identity);
		        return this.result;
		    };

		    /**
		     * Prepare SpecParser for re-use (or first use) by setting internal state
		     *  to blank.
		     *
		     * @private
		     * @method reset
		     */
		    SpecParser.prototype.reset = function reset() {
		        this.result = {};
		    };

		    // Multiply matrix M by vector v
		    function _vecInContext(v, m) {
		        return [
		            v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
		            v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
		            v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
		        ];
		    }

		    var _zeroZero = [0, 0];

		    // From the provided renderSpec tree, recursively compose opacities,
		    //    origins, transforms, and sizes corresponding to each surface id from
		    //    the provided renderSpec tree structure. On completion, those
		    //    properties of 'this' object should be ready to use to build an
		    //    updateSpec.
		    SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
		        var id;
		        var target;
		        var transform;
		        var opacity;
		        var origin;
		        var align;
		        var size;

		        if (typeof spec === 'number') {
		            id = spec;
		            transform = parentContext.transform;
		            align = parentContext.align || _zeroZero;
		            if (parentContext.size && align && (align[0] || align[1])) {
		                var alignAdjust = [align[0] * parentContext.size[0], align[1] * parentContext.size[1], 0];
		                transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
		            }
		            this.result[id] = {
		                transform: transform,
		                opacity: parentContext.opacity,
		                origin: parentContext.origin || _zeroZero,
		                align: parentContext.align || _zeroZero,
		                size: parentContext.size
		            };
		        }
		        else if (!spec) { // placed here so 0 will be cached earlier
		            return;
		        }
		        else if (spec instanceof Array) {
		            for (var i = 0; i < spec.length; i++) {
		                this._parseSpec(spec[i], parentContext, sizeContext);
		            }
		        }
		        else {
		            target = spec.target;
		            transform = parentContext.transform;
		            opacity = parentContext.opacity;
		            origin = parentContext.origin;
		            align = parentContext.align;
		            size = parentContext.size;
		            var nextSizeContext = sizeContext;

		            if (spec.opacity !== undefined) opacity = parentContext.opacity * spec.opacity;
		            if (spec.transform) transform = Transform.multiply(parentContext.transform, spec.transform);
		            if (spec.origin) {
		                origin = spec.origin;
		                nextSizeContext = parentContext.transform;
		            }
		            if (spec.align) align = spec.align;

		            if (spec.size || spec.proportions) {
		                var parentSize = size;
		                size = [size[0], size[1]];

		                if (spec.size) {
		                    if (spec.size[0] !== undefined) size[0] = spec.size[0];
		                    if (spec.size[1] !== undefined) size[1] = spec.size[1];
		                }

		                if (spec.proportions) {
		                    if (spec.proportions[0] !== undefined) size[0] = size[0] * spec.proportions[0];
		                    if (spec.proportions[1] !== undefined) size[1] = size[1] * spec.proportions[1];
		                }

		                if (parentSize) {
		                    if (align && (align[0] || align[1])) transform = Transform.thenMove(transform, _vecInContext([align[0] * parentSize[0], align[1] * parentSize[1], 0], sizeContext));
		                    if (origin && (origin[0] || origin[1])) transform = Transform.moveThen([-origin[0] * size[0], -origin[1] * size[1], 0], transform);
		                }

		                nextSizeContext = parentContext.transform;
		                origin = null;
		                align = null;
		            }

		            this._parseSpec(target, {
		                transform: transform,
		                opacity: opacity,
		                origin: origin,
		                align: align,
		                size: size
		            }, nextSizeContext);
		        }
		    };

		    module.exports = SpecParser;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    /**
		     * EventEmitter represents a channel for events.
		     *
		     * @class EventEmitter
		     * @constructor
		     */
		    function EventEmitter() {
		        this.listeners = {};
		        this._owner = this;
		    }

		    /**
		     * Trigger an event, sending to all downstream handlers
		     *   listening for provided 'type' key.
		     *
		     * @method emit
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {Object} event event data
		     * @return {EventHandler} this
		     */
		    EventEmitter.prototype.emit = function emit(type, event) {
		        var handlers = this.listeners[type];
		        if (handlers) {
		            for (var i = 0; i < handlers.length; i++) {
		                handlers[i].call(this._owner, event);
		            }
		        }
		        return this;
		    };

		    /**
		     * Bind a callback function to an event type handled by this object.
		     *
		     * @method "on"
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {function(string, Object)} handler callback
		     * @return {EventHandler} this
		     */
		   EventEmitter.prototype.on = function on(type, handler) {
		        if (!(type in this.listeners)) this.listeners[type] = [];
		        var index = this.listeners[type].indexOf(handler);
		        if (index < 0) this.listeners[type].push(handler);
		        return this;
		    };

		    /**
		     * Alias for "on".
		     * @method addListener
		     */
		    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

		   /**
		     * Unbind an event by type and handler.
		     *   This undoes the work of "on".
		     *
		     * @method removeListener
		     *
		     * @param {string} type event type key (for example, 'click')
		     * @param {function} handler function object to remove
		     * @return {EventEmitter} this
		     */
		    EventEmitter.prototype.removeListener = function removeListener(type, handler) {
		        var listener = this.listeners[type];
		        if (listener !== undefined) {
		            var index = listener.indexOf(handler);
		            if (index >= 0) listener.splice(index, 1);
		        }
		        return this;
		    };

		    /**
		     * Call event handlers with this set to owner.
		     *
		     * @method bindThis
		     *
		     * @param {Object} owner object this EventEmitter belongs to
		     */
		    EventEmitter.prototype.bindThis = function bindThis(owner) {
		        this._owner = owner;
		    };

		    module.exports = EventEmitter;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    /**
		     * This namespace holds standalone functionality.
		     *  Currently includes name mapping for transition curves,
		     *  name mapping for origin pairs, and the after() function.
		     *
		     * @class Utility
		     * @static
		     */
		    var Utility = {};

		    /**
		     * Table of direction array positions
		     *
		     * @property {object} Direction
		     * @final
		     */
		    Utility.Direction = {
		        X: 0,
		        Y: 1,
		        Z: 2
		    };

		    /**
		     * Return wrapper around callback function. Once the wrapper is called N
		     *   times, invoke the callback function. Arguments and scope preserved.
		     *
		     * @method after
		     *
		     * @param {number} count number of calls before callback function invoked
		     * @param {Function} callback wrapped callback function
		     *
		     * @return {function} wrapped callback with coundown feature
		     */
		    Utility.after = function after(count, callback) {
		        var counter = count;
		        return function() {
		            counter--;
		            if (counter === 0) callback.apply(this, arguments);
		        };
		    };

		    /**
		     * Load a URL and return its contents in a callback
		     *
		     * @method loadURL
		     *
		     * @param {string} url URL of object
		     * @param {function} callback callback to dispatch with content
		     */
		    Utility.loadURL = function loadURL(url, callback) {
		        var xhr = new XMLHttpRequest();
		        xhr.onreadystatechange = function onreadystatechange() {
		            if (this.readyState === 4) {
		                if (callback) callback(this.responseText);
		            }
		        };
		        xhr.open('GET', url);
		        xhr.send();
		    };

		    /**
		     * Create a document fragment from a string of HTML
		     *
		     * @method createDocumentFragmentFromHTML
		     *
		     * @param {string} html HTML to convert to DocumentFragment
		     *
		     * @return {DocumentFragment} DocumentFragment representing input HTML
		     */
		    Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
		        var element = document.createElement('div');
		        element.innerHTML = html;
		        var result = document.createDocumentFragment();
		        while (element.hasChildNodes()) result.appendChild(element.firstChild);
		        return result;
		    };

		    /*
		     *  Deep clone an object.
		     *  @param b {Object} Object to clone
		     *  @return a {Object} Cloned object.
		     */
		    Utility.clone = function clone(b) {
		        var a;
		        if (typeof b === 'object') {
		            a = (b instanceof Array) ? [] : {};
		            for (var key in b) {
		                if (typeof b[key] === 'object' && b[key] !== null) {
		                    if (b[key] instanceof Array) {
		                        a[key] = new Array(b[key].length);
		                        for (var i = 0; i < b[key].length; i++) {
		                            a[key][i] = Utility.clone(b[key][i]);
		                        }
		                    }
		                    else {
		                      a[key] = Utility.clone(b[key]);
		                    }
		                }
		                else {
		                    a[key] = b[key];
		                }
		            }
		        }
		        else {
		            a = b;
		        }
		        return a;
		    };

		    module.exports = Utility;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: mark@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

		    /**
		     * Internal helper object to Context that handles the process of
		     *   creating and allocating DOM elements within a managed div.
		     *   Private.
		     *
		     * @class ElementAllocator
		     * @constructor
		     * @private
		     * @param {Node} container document element in which Famo.us content will be inserted
		     */
		    function ElementAllocator(container) {
		        if (!container) container = document.createDocumentFragment();
		        this.container = container;
		        this.detachedNodes = {};
		        this.nodeCount = 0;
		    }

		    /**
		     * Move the document elements from their original container to a new one.
		     *
		     * @private
		     * @method migrate
		     *
		     * @param {Node} container document element to which Famo.us content will be migrated
		     */
		    ElementAllocator.prototype.migrate = function migrate(container) {
		        var oldContainer = this.container;
		        if (container === oldContainer) return;

		        if (oldContainer instanceof DocumentFragment) {
		            container.appendChild(oldContainer);
		        }
		        else {
		            while (oldContainer.hasChildNodes()) {
		                container.appendChild(oldContainer.removeChild(oldContainer.firstChild));
		            }
		        }

		        this.container = container;
		    };

		    /**
		     * Allocate an element of specified type from the pool.
		     *
		     * @private
		     * @method allocate
		     *
		     * @param {string} type type of element, e.g. 'div'
		     * @return {Node} allocated document element
		     */
		    ElementAllocator.prototype.allocate = function allocate(type) {
		        type = type.toLowerCase();
		        if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
		        var nodeStore = this.detachedNodes[type];
		        var result;
		        if (nodeStore.length > 0) {
		            result = nodeStore.pop();
		        }
		        else {
		            result = document.createElement(type);
		            this.container.appendChild(result);
		        }
		        this.nodeCount++;
		        return result;
		    };

		    /**
		     * De-allocate an element of specified type to the pool.
		     *
		     * @private
		     * @method deallocate
		     *
		     * @param {Node} element document element to deallocate
		     */
		    ElementAllocator.prototype.deallocate = function deallocate(element) {
		        var nodeType = element.nodeName.toLowerCase();
		        var nodeStore = this.detachedNodes[nodeType];
		        nodeStore.push(element);
		        this.nodeCount--;
		    };

		    /**
		     * Get count of total allocated nodes in the document.
		     *
		     * @private
		     * @method getNodeCount
		     *
		     * @return {Number} total node count
		     */
		    ElementAllocator.prototype.getNodeCount = function getNodeCount() {
		        return this.nodeCount;
		    };

		    module.exports = ElementAllocator;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: david@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
		    var Utility = __webpack_require__(24);

		    /**
		     * Transition meta-method to support transitioning multiple
		     *   values with scalar-only methods.
		     *
		     *
		     * @class MultipleTransition
		     * @constructor
		     *
		     * @param {Object} method Transionable class to multiplex
		     */
		    function MultipleTransition(method) {
		        this.method = method;
		        this._instances = [];
		        this.state = [];
		    }

		    MultipleTransition.SUPPORTS_MULTIPLE = true;

		    /**
		     * Get the state of each transition.
		     *
		     * @method get
		     *
		     * @return state {Number|Array} state array
		     */
		    MultipleTransition.prototype.get = function get() {
		        for (var i = 0; i < this._instances.length; i++) {
		            this.state[i] = this._instances[i].get();
		        }
		        return this.state;
		    };

		    /**
		     * Set the end states with a shared transition, with optional callback.
		     *
		     * @method set
		     *
		     * @param {Number|Array} endState Final State.  Use a multi-element argument for multiple transitions.
		     * @param {Object} transition Transition definition, shared among all instances
		     * @param {Function} callback called when all endStates have been reached.
		     */
		    MultipleTransition.prototype.set = function set(endState, transition, callback) {
		        var _allCallback = Utility.after(endState.length, callback);
		        for (var i = 0; i < endState.length; i++) {
		            if (!this._instances[i]) this._instances[i] = new (this.method)();
		            this._instances[i].set(endState[i], transition, _allCallback);
		        }
		    };

		    /**
		     * Reset all transitions to start state.
		     *
		     * @method reset
		     *
		     * @param  {Number|Array} startState Start state
		     */
		    MultipleTransition.prototype.reset = function reset(startState) {
		        for (var i = 0; i < startState.length; i++) {
		            if (!this._instances[i]) this._instances[i] = new (this.method)();
		            this._instances[i].reset(startState[i]);
		        }
		    };

		    module.exports = MultipleTransition;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
		 * License, v. 2.0. If a copy of the MPL was not distributed with this
		 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
		 *
		 * Owner: david@famo.us
		 * @license MPL 2.0
		 * @copyright Famous Industries, Inc. 2014
		 */

		!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

		    /**
		     *
		     * A state maintainer for a smooth transition between
		     *    numerically-specified states.  Example numeric states include floats or
		     *    Transfornm objects.
		     *
		     *    An initial state is set with the constructor or set(startValue). A
		     *    corresponding end state and transition are set with set(endValue,
		     *    transition). Subsequent calls to set(endValue, transition) begin at
		     *    the last state. Calls to get(timestamp) provide the _interpolated state
		     *    along the way.
		     *
		     *   Note that there is no event loop here - calls to get() are the only way
		     *    to find out state projected to the current (or provided) time and are
		     *    the only way to trigger callbacks. Usually this kind of object would
		     *    be part of the render() path of a visible component.
		     *
		     * @class TweenTransition
		     * @constructor
		     *
		     * @param {Object} options TODO
		     *    beginning state
		     */
		    function TweenTransition(options) {
		        this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
		        if (options) this.setOptions(options);

		        this._startTime = 0;
		        this._startValue = 0;
		        this._updateTime = 0;
		        this._endValue = 0;
		        this._curve = undefined;
		        this._duration = 0;
		        this._active = false;
		        this._callback = undefined;
		        this.state = 0;
		        this.velocity = undefined;
		    }

		    /**
		     * Transition curves mapping independent variable t from domain [0,1] to a
		     *    range within [0,1]. Includes functions 'linear', 'easeIn', 'easeOut',
		     *    'easeInOut', 'easeOutBounce', 'spring'.
		     *
		     * @property {object} Curve
		     * @final
		     */
		    TweenTransition.Curves = {
		        linear: function(t) {
		            return t;
		        },
		        easeIn: function(t) {
		            return t*t;
		        },
		        easeOut: function(t) {
		            return t*(2-t);
		        },
		        easeInOut: function(t) {
		            if (t <= 0.5) return 2*t*t;
		            else return -2*t*t + 4*t - 1;
		        },
		        easeOutBounce: function(t) {
		            return t*(3 - 2*t);
		        },
		        spring: function(t) {
		            return (1 - t) * Math.sin(6 * Math.PI * t) + t;
		        }
		    };

		    TweenTransition.SUPPORTS_MULTIPLE = true;
		    TweenTransition.DEFAULT_OPTIONS = {
		        curve: TweenTransition.Curves.linear,
		        duration: 500,
		        speed: 0 /* considered only if positive */
		    };

		    var registeredCurves = {};

		    /**
		     * Add "unit" curve to internal dictionary of registered curves.
		     *
		     * @method registerCurve
		     *
		     * @static
		     *
		     * @param {string} curveName dictionary key
		     * @param {unitCurve} curve function of one numeric variable mapping [0,1]
		     *    to range inside [0,1]
		     * @return {boolean} false if key is taken, else true
		     */
		    TweenTransition.registerCurve = function registerCurve(curveName, curve) {
		        if (!registeredCurves[curveName]) {
		            registeredCurves[curveName] = curve;
		            return true;
		        }
		        else {
		            return false;
		        }
		    };

		    /**
		     * Remove object with key "curveName" from internal dictionary of registered
		     *    curves.
		     *
		     * @method unregisterCurve
		     *
		     * @static
		     *
		     * @param {string} curveName dictionary key
		     * @return {boolean} false if key has no dictionary value
		     */
		    TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
		        if (registeredCurves[curveName]) {
		            delete registeredCurves[curveName];
		            return true;
		        }
		        else {
		            return false;
		        }
		    };

		    /**
		     * Retrieve function with key "curveName" from internal dictionary of
		     *    registered curves. Default curves are defined in the
		     *    TweenTransition.Curves array, where the values represent
		     *    unitCurve functions.
		     *
		     * @method getCurve
		     *
		     * @static
		     *
		     * @param {string} curveName dictionary key
		     * @return {unitCurve} curve function of one numeric variable mapping [0,1]
		     *    to range inside [0,1]
		     */
		    TweenTransition.getCurve = function getCurve(curveName) {
		        var curve = registeredCurves[curveName];
		        if (curve !== undefined) return curve;
		        else throw new Error('curve not registered');
		    };

		    /**
		     * Retrieve all available curves.
		     *
		     * @method getCurves
		     *
		     * @static
		     *
		     * @return {object} curve functions of one numeric variable mapping [0,1]
		     *    to range inside [0,1]
		     */
		    TweenTransition.getCurves = function getCurves() {
		        return registeredCurves;
		    };

		     // Interpolate: If a linear function f(0) = a, f(1) = b, then return f(t)
		    function _interpolate(a, b, t) {
		        return ((1 - t) * a) + (t * b);
		    }

		    function _clone(obj) {
		        if (obj instanceof Object) {
		            if (obj instanceof Array) return obj.slice(0);
		            else return Object.create(obj);
		        }
		        else return obj;
		    }

		    // Fill in missing properties in "transition" with those in defaultTransition, and
		    //   convert internal named curve to function object, returning as new
		    //   object.
		    function _normalize(transition, defaultTransition) {
		        var result = {curve: defaultTransition.curve};
		        if (defaultTransition.duration) result.duration = defaultTransition.duration;
		        if (defaultTransition.speed) result.speed = defaultTransition.speed;
		        if (transition instanceof Object) {
		            if (transition.duration !== undefined) result.duration = transition.duration;
		            if (transition.curve) result.curve = transition.curve;
		            if (transition.speed) result.speed = transition.speed;
		        }
		        if (typeof result.curve === 'string') result.curve = TweenTransition.getCurve(result.curve);
		        return result;
		    }

		    /**
		     * Set internal options, overriding any default options.
		     *
		     * @method setOptions
		     *
		     *
		     * @param {Object} options options object
		     * @param {Object} [options.curve] function mapping [0,1] to [0,1] or identifier
		     * @param {Number} [options.duration] duration in ms
		     * @param {Number} [options.speed] speed in pixels per ms
		     */
		    TweenTransition.prototype.setOptions = function setOptions(options) {
		        if (options.curve !== undefined) this.options.curve = options.curve;
		        if (options.duration !== undefined) this.options.duration = options.duration;
		        if (options.speed !== undefined) this.options.speed = options.speed;
		    };

		    /**
		     * Add transition to end state to the queue of pending transitions. Special
		     *    Use: calling without a transition resets the object to that state with
		     *    no pending actions
		     *
		     * @method set
		     *
		     *
		     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endValue
		     *    end state to which we _interpolate
		     * @param {transition=} transition object of type {duration: number, curve:
		     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
		     *    instantaneous.
		     * @param {function()=} callback Zero-argument function to call on observed
		     *    completion (t=1)
		     */
		    TweenTransition.prototype.set = function set(endValue, transition, callback) {
		        if (!transition) {
		            this.reset(endValue);
		            if (callback) callback();
		            return;
		        }

		        this._startValue = _clone(this.get());
		        transition = _normalize(transition, this.options);
		        if (transition.speed) {
		            var startValue = this._startValue;
		            if (startValue instanceof Object) {
		                var variance = 0;
		                for (var i in startValue) variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
		                transition.duration = Math.sqrt(variance) / transition.speed;
		            }
		            else {
		                transition.duration = Math.abs(endValue - startValue) / transition.speed;
		            }
		        }

		        this._startTime = Date.now();
		        this._endValue = _clone(endValue);
		        this._startVelocity = _clone(transition.velocity);
		        this._duration = transition.duration;
		        this._curve = transition.curve;
		        this._active = true;
		        this._callback = callback;
		    };

		    /**
		     * Cancel all transitions and reset to a stable state
		     *
		     * @method reset
		     *
		     * @param {number|Array.Number|Object.<number, number>} startValue
		     *    starting state
		     * @param {number} startVelocity
		     *    starting velocity
		     */
		    TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
		        if (this._callback) {
		            var callback = this._callback;
		            this._callback = undefined;
		            callback();
		        }
		        this.state = _clone(startValue);
		        this.velocity = _clone(startVelocity);
		        this._startTime = 0;
		        this._duration = 0;
		        this._updateTime = 0;
		        this._startValue = this.state;
		        this._startVelocity = this.velocity;
		        this._endValue = this.state;
		        this._active = false;
		    };

		    /**
		     * Get current velocity
		     *
		     * @method getVelocity
		     *
		     * @returns {Number} velocity
		     */
		    TweenTransition.prototype.getVelocity = function getVelocity() {
		        return this.velocity;
		    };

		    /**
		     * Get interpolated state of current action at provided time. If the last
		     *    action has completed, invoke its callback.
		     *
		     * @method get
		     *
		     *
		     * @param {number=} timestamp Evaluate the curve at a normalized version of this
		     *    time. If omitted, use current time. (Unix epoch time)
		     * @return {number|Object.<number|string, number>} beginning state
		     *    _interpolated to this point in time.
		     */
		    TweenTransition.prototype.get = function get(timestamp) {
		        this.update(timestamp);
		        return this.state;
		    };

		    function _calculateVelocity(current, start, curve, duration, t) {
		        var velocity;
		        var eps = 1e-7;
		        var speed = (curve(t) - curve(t - eps)) / eps;
		        if (current instanceof Array) {
		            velocity = [];
		            for (var i = 0; i < current.length; i++){
		                if (typeof current[i] === 'number')
		                    velocity[i] = speed * (current[i] - start[i]) / duration;
		                else
		                    velocity[i] = 0;
		            }

		        }
		        else velocity = speed * (current - start) / duration;
		        return velocity;
		    }

		    function _calculateState(start, end, t) {
		        var state;
		        if (start instanceof Array) {
		            state = [];
		            for (var i = 0; i < start.length; i++) {
		                if (typeof start[i] === 'number')
		                    state[i] = _interpolate(start[i], end[i], t);
		                else
		                    state[i] = start[i];
		            }
		        }
		        else state = _interpolate(start, end, t);
		        return state;
		    }

		    /**
		     * Update internal state to the provided timestamp. This may invoke the last
		     *    callback and begin a new action.
		     *
		     * @method update
		     *
		     *
		     * @param {number=} timestamp Evaluate the curve at a normalized version of this
		     *    time. If omitted, use current time. (Unix epoch time)
		     */
		    TweenTransition.prototype.update = function update(timestamp) {
		        if (!this._active) {
		            if (this._callback) {
		                var callback = this._callback;
		                this._callback = undefined;
		                callback();
		            }
		            return;
		        }

		        if (!timestamp) timestamp = Date.now();
		        if (this._updateTime >= timestamp) return;
		        this._updateTime = timestamp;

		        var timeSinceStart = timestamp - this._startTime;
		        if (timeSinceStart >= this._duration) {
		            this.state = this._endValue;
		            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
		            this._active = false;
		        }
		        else if (timeSinceStart < 0) {
		            this.state = this._startValue;
		            this.velocity = this._startVelocity;
		        }
		        else {
		            var t = timeSinceStart / this._duration;
		            this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
		            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
		        }
		    };

		    /**
		     * Is there at least one action pending completion?
		     *
		     * @method isActive
		     *
		     *
		     * @return {boolean}
		     */
		    TweenTransition.prototype.isActive = function isActive() {
		        return this._active;
		    };

		    /**
		     * Halt transition at current state and erase all pending actions.
		     *
		     * @method halt
		     *
		     */
		    TweenTransition.prototype.halt = function halt() {
		        this.reset(this.get());
		    };

		    // Register all the default curves
		    TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
		    TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
		    TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
		    TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
		    TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
		    TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);

		    TweenTransition.customCurve = function customCurve(v1, v2) {
		        v1 = v1 || 0; v2 = v2 || 0;
		        return function(t) {
		            return v1*t + (-2*v1 - v2 + 3)*t*t + (v1 + v2 - 2)*t*t*t;
		        };
		    };

		    module.exports = TweenTransition;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	/***/ }
	/******/ ])

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = function (child, parent) {
	  if (typeof parent !== "function" && parent !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
	  }
	  child.prototype = Object.create(parent && parent.prototype, {
	    constructor: {
	      value: child,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (parent) child.__proto__ = parent;
	};

	var _interopRequire = function (obj) {
	  return obj && (obj["default"] || obj);
	};

	var _core = _interopRequire(__webpack_require__(9));

	/*
	 * LICENSE
	 *
	 * This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 */

	var Surface = _interopRequire(__webpack_require__(10));

	var Molecule = _interopRequire(__webpack_require__(5));

	var Plane = (function () {
	  var _Molecule = Molecule;
	  var Plane = function Plane(initialOptions) {
	    _Molecule.call(this, initialOptions);

	    this.surface = new Surface(this.options);
	    this.add(this.surface);
	    this.surface.pipe(this._.handler);
	  };

	  _inherits(Plane, _Molecule);

	  // Surface interface
	  Plane.prototype.getContent = function () {
	    var args = Array.prototype.splice.call(arguments, 0);
	    return this.surface.getContent.apply(this.surface, args);
	  };

	  Plane.prototype.setContent = function () {
	    var args = Array.prototype.splice.call(arguments, 0);
	    return this.surface.setContent.apply(this.surface, args);
	  };

	  return Plane;
	})();

	exports.Plane = Plane;
	exports["default"] = Plane;
	module.exports = _core.Object.assign(exports["default"], exports);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9QbGFuZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVNPLE9BQU8sMkJBQU0scUJBQXFCOztJQUVsQyxRQUFRLDJCQUFNLFlBQVk7O0lBRXBCLEtBQUs7a0JBQVMsUUFBUTtNQUF0QixLQUFLLEdBQ0gsU0FERixLQUFLLENBQ0YsY0FBYyxFQUFFO0FBQ3hCLHlCQUFNLGNBQWMsQ0FBQyxDQUFDOztBQUV0QixRQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxRQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixRQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3JDOztZQVBRLEtBQUs7OztBQUFMLE9BQUssV0FVZCxVQUFVLEdBQUEsWUFBRztBQUNULFFBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsV0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztHQUM1RDs7QUFiUSxPQUFLLFdBY2QsVUFBVSxHQUFBLFlBQUc7QUFDVCxRQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDNUQ7O1NBakJRLEtBQUs7OztRQUFMLEtBQUssR0FBTCxLQUFLO3FCQW1CSCxLQUFLIiwiZmlsZSI6InNyYy9QbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMSUNFTlNFXG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqXG4gKi9cblxuaW1wb3J0IFN1cmZhY2UgZnJvbSAnZmFtb3VzL2NvcmUvU3VyZmFjZSc7XG5cbmltcG9ydCBNb2xlY3VsZSBmcm9tICcuL01vbGVjdWxlJztcblxuZXhwb3J0IGNsYXNzIFBsYW5lIGV4dGVuZHMgTW9sZWN1bGUge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxPcHRpb25zKTtcblxuICAgICAgICB0aGlzLnN1cmZhY2UgPSBuZXcgU3VyZmFjZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnN1cmZhY2UpO1xuICAgICAgICB0aGlzLnN1cmZhY2UucGlwZSh0aGlzLl8uaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gU3VyZmFjZSBpbnRlcmZhY2VcbiAgICBnZXRDb250ZW50KCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5zdXJmYWNlLmdldENvbnRlbnQuYXBwbHkodGhpcy5zdXJmYWNlLCBhcmdzKTtcbiAgICB9XG4gICAgc2V0Q29udGVudCgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VyZmFjZS5zZXRDb250ZW50LmFwcGx5KHRoaXMuc3VyZmFjZSwgYXJncyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGxhbmU7XG4iXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) {
	  return obj && (obj["default"] || obj);
	};

	var _core = _interopRequire(__webpack_require__(9));

	exports.contextWithPerspective = contextWithPerspective;
	/*
	 * LICENSE
	 *
	 * This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 */

	var Engine = _interopRequire(__webpack_require__(11));

	function contextWithPerspective(perspective) {
	  var context = Engine.createContext();
	  context.setPerspective(perspective);
	  return context;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQVdnQixzQkFBc0IsR0FBdEIsc0JBQXNCOzs7Ozs7Ozs7O0lBRi9CLE1BQU0sMkJBQU0sb0JBQW9COztBQUVoQyxTQUFTLHNCQUFzQixDQUFDLFdBQVcsRUFBRTtBQUNoRCxNQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDckMsU0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxTQUFPLE9BQU8sQ0FBQztDQUNsQiIsImZpbGUiOiJzcmMvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTElDRU5TRVxuICpcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKlxuICovXG5cbmltcG9ydCBFbmdpbmUgZnJvbSAnZmFtb3VzL2NvcmUvRW5naW5lJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHRXaXRoUGVyc3BlY3RpdmUocGVyc3BlY3RpdmUpIHtcbiAgICB2YXIgY29udGV4dCA9IEVuZ2luZS5jcmVhdGVDb250ZXh0KCk7XG4gICAgY29udGV4dC5zZXRQZXJzcGVjdGl2ZShwZXJzcGVjdGl2ZSk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _prototypeProperties = function (child, staticProps, instanceProps) {
	  if (staticProps) Object.defineProperties(child, staticProps);
	  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
	};

	var _inherits = function (child, parent) {
	  if (typeof parent !== "function" && parent !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
	  }
	  child.prototype = Object.create(parent && parent.prototype, {
	    constructor: {
	      value: child,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (parent) child.__proto__ = parent;
	};

	var _interopRequire = function (obj) {
	  return obj && (obj["default"] || obj);
	};

	var _core = _interopRequire(__webpack_require__(9));

	/*
	 * LICENSE
	 *
	 * This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 */

	var Modifier = _interopRequire(__webpack_require__(12));

	var RenderNode = _interopRequire(__webpack_require__(13));

	var TransitionableTransform = _interopRequire(__webpack_require__(15));

	var EventHandler = _interopRequire(__webpack_require__(14));

	__webpack_require__(17);

	var Molecule = (function () {
	  var _RenderNode = RenderNode;
	  var Molecule = function Molecule(initialOptions) {
	    initialOptions = typeof initialOptions != "undefined" ? initialOptions : {};

	    // "private" stuff. Not really, but regard it like so. E.g. obj._.someVariable means you're accessing internal stuff.
	    // TODO: make all properties of this._ non-writeable?
	    this._ = {
	      options: {}, // set and get by this.options
	      handler: new EventHandler(),
	      defaultOptions: {
	        align: [0.5, 0.5],
	        origin: [0.5, 0.5],
	        transform: new TransitionableTransform()
	      }
	    };

	    // set the user's initial options. This automatically creates this.modifier, and add it to this (RenderNode).
	    // NOTE: this.options is a setter and initializer.
	    this.options = initialOptions.constructor.name == "Object" ? initialOptions : {}; // make sure we have an object literal.
	  };

	  _inherits(Molecule, _RenderNode);

	  // EventHandler interface
	  Molecule.prototype.pipe = function () {
	    var args = Array.prototype.splice.call(arguments, 0);
	    return this._.handler.pipe.apply(this._.handler, args);
	  };

	  Molecule.prototype.unpipe = function () {
	    var args = Array.prototype.splice.call(arguments, 0);
	    return this._.handler.unpipe.apply(this._.handler, args);
	  };

	  Molecule.prototype.on = function () {
	    var args = Array.prototype.splice.call(arguments, 0);
	    return this._.handler.on.apply(this._.handler, args);
	  };

	  Molecule.prototype.off = function () {
	    var args = Array.prototype.splice.call(arguments, 0);
	    return this._.handler.on.apply(this._.handler, args);
	  };

	  Molecule.prototype.setOptions = function (newOptions) {
	    newOptions = typeof newOptions != "undefined" ? newOptions : {};

	    if (newOptions.constructor.name != "Object") {
	      return;
	    }

	    for (var prop in newOptions) {
	      // Subject to change when Famo.us API changes.
	      if (Modifier.prototype["" + prop + "From"]) {
	        this.modifier["" + prop + "From"](newOptions[prop]);
	      }

	      // TODO: delete the non-writeable transform property before setting it.
	      this._.options[prop] = newOptions[prop];
	      // TODO: set the transform property as a non-writeable property after setting it.
	    }
	  };

	  Molecule.prototype.resetOptions = function () {
	    this.modifier = new Modifier(); // what happened to the old Modifier? Is it the infamous Famo.us memory leak?
	    this.set(this.modifier);
	    this.setOptions(this._.defaultOptions);
	  };

	  _prototypeProperties(Molecule, null, {
	    options: {

	      // getters and setters for Molecule.options
	      set: function (newOptions) {
	        this.resetOptions();
	        this.setOptions(newOptions);
	      },
	      get: function () {
	        return this._.options;
	      },
	      enumerable: true
	    },
	    transform: {
	      set: function (newTransform) {
	        this.setOptions({ transform: newTransform });
	      },
	      get: function () {
	        return this.options.transform;
	      },
	      enumerable: true
	    }
	  });

	  return Molecule;
	})();

	exports.Molecule = Molecule;
	exports["default"] = Molecule;
	module.exports = _core.Object.assign(exports["default"], exports);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Nb2xlY3VsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU08sUUFBUSwyQkFBTSxzQkFBc0I7O0lBQ3BDLFVBQVUsMkJBQU0sd0JBQXdCOztJQUN4Qyx1QkFBdUIsMkJBQU0sNENBQTRDOztJQUN6RSxZQUFZLDJCQUFNLDBCQUEwQjs7UUFFNUMsbUNBQW1DOztJQUU3QixRQUFRO29CQUFTLFVBQVU7TUFBM0IsUUFBUSxHQUNOLFNBREYsUUFBUSxDQUNMLGNBQWMsRUFBRTtBQUN4QixrQkFBYyxHQUFHLE9BQU8sY0FBYyxJQUFJLFdBQVcsR0FBRSxjQUFjLEdBQUUsRUFBRSxDQUFDOzs7O0FBSTFFLFFBQUksQ0FBQyxDQUFDLEdBQUc7QUFDTCxhQUFPLEVBQUUsRUFBRTtBQUNYLGFBQU8sRUFBRSxJQUFJLFlBQVksRUFBRTtBQUMzQixvQkFBYyxFQUFFO0FBQ1osYUFBSyxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztBQUNoQixjQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0FBQ2pCLGlCQUFTLEVBQUUsSUFBSSx1QkFBdUIsRUFBRTtPQUMzQztLQUNKLENBQUM7Ozs7QUFJRixRQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLFFBQVEsR0FBRSxjQUFjLEdBQUUsRUFBRSxDQUFDO0dBQ2xGOztZQW5CUSxRQUFROzs7QUFBUixVQUFRLFdBc0JqQixJQUFJLEdBQUEsWUFBRztBQUNILFFBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsV0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzFEOztBQXpCUSxVQUFRLFdBMEJqQixNQUFNLEdBQUEsWUFBRztBQUNMLFFBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsV0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzVEOztBQTdCUSxVQUFRLFdBOEJqQixFQUFFLEdBQUEsWUFBRztBQUNELFFBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsV0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3hEOztBQWpDUSxVQUFRLFdBa0NqQixHQUFHLEdBQUEsWUFBRztBQUNGLFFBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsV0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3hEOztBQXJDUSxVQUFRLFdBK0NqQixVQUFVLEdBQUEsVUFBQyxVQUFVLEVBQUU7QUFDbkIsY0FBVSxHQUFHLE9BQU8sVUFBVSxJQUFJLFdBQVcsR0FBRSxVQUFVLEdBQUUsRUFBRSxDQUFDOztBQUU5RCxRQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtBQUFFLGFBQU87S0FBRTs7QUFFeEQsU0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLEVBQUU7O0FBRXpCLFVBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3BDLFlBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFDLElBQUksR0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUNuRDs7O0FBR0QsVUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztLQUUzQztHQUNKOztBQTlEUSxVQUFRLFdBK0RqQixZQUFZLEdBQUEsWUFBRztBQUNYLFFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUMvQixRQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4QixRQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7R0FDMUM7O3VCQW5FUSxRQUFRO0FBNENiLFdBQU87OztXQUpBLFVBQUMsVUFBVSxFQUFFO0FBQ3BCLFlBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixZQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO09BQy9CO1dBQ1UsWUFBRztBQUNWLGVBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7T0FDekI7OztBQTBCRyxhQUFTO1dBSEEsVUFBQyxZQUFZLEVBQUU7QUFDeEIsWUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO09BQzlDO1dBQ1ksWUFBRztBQUNaLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7T0FDakM7Ozs7O1NBMUVRLFFBQVE7OztRQUFSLFFBQVEsR0FBUixRQUFRO3FCQTRFTixRQUFRIiwiZmlsZSI6InNyYy9Nb2xlY3VsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMSUNFTlNFXG4gKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqXG4gKi9cblxuaW1wb3J0IE1vZGlmaWVyIGZyb20gJ2ZhbW91cy9jb3JlL01vZGlmaWVyJztcbmltcG9ydCBSZW5kZXJOb2RlIGZyb20gJ2ZhbW91cy9jb3JlL1JlbmRlck5vZGUnO1xuaW1wb3J0IFRyYW5zaXRpb25hYmxlVHJhbnNmb3JtIGZyb20gJ2ZhbW91cy90cmFuc2l0aW9ucy9UcmFuc2l0aW9uYWJsZVRyYW5zZm9ybSc7XG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJ2ZhbW91cy9jb3JlL0V2ZW50SGFuZGxlcic7XG5cbmltcG9ydCBcImFybXkta25pZmUvcG9seWZpbGwuRnVuY3Rpb24ubmFtZVwiO1xuXG5leHBvcnQgY2xhc3MgTW9sZWN1bGUgZXh0ZW5kcyBSZW5kZXJOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsT3B0aW9ucykge1xuICAgICAgICBpbml0aWFsT3B0aW9ucyA9IHR5cGVvZiBpbml0aWFsT3B0aW9ucyAhPSBcInVuZGVmaW5lZFwiPyBpbml0aWFsT3B0aW9uczoge307XG5cbiAgICAgICAgLy8gXCJwcml2YXRlXCIgc3R1ZmYuIE5vdCByZWFsbHksIGJ1dCByZWdhcmQgaXQgbGlrZSBzby4gRS5nLiBvYmouXy5zb21lVmFyaWFibGUgbWVhbnMgeW91J3JlIGFjY2Vzc2luZyBpbnRlcm5hbCBzdHVmZi5cbiAgICAgICAgLy8gVE9ETzogbWFrZSBhbGwgcHJvcGVydGllcyBvZiB0aGlzLl8gbm9uLXdyaXRlYWJsZT9cbiAgICAgICAgdGhpcy5fID0ge1xuICAgICAgICAgICAgb3B0aW9uczoge30sIC8vIHNldCBhbmQgZ2V0IGJ5IHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IEV2ZW50SGFuZGxlcigpLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBhbGlnbjogWzAuNSwwLjVdLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogWzAuNSwwLjVdLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbmV3IFRyYW5zaXRpb25hYmxlVHJhbnNmb3JtKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzZXQgdGhlIHVzZXIncyBpbml0aWFsIG9wdGlvbnMuIFRoaXMgYXV0b21hdGljYWxseSBjcmVhdGVzIHRoaXMubW9kaWZpZXIsIGFuZCBhZGQgaXQgdG8gdGhpcyAoUmVuZGVyTm9kZSkuXG4gICAgICAgIC8vIE5PVEU6IHRoaXMub3B0aW9ucyBpcyBhIHNldHRlciBhbmQgaW5pdGlhbGl6ZXIuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGluaXRpYWxPcHRpb25zLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJPYmplY3RcIj8gaW5pdGlhbE9wdGlvbnM6IHt9OyAvLyBtYWtlIHN1cmUgd2UgaGF2ZSBhbiBvYmplY3QgbGl0ZXJhbC5cbiAgICB9XG5cbiAgICAvLyBFdmVudEhhbmRsZXIgaW50ZXJmYWNlXG4gICAgcGlwZSgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuXy5oYW5kbGVyLnBpcGUuYXBwbHkodGhpcy5fLmhhbmRsZXIsIGFyZ3MpO1xuICAgIH1cbiAgICB1bnBpcGUoKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLl8uaGFuZGxlci51bnBpcGUuYXBwbHkodGhpcy5fLmhhbmRsZXIsIGFyZ3MpO1xuICAgIH1cbiAgICBvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuXy5oYW5kbGVyLm9uLmFwcGx5KHRoaXMuXy5oYW5kbGVyLCBhcmdzKTtcbiAgICB9XG4gICAgb2ZmKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5fLmhhbmRsZXIub24uYXBwbHkodGhpcy5fLmhhbmRsZXIsIGFyZ3MpO1xuICAgIH1cblxuICAgIC8vIGdldHRlcnMgYW5kIHNldHRlcnMgZm9yIE1vbGVjdWxlLm9wdGlvbnNcbiAgICBzZXQgb3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gICAgICAgIHRoaXMucmVzZXRPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhuZXdPcHRpb25zKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8ub3B0aW9ucztcbiAgICB9XG4gICAgc2V0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gICAgICAgIG5ld09wdGlvbnMgPSB0eXBlb2YgbmV3T3B0aW9ucyAhPSBcInVuZGVmaW5lZFwiPyBuZXdPcHRpb25zOiB7fTtcblxuICAgICAgICBpZiAobmV3T3B0aW9ucy5jb25zdHJ1Y3Rvci5uYW1lICE9IFwiT2JqZWN0XCIpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBuZXdPcHRpb25zKSB7XG4gICAgICAgICAgICAvLyBTdWJqZWN0IHRvIGNoYW5nZSB3aGVuIEZhbW8udXMgQVBJIGNoYW5nZXMuXG4gICAgICAgICAgICBpZiAoTW9kaWZpZXIucHJvdG90eXBlWycnK3Byb3ArJ0Zyb20nXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZXJbJycrcHJvcCsnRnJvbSddKG5ld09wdGlvbnNbcHJvcF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiBkZWxldGUgdGhlIG5vbi13cml0ZWFibGUgdHJhbnNmb3JtIHByb3BlcnR5IGJlZm9yZSBzZXR0aW5nIGl0LlxuICAgICAgICAgICAgdGhpcy5fLm9wdGlvbnNbcHJvcF0gPSBuZXdPcHRpb25zW3Byb3BdO1xuICAgICAgICAgICAgLy8gVE9ETzogc2V0IHRoZSB0cmFuc2Zvcm0gcHJvcGVydHkgYXMgYSBub24td3JpdGVhYmxlIHByb3BlcnR5IGFmdGVyIHNldHRpbmcgaXQuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzZXRPcHRpb25zKCkge1xuICAgICAgICB0aGlzLm1vZGlmaWVyID0gbmV3IE1vZGlmaWVyKCk7IC8vIHdoYXQgaGFwcGVuZWQgdG8gdGhlIG9sZCBNb2RpZmllcj8gSXMgaXQgdGhlIGluZmFtb3VzIEZhbW8udXMgbWVtb3J5IGxlYWs/XG4gICAgICAgIHRoaXMuc2V0KHRoaXMubW9kaWZpZXIpO1xuICAgICAgICB0aGlzLnNldE9wdGlvbnModGhpcy5fLmRlZmF1bHRPcHRpb25zKTtcbiAgICB9XG5cbiAgICBzZXQgdHJhbnNmb3JtKG5ld1RyYW5zZm9ybSkge1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMoe3RyYW5zZm9ybTogbmV3VHJhbnNmb3JtfSk7XG4gICAgfVxuICAgIGdldCB0cmFuc2Zvcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudHJhbnNmb3JtO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1vbGVjdWxlO1xuIl19

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/josephpea/test/infamous-with-webpack/node_modules/css-loader/index.js!/Users/josephpea/test/infamous-with-webpack/node_modules/famous/src/core/famous.css", function() {
			var newContent = require("!!/Users/josephpea/test/infamous-with-webpack/node_modules/css-loader/index.js!/Users/josephpea/test/infamous-with-webpack/node_modules/famous/src/core/famous.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	exports.push([module.id, "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/.\n *\n * Owner: mark@famo.us\n * @license MPL 2.0\n * @copyright Famous Industries, Inc. 2014\n */\n\n.famous-root {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    opacity: .999999; /* ios8 hotfix */\n    overflow: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\n.famous-container, .famous-group {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px;\n    right: 0px;\n    overflow: visible;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    pointer-events: none;\n}\n\n.famous-group {\n    width: 0px;\n    height: 0px;\n    margin: 0px;\n    padding: 0px;\n}\n\n.famous-surface {\n    position: absolute;\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    pointer-events: auto;\n}\n\n.famous-container-group {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n", ""]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:stylesheet/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core.js 0.4.1
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!function(returnThis, framework, undefined){
	'use strict';

	/******************************************************************************
	 * Module : common                                                            *
	 ******************************************************************************/

	var global          = returnThis()
	  // Shortcuts for [[Class]] & property names
	  , OBJECT          = 'Object'
	  , FUNCTION        = 'Function'
	  , ARRAY           = 'Array'
	  , STRING          = 'String'
	  , NUMBER          = 'Number'
	  , REGEXP          = 'RegExp'
	  , DATE            = 'Date'
	  , MAP             = 'Map'
	  , SET             = 'Set'
	  , WEAKMAP         = 'WeakMap'
	  , WEAKSET         = 'WeakSet'
	  , SYMBOL          = 'Symbol'
	  , PROMISE         = 'Promise'
	  , MATH            = 'Math'
	  , ARGUMENTS       = 'Arguments'
	  , PROTOTYPE       = 'prototype'
	  , CONSTRUCTOR     = 'constructor'
	  , TO_STRING       = 'toString'
	  , TO_STRING_TAG   = TO_STRING + 'Tag'
	  , TO_LOCALE       = 'toLocaleString'
	  , HAS_OWN         = 'hasOwnProperty'
	  , FOR_EACH        = 'forEach'
	  , ITERATOR        = 'iterator'
	  , FF_ITERATOR     = '@@' + ITERATOR
	  , PROCESS         = 'process'
	  , CREATE_ELEMENT  = 'createElement'
	  // Aliases global objects and prototypes
	  , Function        = global[FUNCTION]
	  , Object          = global[OBJECT]
	  , Array           = global[ARRAY]
	  , String          = global[STRING]
	  , Number          = global[NUMBER]
	  , RegExp          = global[REGEXP]
	  , Date            = global[DATE]
	  , Map             = global[MAP]
	  , Set             = global[SET]
	  , WeakMap         = global[WEAKMAP]
	  , WeakSet         = global[WEAKSET]
	  , Symbol          = global[SYMBOL]
	  , Math            = global[MATH]
	  , TypeError       = global.TypeError
	  , setTimeout      = global.setTimeout
	  , setImmediate    = global.setImmediate
	  , clearImmediate  = global.clearImmediate
	  , process         = global[PROCESS]
	  , nextTick        = process && process.nextTick
	  , document        = global.document
	  , html            = document && document.documentElement
	  , navigator       = global.navigator
	  , define          = global.define
	  , ArrayProto      = Array[PROTOTYPE]
	  , ObjectProto     = Object[PROTOTYPE]
	  , FunctionProto   = Function[PROTOTYPE]
	  , Infinity        = 1 / 0
	  , DOT             = '.';

	// http://jsperf.com/core-js-isobject
	function isObject(it){
	  return it != null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	// Native function?
	var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);

	// Object internal [[Class]] or toStringTag
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	var buildIn = {
	  Undefined: 1, Null: 1, Array: 1, String: 1, Arguments: 1,
	  Function: 1, Error: 1, Boolean: 1, Number: 1, Date: 1, RegExp:1 
	} , toString = ObjectProto[TO_STRING];
	function setToStringTag(it, tag, stat){
	  if(it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))hidden(it, SYMBOL_TAG, tag);
	}
	function cof(it){
	  return it == undefined ? it === undefined
	    ? 'Undefined' : 'Null' : toString.call(it).slice(8, -1);
	}
	function classof(it){
	  var klass = cof(it), tag;
	  return klass == OBJECT && (tag = it[SYMBOL_TAG]) ? has(buildIn, tag) ? '~' + tag : tag : klass;
	}

	// Function
	var call  = FunctionProto.call
	  , apply = FunctionProto.apply
	  , REFERENCE_GET;
	// Partial apply
	function part(/* ...args */){
	  var length = arguments.length
	    , args   = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
	  return partial(this, args, length, holder, _, false);
	}
	// Internal partial application & context binding
	function partial(fn, argsPart, lengthPart, holder, _, bind, context){
	  assertFunction(fn);
	  return function(/* ...args */){
	    var that   = bind ? context : this
	      , length = arguments.length
	      , i = 0, j = 0, args;
	    if(!holder && !length)return invoke(fn, argsPart, that);
	    args = argsPart.slice();
	    if(holder)for(;lengthPart > i; i++)if(args[i] === _)args[i] = arguments[j++];
	    while(length > j)args.push(arguments[j++]);
	    return invoke(fn, args, that);
	  }
	}
	// Optional / simple context binding
	function ctx(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    }
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    }
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    }
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	  }
	}
	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	function invoke(fn, args, that){
	  var un = that === undefined;
	  switch(args.length | 0){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	}
	function construct(target, argumentsList){
	  var instance = create(target[PROTOTYPE])
	    , result   = apply.call(target, instance, argumentsList);
	  return isObject(result) ? result : instance;
	}

	// Object:
	var create           = Object.create
	  , getPrototypeOf   = Object.getPrototypeOf
	  , setPrototypeOf   = Object.setPrototypeOf
	  , defineProperty   = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , getOwnDescriptor = Object.getOwnPropertyDescriptor
	  , getKeys          = Object.keys
	  , getNames         = Object.getOwnPropertyNames
	  , getSymbols       = Object.getOwnPropertySymbols
	  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  , ES5Object        = Object;
	function returnIt(it){
	  return it;
	}
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function ownKeys(it){
	  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	}
	// 19.1.2.1 Object.assign(target, source, ...)
	var assign = Object.assign || function(target, source){
	  var T = Object(assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	}
	function keyOf(object, el){
	  var O      = ES5Object(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	}

	// Array
	// array('str1,str2,str3') => ['str1', 'str2', 'str3']
	function array(it){
	  return String(it).split(',');
	}
	var push    = ArrayProto.push
	  , unshift = ArrayProto.unshift
	  , slice   = ArrayProto.slice
	  , splice  = ArrayProto.splice
	  , indexOf = ArrayProto.indexOf
	  , forEach = ArrayProto[FOR_EACH];
	/*
	 * 0 -> forEach
	 * 1 -> map
	 * 2 -> filter
	 * 3 -> some
	 * 4 -> every
	 * 5 -> find
	 * 6 -> findIndex
	 */
	function createArrayMethod(type){
	  var isMap       = type == 1
	    , isFilter    = type == 2
	    , isSome      = type == 3
	    , isEvery     = type == 4
	    , isFindIndex = type == 6
	    , noholes     = type == 5 || isFindIndex;
	  return function(callbackfn/*, that = undefined */){
	    var O      = Object(assertDefined(this))
	      , that   = arguments[1]
	      , self   = ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = isMap ? Array(length) : isFilter ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(noholes || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(type){
	        if(isMap)result[index] = res;             // map
	        else if(res)switch(type){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(isEvery)return false;           // every
	      }
	    }
	    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	  }
	}
	function createArrayContains(isContains){
	  return function(el /*, fromIndex = 0 */){
	    var O      = ES5Object(assertDefined(this))
	      , length = toLength(O.length)
	      , index  = toIndex(arguments[1], length);
	    if(isContains && el != el){
	      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
	    } else for(;length > index; index++)if(isContains || index in O){
	      if(O[index] === el)return isContains || index;
	    } return !isContains && -1;
	  }
	}
	function generic(A, B){
	  // strange IE quirks mode bug -> use typeof vs isFunction
	  return typeof A == 'function' ? A : B;
	}

	// Math
	var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
	  , ceil   = Math.ceil
	  , floor  = Math.floor
	  , max    = Math.max
	  , min    = Math.min
	  , random = Math.random
	  , trunc  = Math.trunc || function(it){
	      return (it > 0 ? floor : ceil)(it);
	    }
	// 20.1.2.4 Number.isNaN(number)
	function sameNaN(number){
	  return number != number;
	}
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it) ? 0 : trunc(it);
	}
	// 7.1.15 ToLength
	function toLength(it){
	  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	}
	function toIndex(index, length){
	  var index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	}

	function createReplacer(regExp, replace, isStatic){
	  var replacer = isObject(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  }
	}
	function createPointAt(toString){
	  return function(pos){
	    var s = String(assertDefined(this))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return toString ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? toString ? s.charAt(i) : a
	      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  }
	}

	// Assertion & errors
	var REDUCE_ERROR = 'Reduce of empty object with no initial value';
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError('Function called on null or undefined');
	  return it;
	}
	function assertFunction(it){
	  assert(isFunction(it), it, ' is not a function!');
	  return it;
	}
	function assertObject(it){
	  assert(isObject(it), it, ' is not an object!');
	  return it;
	}
	function assertInstance(it, Constructor, name){
	  assert(it instanceof Constructor, name, ": use the 'new' operator!");
	}

	// Property descriptors & Symbol
	function descriptor(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  }
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return defineProperty(object, key, descriptor(bitmap, value));
	  } : simpleSet;
	}
	function uid(key){
	  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
	}
	function getWellKnownSymbol(name, setter){
	  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	}
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC   = !!function(){try{return defineProperty({}, DOT, ObjectProto)}catch(e){}}()
	  , sid    = 0
	  , hidden = createDefiner(1)
	  , set    = Symbol ? simpleSet : hidden
	  , safeSymbol = Symbol || uid;
	function assignHidden(target, src){
	  for(var key in src)hidden(target, key, src[key]);
	  return target;
	}

	// Iterators
	var SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR)
	  , SYMBOL_TAG      = getWellKnownSymbol(TO_STRING_TAG)
	  , SUPPORT_FF_ITER = FF_ITERATOR in ArrayProto
	  , ITER  = safeSymbol('iter')
	  , KEY   = 1
	  , VALUE = 2
	  , Iterators = {}
	  , IteratorPrototype = {}
	  , NATIVE_ITERATORS = SYMBOL_ITERATOR in ArrayProto
	    // Safari define byggy iterators w/o `next`
	  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, returnThis);
	function setIterator(O, value){
	  hidden(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  SUPPORT_FF_ITER && hidden(O, FF_ITERATOR, value);
	}
	function createIterator(Constructor, NAME, next, proto){
	  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	}
	function defineIterator(Constructor, NAME, value, DEFAULT){
	  var proto = Constructor[PROTOTYPE]
	    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
	  if(framework){
	    // Define iterator
	    setIterator(proto, iter);
	    if(iter !== value){
	      var iterProto = getPrototypeOf(iter.call(new Constructor));
	      // Set @@toStringTag to native iterators
	      setToStringTag(iterProto, NAME + ' Iterator', true);
	      // FF fix
	      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	    }
	  }
	  // Plug for library
	  Iterators[NAME] = iter;
	  // FF & v8 fix
	  Iterators[NAME + ' Iterator'] = returnThis;
	  return iter;
	}
	function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET){
	  function createIter(kind){
	    return function(){
	      return new Constructor(this, kind);
	    }
	  }
	  createIterator(Constructor, NAME, next);
	  var entries = createIter(KEY+VALUE)
	    , values  = createIter(VALUE);
	  if(DEFAULT == VALUE)values = defineIterator(Base, NAME, values, 'values');
	  else entries = defineIterator(Base, NAME, entries, 'entries');
	  if(DEFAULT){
	    $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	      entries: entries,
	      keys: IS_SET ? values : createIter(KEY),
	      values: values
	    });
	  }
	}
	function iterResult(done, value){
	  return {value: value, done: !!done};
	}
	function isIterable(it){
	  var O      = Object(it)
	    , Symbol = global[SYMBOL]
	    , hasExt = !!(Symbol && Symbol[ITERATOR] && Symbol[ITERATOR] in O);
	  return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	}
	function getIterator(it){
	  var Symbol  = global[SYMBOL]
	    , ext     = Symbol && Symbol[ITERATOR] && it[Symbol[ITERATOR]]
	    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	  return assertObject(getIter.call(it));
	}
	function stepCall(fn, value, entries){
	  return entries ? invoke(fn, value) : fn(value);
	}
	function forOf(iterable, entries, fn, that){
	  var iterator = getIterator(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false)return;
	}

	// core
	var NODE = cof(process) == PROCESS
	  , core = {}
	  , path = framework ? global : core
	  , old  = global.core
	  // type bitmap
	  , FORCED = 1
	  , GLOBAL = 2
	  , STATIC = 4
	  , PROTO  = 8
	  , BIND   = 16
	  , WRAP   = 32;
	function $define(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & GLOBAL
	    , target   = isGlobal ? global : (type & STATIC)
	        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // there is a similar native
	    own = !(type & FORCED) && target && key in target
	      && (!isFunction(target[key]) || isNative(target[key]));
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    if(type & BIND && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & WRAP && !framework && target[key] == out){
	      exp = function(param){
	        return this instanceof out ? new out(param) : out(param);
	      }
	      exp[PROTOTYPE] = out[PROTOTYPE];
	    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	    // export
	    if(exports[key] != out)hidden(exports, key, exp);
	    // extend global
	    if(framework && target && !own){
	      if(isGlobal)target[key] = out;
	      else delete target[key] && hidden(target, key, out);
	    }
	  }
	}
	// CommonJS export
	if(typeof module != 'undefined' && module.exports)module.exports = core;
	// RequireJS export
	if(isFunction(define) && define.amd)define(function(){return core});
	// Export to global object
	if(!NODE || framework){
	  core.noConflict = function(){
	    global.core = old;
	    return core;
	  }
	  global.core = core;
	}

	/******************************************************************************
	 * Module : global                                                            *
	 ******************************************************************************/

	$define(GLOBAL + FORCED, {global: global});

	/******************************************************************************
	 * Module : es6_symbol                                                        *
	 ******************************************************************************/

	// ECMAScript 6 symbols shim
	!function(TAG, SymbolRegistry, setter){
	  // 19.4.1.1 Symbol([description])
	  if(!isNative(Symbol)){
	    Symbol = function(description){
	      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
	      var tag = uid(description);
	      DESC && setter && defineProperty(ObjectProto, tag, {
	        configurable: true,
	        set: function(value){
	          hidden(this, tag, value);
	        }
	      });
	      return set(create(Symbol[PROTOTYPE]), TAG, tag);
	    }
	    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
	      return this[TAG];
	    });
	  }
	  $define(GLOBAL + WRAP, {Symbol: Symbol});
	  
	  var symbolStatics = {
	    // 19.4.2.1 Symbol.for(key)
	    'for': function(key){
	      return has(SymbolRegistry, key += '')
	        ? SymbolRegistry[key]
	        : SymbolRegistry[key] = Symbol(key);
	    },
	    // 19.4.2.4 Symbol.iterator
	    iterator: SYMBOL_ITERATOR,
	    // 19.4.2.5 Symbol.keyFor(sym)
	    keyFor: part.call(keyOf, SymbolRegistry),
	    // 19.4.2.13 Symbol.toStringTag
	    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	    pure: safeSymbol,
	    set: set,
	    useSetter: function(){setter = true},
	    useSimple: function(){setter = false}
	  };
	  // 19.4.2.2 Symbol.hasInstance
	  // 19.4.2.3 Symbol.isConcatSpreadable
	  // 19.4.2.6 Symbol.match
	  // 19.4.2.8 Symbol.replace
	  // 19.4.2.9 Symbol.search
	  // 19.4.2.10 Symbol.species
	  // 19.4.2.11 Symbol.split
	  // 19.4.2.12 Symbol.toPrimitive
	  // 19.4.2.14 Symbol.unscopables
	  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,' +
	    'species,split,toPrimitive,unscopables'), function(it){
	      symbolStatics[it] = getWellKnownSymbol(it);
	    }
	  );
	  $define(STATIC, SYMBOL, symbolStatics);
	  
	  setToStringTag(Symbol, SYMBOL);
	  
	  // 26.1.11 Reflect.ownKeys(target)
	  $define(GLOBAL, {Reflect: {ownKeys: ownKeys}});
	}(safeSymbol('tag'), {}, true);

	/******************************************************************************
	 * Module : es6                                                               *
	 ******************************************************************************/

	// ECMAScript 6 shim
	!function(isFinite, tmp){
	  var RangeError = global.RangeError
	      // 20.1.2.3 Number.isInteger(number)
	    , isInteger = Number.isInteger || function(it){
	        return !isObject(it) && isFinite(it) && floor(it) === it;
	      }
	      // 20.2.2.28 Math.sign(x)
	    , sign = Math.sign || function sign(it){
	        return (it = +it) == 0 || it != it ? it : it < 0 ? -1 : 1;
	      }
	    , pow  = Math.pow
	    , abs  = Math.abs
	    , exp  = Math.exp
	    , log  = Math.log
	    , sqrt = Math.sqrt
	    , fcc  = String.fromCharCode
	    , at   = createPointAt(true);
	  
	  var objectStatic = {
	    // 19.1.3.1 Object.assign(target, source)
	    assign: assign,
	    // 19.1.3.10 Object.is(value1, value2)
	    is: function(x, y){
	      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	    }
	  };
	  // 19.1.3.19 Object.setPrototypeOf(O, proto)
	  // Works with __proto__ only. Old v8 can't works with null proto objects.
	  '__proto__' in ObjectProto && function(buggy, set){
	    try {
	      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
	      set({}, ArrayProto);
	    } catch(e){ buggy = true }
	    objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto){
	      assertObject(O);
	      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	      if(buggy)O.__proto__ = proto;
	      else set(O, proto);
	      return O;
	    }
	  }();
	  $define(STATIC, OBJECT, objectStatic);
	  
	  // 20.2.2.5 Math.asinh(x)
	  function asinh(x){
	    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	  }
	  
	  $define(STATIC, NUMBER, {
	    // 20.1.2.1 Number.EPSILON
	    EPSILON: pow(2, -52),
	    // 20.1.2.2 Number.isFinite(number)
	    isFinite: function(it){
	      return typeof it == 'number' && isFinite(it);
	    },
	    // 20.1.2.3 Number.isInteger(number)
	    isInteger: isInteger,
	    // 20.1.2.4 Number.isNaN(number)
	    isNaN: sameNaN,
	    // 20.1.2.5 Number.isSafeInteger(number)
	    isSafeInteger: function(number){
	      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	    },
	    // 20.1.2.6 Number.MAX_SAFE_INTEGER
	    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	    // 20.1.2.10 Number.MIN_SAFE_INTEGER
	    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	    // 20.1.2.12 Number.parseFloat(string)
	    parseFloat: parseFloat,
	    // 20.1.2.13 Number.parseInt(string, radix)
	    parseInt: parseInt
	  });
	  
	  $define(STATIC, MATH, {
	    // 20.2.2.3 Math.acosh(x)
	    acosh: function(x){
	      return x < 1 ? NaN : log(x + sqrt(x * x - 1));
	    },
	    // 20.2.2.5 Math.asinh(x)
	    asinh: asinh,
	    // 20.2.2.7 Math.atanh(x)
	    atanh: function(x){
	      return x == 0 ? +x : log((1 + +x) / (1 - x)) / 2;
	    },
	    // 20.2.2.9 Math.cbrt(x)
	    cbrt: function(x){
	      return sign(x) * pow(abs(x), 1 / 3);
	    },
	    // 20.2.2.11 Math.clz32(x)
	    clz32: function(x){
	      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	    },
	    // 20.2.2.12 Math.cosh(x)
	    cosh: function(x){
	      return (exp(x) + exp(-x)) / 2;
	    },
	    // 20.2.2.14 Math.expm1(x)
	    expm1: function(x){
	      return x == 0 ? +x : x > -1e-6 && x < 1e-6 ? +x + x * x / 2 : exp(x) - 1;
	    },
	    // 20.2.2.16 Math.fround(x)
	    // TODO: fallback for IE9-
	    fround: function(x){
	      return new Float32Array([x])[0];
	    },
	    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	    // TODO: work with very large & small numbers
	    hypot: function(value1, value2){
	      var sum    = 0
	        , length = arguments.length
	        , value;
	      while(length--){
	        value = +arguments[length];
	        if(value == Infinity || value == -Infinity)return Infinity;
	        sum += value * value;
	      }
	      return sqrt(sum);
	    },
	    // 20.2.2.18 Math.imul(x, y)
	    imul: function(x, y){
	      var UInt16 = 0xffff
	        , xl = UInt16 & x
	        , yl = UInt16 & y;
	      return 0 | xl * yl + ((UInt16 & x >>> 16) * yl + xl * (UInt16 & y >>> 16) << 16 >>> 0);
	    },
	    // 20.2.2.20 Math.log1p(x)
	    log1p: function(x){
	      return x > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + +x);
	    },
	    // 20.2.2.21 Math.log10(x)
	    log10: function(x){
	      return log(x) / Math.LN10;
	    },
	    // 20.2.2.22 Math.log2(x)
	    log2: function(x){
	      return log(x) / Math.LN2;
	    },
	    // 20.2.2.28 Math.sign(x)
	    sign: sign,
	    // 20.2.2.30 Math.sinh(x)
	    sinh: function(x){
	      return x == 0 ? +x : (exp(x) - exp(-x)) / 2;
	    },
	    // 20.2.2.33 Math.tanh(x)
	    tanh: function(x){
	      return isFinite(x) ? x == 0 ? +x : (exp(x) - exp(-x)) / (exp(x) + exp(-x)) : sign(x);
	    },
	    // 20.2.2.34 Math.trunc(x)
	    trunc: trunc
	  });
	  // 20.2.1.9 Math[@@toStringTag]
	  setToStringTag(Math, MATH, true);
	  
	  function assertNotRegExp(it){
	    if(isObject(it) && it instanceof RegExp)throw TypeError();
	  }
	  $define(STATIC, STRING, {
	    // 21.1.2.2 String.fromCodePoint(...codePoints)
	    fromCodePoint: function(x){
	      var res = []
	        , len = arguments.length
	        , i   = 0
	        , code
	      while(len > i){
	        code = +arguments[i++];
	        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	        res.push(code < 0x10000
	          ? fcc(code)
	          : fcc(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	        );
	      } return res.join('');
	    },
	    // 21.1.2.4 String.raw(callSite, ...substitutions)
	    raw: function(callSite){
	      var raw = ES5Object(assertDefined(callSite.raw))
	        , len = toLength(raw.length)
	        , sln = arguments.length
	        , res = []
	        , i   = 0;
	      while(len > i){
	        res.push(String(raw[i++]));
	        if(i < sln)res.push(String(arguments[i]));
	      } return res.join('');
	    }
	  });
	  $define(PROTO, STRING, {
	    // 21.1.3.3 String.prototype.codePointAt(pos)
	    codePointAt: createPointAt(false),
	    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	    endsWith: function(searchString /*, endPosition = @length */){
	      assertNotRegExp(searchString);
	      var that = String(assertDefined(this))
	        , endPosition = arguments[1]
	        , len = toLength(that.length)
	        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
	      searchString += '';
	      return that.slice(end - searchString.length, end) === searchString;
	    },
	    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	    includes: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	    },
	    // 21.1.3.13 String.prototype.repeat(count)
	    repeat: function(count){
	      var str = String(assertDefined(this))
	        , res = ''
	        , n   = toInteger(count);
	      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
	      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	      return res;
	    },
	    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	    startsWith: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      var that  = String(assertDefined(this))
	        , index = toLength(min(arguments[1], that.length));
	      searchString += '';
	      return that.slice(index, index + searchString.length) === searchString;
	    }
	  });
	  // 21.1.3.27 String.prototype[@@iterator]()
	  defineStdIterators(String, STRING, function(iterated){
	    set(this, ITER, {o: String(iterated), i: 0});
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , index = iter.i
	      , point;
	    if(index >= O.length)return iterResult(1);
	    point = at.call(O, index);
	    iter.i += point.length;
	    return iterResult(0, point);
	  });
	  
	  $define(STATIC, ARRAY, {
	    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	    from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	      var O       = Object(assertDefined(arrayLike))
	        , result  = new (generic(this, Array))
	        , mapfn   = arguments[1]
	        , that    = arguments[2]
	        , mapping = mapfn !== undefined
	        , f       = mapping ? ctx(mapfn, that, 2) : undefined
	        , index   = 0
	        , length;
	      if(isIterable(O))for(var iter = getIterator(O), step; !(step = iter.next()).done; index++){
	        result[index] = mapping ? f(step.value, index) : step.value;
	      } else for(length = toLength(O.length); length > index; index++){
	        result[index] = mapping ? f(O[index], index) : O[index];
	      }
	      result.length = index;
	      return result;
	    },
	    // 22.1.2.3 Array.of( ...items)
	    of: function(/* ...args */){
	      var index  = 0
	        , length = arguments.length
	        , result = new (generic(this, Array))(length);
	      while(length > index)result[index] = arguments[index++];
	      result.length = length;
	      return result;
	    }
	  });
	  $define(PROTO, ARRAY, {
	    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	    copyWithin: function(target /* = 0 */, start /* = 0, end = @length */){
	      var O     = Object(assertDefined(this))
	        , len   = toLength(O.length)
	        , to    = toIndex(target, len)
	        , from  = toIndex(start, len)
	        , end   = arguments[2]
	        , fin   = end === undefined ? len : toIndex(end, len)
	        , count = min(fin - from, len - to)
	        , inc   = 1;
	      if(from < to && to < from + count){
	        inc  = -1;
	        from = from + count - 1;
	        to   = to + count - 1;
	      }
	      while(count-- > 0){
	        if(from in O)O[to] = O[from];
	        else delete O[to];
	        to += inc;
	        from += inc;
	      } return O;
	    },
	    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	    fill: function(value /*, start = 0, end = @length */){
	      var O      = Object(assertDefined(this))
	        , length = toLength(O.length)
	        , index  = toIndex(arguments[1], length)
	        , end    = arguments[2]
	        , endPos = end === undefined ? length : toIndex(end, length);
	      while(endPos > index)O[index++] = value;
	      return O;
	    },
	    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	    find: createArrayMethod(5),
	    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	    findIndex: createArrayMethod(6)
	  });
	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  defineStdIterators(Array, ARRAY, function(iterated, kind){
	    set(this, ITER, {o: ES5Object(iterated), i: 0, k: kind});
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , kind  = iter.k
	      , index = iter.i++;
	    if(!O || index >= O.length)return iter.o = undefined, iterResult(1);
	    if(kind == KEY)  return iterResult(0, index);
	    if(kind == VALUE)return iterResult(0, O[index]);
	                     return iterResult(0, [index, O[index]]);
	  }, VALUE);
	  
	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators[ARGUMENTS] = Iterators[ARRAY];
	  
	  // 24.3.3 JSON[@@toStringTag]
	  setToStringTag(global.JSON, 'JSON', true);
	  
	  if(framework){
	    // 19.1.3.6 Object.prototype.toString()
	    tmp[SYMBOL_TAG] = DOT;
	    if(cof(tmp) != DOT)hidden(ObjectProto, TO_STRING, function(){
	      return '[object ' + classof(this) + ']';
	    });
	    
	    // 21.2.5.3 get RegExp.prototype.flags()
	    if(/./g.flags != 'g')defineProperty(RegExp[PROTOTYPE], 'flags', {
	      configurable: true,
	      get: createReplacer(/^.*\/(\w*)$/, '$1')
	    });
	  }
	}(isFinite, {});

	/******************************************************************************
	 * Module : immediate                                                         *
	 ******************************************************************************/

	// setImmediate shim
	// Node.js 0.9+ & IE10+ has setImmediate, else:
	isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
	  var postMessage      = global.postMessage
	    , addEventListener = global.addEventListener
	    , MessageChannel   = global.MessageChannel
	    , counter          = 0
	    , queue            = {}
	    , defer, channel, port;
	  setImmediate = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    }
	    defer(counter);
	    return counter;
	  }
	  clearImmediate = function(id){
	    delete queue[id];
	  }
	  function run(id){
	    if(has(queue, id)){
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  }
	  function listner(event){
	    run(event.data);
	  }
	  // Node.js 0.8-
	  if(NODE){
	    defer = function(id){
	      nextTick(part.call(run, id));
	    }
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    }
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
	    defer = function(id){
	      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run(id);
	      }
	    }
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(part.call(run, id), 0);
	    }
	  }
	}('onreadystatechange');
	$define(GLOBAL + BIND, {
	  setImmediate:   setImmediate,
	  clearImmediate: clearImmediate
	});

	/******************************************************************************
	 * Module : es6_promise                                                       *
	 ******************************************************************************/

	// ES6 promises shim
	// Based on https://github.com/getify/native-promise-only/
	!function(Promise, test){
	  isFunction(Promise) && isFunction(Promise.resolve)
	  && Promise.resolve(test = new Promise(Function())) == test
	  || function(asap, DEF){
	    function isThenable(o){
	      var then;
	      if(isObject(o))then = o.then;
	      return isFunction(then) ? then : false;
	    }
	    function notify(def){
	      var chain = def.chain;
	      chain.length && asap(function(){
	        var msg = def.msg
	          , ok  = def.state == 1
	          , i   = 0;
	        while(chain.length > i)!function(react){
	          var cb = ok ? react.ok : react.fail
	            , ret, then;
	          try {
	            if(cb){
	              ret = cb === true ? msg : cb(msg);
	              if(ret === react.P){
	                react.rej(TypeError(PROMISE + '-chain cycle'));
	              } else if(then = isThenable(ret)){
	                then.call(ret, react.res, react.rej);
	              } else react.res(ret);
	            } else react.rej(msg);
	          } catch(err){
	            react.rej(err);
	          }
	        }(chain[i++]);
	        chain.length = 0;
	      });
	    }
	    function resolve(msg){
	      var def = this
	        , then, wrapper;
	      if(def.done)return;
	      def.done = true;
	      def = def.def || def; // unwrap
	      try {
	        if(then = isThenable(msg)){
	          wrapper = {def: def, done: false}; // wrap
	          then.call(msg, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	        } else {
	          def.msg = msg;
	          def.state = 1;
	          notify(def);
	        }
	      } catch(err){
	        reject.call(wrapper || {def: def, done: false}, err); // wrap
	      }
	    }
	    function reject(msg){
	      var def = this;
	      if(def.done)return;
	      def.done = true;
	      def = def.def || def; // unwrap
	      def.msg = msg;
	      def.state = 2;
	      notify(def);
	    }
	    // 25.4.3.1 Promise(executor)
	    Promise = function(executor){
	      assertFunction(executor);
	      assertInstance(this, Promise, PROMISE);
	      var def = {chain: [], state: 0, done: false, msg: undefined};
	      hidden(this, DEF, def);
	      try {
	        executor(ctx(resolve, def, 1), ctx(reject, def, 1));
	      } catch(err){
	        reject.call(def, err);
	      }
	    }
	    assignHidden(Promise[PROTOTYPE], {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function(onFulfilled, onRejected){
	        var react = {
	          ok:   isFunction(onFulfilled) ? onFulfilled : true,
	          fail: isFunction(onRejected)  ? onRejected  : false
	        } , P = react.P = new this[CONSTRUCTOR](function(resolve, reject){
	          react.res = assertFunction(resolve);
	          react.rej = assertFunction(reject);
	        }), def = this[DEF];
	        def.chain.push(react);
	        def.state && notify(def);
	        return P;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function(onRejected){
	        return this.then(undefined, onRejected);
	      }
	    });
	    assignHidden(Promise, {
	      // 25.4.4.1 Promise.all(iterable)
	      all: function(iterable){
	        var Promise = this
	          , values  = [];
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, push, values);
	          var remaining = values.length
	            , results   = Array(remaining);
	          if(remaining)forEach.call(values, function(promise, index){
	            Promise.resolve(promise).then(function(value){
	              results[index] = value;
	              --remaining || resolve(results);
	            }, reject);
	          });
	          else resolve(results);
	        });
	      },
	      // 25.4.4.4 Promise.race(iterable)
	      race: function(iterable){
	        var Promise = this;
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, function(promise){
	            Promise.resolve(promise).then(resolve, reject);
	          });
	        });
	      },
	      // 25.4.4.5 Promise.reject(r)
	      reject: function(r){
	        return new this(function(resolve, reject){
	          reject(r);
	        });
	      },
	      // 25.4.4.6 Promise.resolve(x)
	      resolve: function(x){
	        return isObject(x) && getPrototypeOf(x) === this[PROTOTYPE]
	          ? x : new this(function(resolve, reject){
	            resolve(x);
	          });
	      }
	    });
	  }(nextTick || setImmediate, safeSymbol('def'));
	  setToStringTag(Promise, PROMISE);
	  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
	}(global[PROMISE]);

	/******************************************************************************
	 * Module : es6_collections                                                   *
	 ******************************************************************************/

	// ECMAScript 6 collections shim
	!function(){
	  var UID   = safeSymbol('uid')
	    , DATA  = safeSymbol('data')
	    , WEAK  = safeSymbol('weak')
	    , LAST  = safeSymbol('last')
	    , FIRST = safeSymbol('first')
	    , SIZE  = DESC ? safeSymbol('size') : 'size'
	    , uid   = 0;
	  
	  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
	    var ADDER = isMap ? 'set' : 'add'
	      , proto = C && C[PROTOTYPE]
	      , O     = {};
	    function initFromIterable(that, iterable){
	      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
	      return that;
	    }
	    function fixSVZ(key, chain){
	      var method = proto[key];
	      framework && hidden(proto, key, function(a, b){
	        var result = method.call(this, a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      });
	    }
	    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, 'entries')))){
	      // create collection constructor
	      C = isWeak
	        ? function(iterable){
	            assertInstance(this, C, NAME);
	            set(this, UID, uid++);
	            initFromIterable(this, iterable);
	          }
	        : function(iterable){
	            var that = this;
	            assertInstance(that, C, NAME);
	            set(that, DATA, create(null));
	            set(that, SIZE, 0);
	            set(that, LAST, undefined);
	            set(that, FIRST, undefined);
	            initFromIterable(that, iterable);
	          };
	      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	      isWeak || defineProperty(C[PROTOTYPE], 'size', {get: function(){
	        return assertDefined(this[SIZE]);
	      }});
	    } else {
	      var Native = C
	        , inst   = new C
	        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
	        , buggyZero;
	      // wrap to init collections from iterable
	      if(!NATIVE_ITERATORS || !C.length){
	        C = function(iterable){
	          assertInstance(this, C, NAME);
	          return initFromIterable(new Native, iterable);
	        }
	        C[PROTOTYPE] = proto;
	      }
	      isWeak || inst[FOR_EACH](function(val, key){
	        buggyZero = 1 / key === -Infinity;
	      });
	      // fix converting -0 key to +0
	      if(buggyZero){
	        fixSVZ('delete');
	        fixSVZ('has');
	        isMap && fixSVZ('get');
	      }
	      // + fix .add & .set for chaining
	      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
	    }
	    setToStringTag(C, NAME);
	    
	    O[NAME] = C;
	    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
	    
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , O     = iter.o
	        , kind  = iter.k
	        , entry = iter.l;
	      while(entry && entry.r)entry = entry.p;
	      if(!O || !(iter.l = entry = entry ? entry.n : O[FIRST]))return iter.o = undefined, iterResult(1);
	      if(kind == KEY)  return iterResult(0, entry.k);
	      if(kind == VALUE)return iterResult(0, entry.v);
	                       return iterResult(0, [entry.k, entry.v]);   
	    }, isMap ? KEY+VALUE : VALUE, !isMap);
	    
	    return C;
	  }
	  
	  function fastKey(it, create){
	    // return it with 'S' prefix if it's string or with 'P' prefix for over primitives
	    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
	    // if it hasn't object id - add next
	    if(!has(it, UID)){
	      if(create)hidden(it, UID, ++uid);
	      else return '';
	    }
	    // return object id with 'O' prefix
	    return 'O' + it[UID];
	  }
	  
	  function def(that, key, value){
	    var index = fastKey(key, true)
	      , data  = that[DATA]
	      , last  = that[LAST]
	      , entry;
	    if(index in data)data[index].v = value;
	    else {
	      entry = data[index] = {k: key, v: value, p: last};
	      if(!that[FIRST])that[FIRST] = entry;
	      if(last)last.n = entry;
	      that[LAST] = entry;
	      that[SIZE]++;
	    } return that;
	  }
	  function del(that, index){
	    var data  = that[DATA]
	      , entry = data[index]
	      , next  = entry.n
	      , prev  = entry.p;
	    delete data[index];
	    entry.r = true;
	    if(prev)prev.n = next;
	    if(next)next.p = prev;
	    if(that[FIRST] == entry)that[FIRST] = next;
	    if(that[LAST] == entry)that[LAST] = prev;
	    that[SIZE]--;
	  }

	  var collectionMethods = {
	    // 23.1.3.1 Map.prototype.clear()
	    // 23.2.3.2 Set.prototype.clear()
	    clear: function(){
	      for(var index in this[DATA])del(this, index);
	    },
	    // 23.1.3.3 Map.prototype.delete(key)
	    // 23.2.3.4 Set.prototype.delete(value)
	    'delete': function(key){
	      var index    = fastKey(key)
	        , contains = index in this[DATA];
	      if(contains)del(this, index);
	      return contains;
	    },
	    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	    forEach: function(callbackfn /*, that = undefined */){
	      var f = ctx(callbackfn, arguments[1], 3)
	        , entry;
	      while(entry = entry ? entry.n : this[FIRST]){
	        f(entry.v, entry.k, this);
	        while(entry && entry.r)entry = entry.p;
	      }
	    },
	    // 23.1.3.7 Map.prototype.has(key)
	    // 23.2.3.7 Set.prototype.has(value)
	    has: function(key){
	      return fastKey(key) in this[DATA];
	    }
	  }
	  
	  // 23.1 Map Objects
	  Map = getCollection(Map, MAP, {
	    // 23.1.3.6 Map.prototype.get(key)
	    get: function(key){
	      var entry = this[DATA][fastKey(key)];
	      return entry && entry.v;
	    },
	    // 23.1.3.9 Map.prototype.set(key, value)
	    set: function(key, value){
	      return def(this, key === 0 ? 0 : key, value);
	    }
	  }, collectionMethods, true);
	  
	  // 23.2 Set Objects
	  Set = getCollection(Set, SET, {
	    // 23.2.3.1 Set.prototype.add(value)
	    add: function(value){
	      return def(this, value = value === 0 ? 0 : value, value);
	    }
	  }, collectionMethods);
	  
	  function setWeak(that, key, value){
	    has(assertObject(key), WEAK) || hidden(key, WEAK, {});
	    key[WEAK][that[UID]] = value;
	    return that;
	  }
	  function hasWeak(key){
	    return isObject(key) && has(key, WEAK) && has(key[WEAK], this[UID]);
	  }
	  var weakMethods = {
	    // 23.3.3.2 WeakMap.prototype.delete(key)
	    // 23.4.3.3 WeakSet.prototype.delete(value)
	    'delete': function(key){
	      return hasWeak.call(this, key) && delete key[WEAK][this[UID]];
	    },
	    // 23.3.3.4 WeakMap.prototype.has(key)
	    // 23.4.3.4 WeakSet.prototype.has(value)
	    has: hasWeak
	  };
	  
	  // 23.3 WeakMap Objects
	  WeakMap = getCollection(WeakMap, WEAKMAP, {
	    // 23.3.3.3 WeakMap.prototype.get(key)
	    get: function(key){
	      if(isObject(key) && has(key, WEAK))return key[WEAK][this[UID]];
	    },
	    // 23.3.3.5 WeakMap.prototype.set(key, value)
	    set: function(key, value){
	      return setWeak(this, key, value);
	    }
	  }, weakMethods, true, true);
	  
	  // 23.4 WeakSet Objects
	  WeakSet = getCollection(WeakSet, WEAKSET, {
	    // 23.4.3.1 WeakSet.prototype.add(value)
	    add: function(value){
	      return setWeak(this, value, true);
	    }
	  }, weakMethods, false, true);
	}();

	/******************************************************************************
	 * Module : es6_reflect                                                       *
	 ******************************************************************************/

	!function(){
	  function Enumerate(iterated){
	    var keys = [], key;
	    for(key in iterated)keys.push(key);
	    set(this, ITER, {o: iterated, a: keys, i: 0});
	  }
	  createIterator(Enumerate, OBJECT, function(){
	    var iter = this[ITER]
	      , keys = iter.a
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!((key = keys[iter.i++]) in iter.o));
	    return iterResult(0, key);
	  });
	  
	  function wrap(fn){
	    return function(it){
	      assertObject(it);
	      try {
	        return fn.apply(undefined, arguments), true;
	      } catch(e){
	        return false;
	      }
	    }
	  }
	  
	  function reflectGet(target, propertyKey, receiver){
	    if(receiver === undefined)receiver = target;
	    var desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc)return desc.get ? desc.get.call(receiver) : desc.value;
	    return isObject(proto = getPrototypeOf(target)) ? reflectGet(proto, propertyKey, receiver) : undefined;
	  }
	  function reflectSet(target, propertyKey, V, receiver){
	    if(receiver === undefined)receiver = target;
	    var desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc){
	      if(desc.writable === false)return false;
	      if(desc.set)return desc.set.call(receiver, V), true;
	    }
	    if(isObject(proto = getPrototypeOf(target)))return reflectSet(proto, propertyKey, V, receiver);
	    desc = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	    desc.value = V;
	    return defineProperty(receiver, propertyKey, desc), true;
	  }
	  
	  var reflect = {
	    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	    apply: ctx(call, apply, 3),
	    // 26.1.2 Reflect.construct(target, argumentsList)
	    construct: construct,
	    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	    defineProperty: wrap(defineProperty),
	    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	    deleteProperty: function(target, propertyKey){
	      var desc = getOwnDescriptor(assertObject(target), propertyKey);
	      return desc && !desc.configurable ? false : delete target[propertyKey];
	    },
	    // 26.1.5 Reflect.enumerate(target)
	    enumerate: function(target){
	      return new Enumerate(assertObject(target));
	    },
	    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	    get: reflectGet,
	    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	    getOwnPropertyDescriptor: getOwnDescriptor,
	    // 26.1.8 Reflect.getPrototypeOf(target)
	    getPrototypeOf: getPrototypeOf,
	    // 26.1.9 Reflect.has(target, propertyKey)
	    has: function(target, propertyKey){
	      return propertyKey in target;
	    },
	    // 26.1.10 Reflect.isExtensible(target)
	    isExtensible: Object.isExtensible || function(target){
	      return !!assertObject(target);
	    },
	    // 26.1.11 Reflect.ownKeys(target)
	    ownKeys: ownKeys,
	    // 26.1.12 Reflect.preventExtensions(target)
	    preventExtensions: wrap(Object.preventExtensions || returnIt),
	    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	    set: reflectSet
	  }
	  // 26.1.14 Reflect.setPrototypeOf(target, proto)
	  if(setPrototypeOf)reflect.setPrototypeOf = function(target, proto){
	    return setPrototypeOf(assertObject(target), proto), true;
	  };
	  
	  $define(GLOBAL, {Reflect: {}});
	  $define(STATIC, 'Reflect', reflect);
	}();

	/******************************************************************************
	 * Module : es7                                                               *
	 ******************************************************************************/

	!function(){
	  $define(PROTO, ARRAY, {
	    // https://github.com/domenic/Array.prototype.includes
	    includes: createArrayContains(true)
	  });
	  $define(PROTO, STRING, {
	    // https://github.com/mathiasbynens/String.prototype.at
	    at: createPointAt(true)
	  });
	  
	  function createObjectToArray(isEntries){
	    return function(object){
	      var O      = ES5Object(object)
	        , keys   = getKeys(object)
	        , length = keys.length
	        , i      = 0
	        , result = Array(length)
	        , key;
	      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	      else while(length > i)result[i] = O[keys[i++]];
	      return result;
	    }
	  }
	  $define(STATIC, OBJECT, {
	    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	    values: createObjectToArray(false),
	    entries: createObjectToArray(true)
	  });
	  $define(STATIC, REGEXP, {
	    // https://gist.github.com/kangax/9698100
	    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
	  });
	}();

	/******************************************************************************
	 * Module : es7_refs                                                          *
	 ******************************************************************************/

	// https://github.com/zenparsing/es-abstract-refs
	!function(REFERENCE){
	  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
	  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
	    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
	  
	  $define(STATIC, SYMBOL, {
	    referenceGet: REFERENCE_GET,
	    referenceSet: REFERENCE_SET,
	    referenceDelete: REFERENCE_DELETE
	  });
	  
	  hidden(FunctionProto, REFERENCE_GET, returnThis);
	  
	  function setMapMethods(Constructor){
	    if(Constructor){
	      var MapProto = Constructor[PROTOTYPE];
	      hidden(MapProto, REFERENCE_GET, MapProto.get);
	      hidden(MapProto, REFERENCE_SET, MapProto.set);
	      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
	    }
	  }
	  setMapMethods(Map);
	  setMapMethods(WeakMap);
	}('reference');

	/******************************************************************************
	 * Module : dict                                                              *
	 ******************************************************************************/

	!function(DICT){
	  function Dict(iterable){
	    var dict = create(null);
	    if(iterable != undefined){
	      if(isIterable(iterable)){
	        for(var iter = getIterator(iterable), step, value; !(step = iter.next()).done;){
	          value = step.value;
	          dict[value[0]] = value[1];
	        }
	      } else assign(dict, iterable);
	    }
	    return dict;
	  }
	  Dict[PROTOTYPE] = null;
	  
	  function DictIterator(iterated, kind){
	    set(this, ITER, {o: ES5Object(iterated), a: getKeys(iterated), i: 0, k: kind});
	  }
	  createIterator(DictIterator, DICT, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , keys  = iter.a
	      , kind  = iter.k
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!has(O, key = keys[iter.i++]));
	    if(kind == KEY)  return iterResult(0, key);
	    if(kind == VALUE)return iterResult(0, O[key]);
	                     return iterResult(0, [key, O[key]]);
	  });
	  function createDictIter(kind){
	    return function(it){
	      return new DictIterator(it, kind);
	    }
	  }
	  
	  /*
	   * 0 -> forEach
	   * 1 -> map
	   * 2 -> filter
	   * 3 -> some
	   * 4 -> every
	   * 5 -> find
	   * 6 -> findKey
	   * 7 -> mapPairs
	   */
	  function createDictMethod(type){
	    var isMap    = type == 1
	      , isEvery  = type == 4;
	    return function(object, callbackfn, that /* = undefined */){
	      var f      = ctx(callbackfn, that, 3)
	        , O      = ES5Object(object)
	        , result = isMap || type == 7 || type == 2 ? new (generic(this, Dict)) : undefined
	        , key, val, res;
	      for(key in O)if(has(O, key)){
	        val = O[key];
	        res = f(val, key, object);
	        if(type){
	          if(isMap)result[key] = res;             // map
	          else if(res)switch(type){
	            case 2: result[key] = val; break      // filter
	            case 3: return true;                  // some
	            case 5: return val;                   // find
	            case 6: return key;                   // findKey
	            case 7: result[res[0]] = res[1];      // mapPairs
	          } else if(isEvery)return false;         // every
	        }
	      }
	      return type == 3 || isEvery ? isEvery : result;
	    }
	  }
	  function createDictReduce(isTurn){
	    return function(object, mapfn, init){
	      assertFunction(mapfn);
	      var O      = ES5Object(object)
	        , keys   = getKeys(O)
	        , length = keys.length
	        , i      = 0
	        , memo, key, result;
	      if(isTurn)memo = init == undefined ? new (generic(this, Dict)) : Object(init);
	      else if(arguments.length < 3){
	        assert(length, REDUCE_ERROR);
	        memo = O[keys[i++]];
	      } else memo = Object(init);
	      while(length > i)if(has(O, key = keys[i++])){
	        result = mapfn(memo, O[key], key, object);
	        if(isTurn){
	          if(result === false)break;
	        } else memo = result;
	      }
	      return memo;
	    }
	  }
	  var findKey = createDictMethod(6);
	  function includes(object, el){
	    return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
	  }
	  
	  var dictMethods = {
	    keys:    createDictIter(KEY),
	    values:  createDictIter(VALUE),
	    entries: createDictIter(KEY+VALUE),
	    forEach: createDictMethod(0),
	    map:     createDictMethod(1),
	    filter:  createDictMethod(2),
	    some:    createDictMethod(3),
	    every:   createDictMethod(4),
	    find:    createDictMethod(5),
	    findKey: findKey,
	    mapPairs:createDictMethod(7),
	    reduce:  createDictReduce(false),
	    turn:    createDictReduce(true),
	    keyOf:   keyOf,
	    includes:includes,
	    // Has / get / set own property
	    has: has,
	    get: get,
	    set: createDefiner(0),
	    isDict: function(it){
	      return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
	    }
	  };
	  
	  if(REFERENCE_GET)for(var key in dictMethods)!function(fn){
	    function method(){
	      for(var args = [this], i = 0; i < arguments.length;)args.push(arguments[i++]);
	      return invoke(fn, args);
	    }
	    fn[REFERENCE_GET] = function(){
	      return method;
	    }
	  }(dictMethods[key]);
	  
	  $define(GLOBAL + FORCED, {Dict: assignHidden(Dict, dictMethods)});
	}('Dict');

	/******************************************************************************
	 * Module : $for                                                              *
	 ******************************************************************************/

	!function(ENTRIES, FN){  
	  function $for(iterable, entries){
	    if(!(this instanceof $for))return new $for(iterable, entries);
	    this[ITER]    = getIterator(iterable);
	    this[ENTRIES] = !!entries;
	  }
	  
	  createIterator($for, 'Wrapper', function(){
	    return this[ITER].next();
	  });
	  var $forProto = $for[PROTOTYPE];
	  setIterator($forProto, function(){
	    return this[ITER]; // unwrap
	  });
	  
	  function createChainIterator(next){
	    function Iter(I, fn, that){
	      this[ITER]    = getIterator(I);
	      this[ENTRIES] = I[ENTRIES];
	      this[FN]      = ctx(fn, that, I[ENTRIES] ? 2 : 1);
	    }
	    createIterator(Iter, 'Chain', next, $forProto);
	    setIterator(Iter[PROTOTYPE], returnThis); // override $forProto iterator
	    return Iter;
	  }
	  
	  var MapIter = createChainIterator(function(){
	    var step = this[ITER].next();
	    return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
	  });
	  
	  var FilterIter = createChainIterator(function(){
	    for(;;){
	      var step = this[ITER].next();
	      if(step.done || stepCall(this[FN], step.value, this[ENTRIES]))return step;
	    }
	  });
	  
	  assignHidden($forProto, {
	    of: function(fn, that){
	      forOf(this, this[ENTRIES], fn, that);
	    },
	    array: function(fn, that){
	      var result = [];
	      forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
	      return result;
	    },
	    filter: function(fn, that){
	      return new FilterIter(this, fn, that);
	    },
	    map: function(fn, that){
	      return new MapIter(this, fn, that);
	    }
	  });
	  
	  $for.isIterable  = isIterable;
	  $for.getIterator = getIterator;
	  
	  $define(GLOBAL + FORCED, {$for: $for});
	}('entries', safeSymbol('fn'));

	/******************************************************************************
	 * Module : binding                                                           *
	 ******************************************************************************/

	!function(_, toLocaleString){
	  // Placeholder
	  core._ = path._ = path._ || {};

	  $define(PROTO + FORCED, FUNCTION, {
	    part: part,
	    by: function(that){
	      var fn     = this
	        , _      = path._
	        , holder = false
	        , length = arguments.length
	        , isThat = that === _
	        , i      = +!isThat
	        , indent = i
	        , it, args;
	      if(isThat){
	        it = fn;
	        fn = call;
	      } else it = that;
	      if(length < 2)return ctx(fn, it, -1);
	      args = Array(length - indent);
	      while(length > i)if((args[i - indent] = arguments[i++]) === _)holder = true;
	      return partial(fn, args, length, holder, _, true, it);
	    },
	    only: function(numberArguments, that /* = @ */){
	      var fn     = assertFunction(this)
	        , n      = toLength(numberArguments)
	        , isThat = arguments.length > 1;
	      return function(/* ...args */){
	        var length = min(n, arguments.length)
	          , args   = Array(length)
	          , i      = 0;
	        while(length > i)args[i] = arguments[i++];
	        return invoke(fn, args, isThat ? that : this);
	      }
	    }
	  });
	  
	  function tie(key){
	    var that  = this
	      , bound = {};
	    return hidden(that, _, function(key){
	      if(key === undefined || !(key in that))return toLocaleString.call(that);
	      return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
	    })[_](key);
	  }
	  
	  hidden(path._, TO_STRING, function(){
	    return _;
	  });
	  
	  hidden(ObjectProto, _, tie);
	  DESC || hidden(ArrayProto, _, tie);
	  // IE8- dirty hack - redefined toLocaleString is not enumerable
	}(DESC ? uid('tie') : TO_LOCALE, ObjectProto[TO_LOCALE]);

	/******************************************************************************
	 * Module : object                                                            *
	 ******************************************************************************/

	!function(){
	  function define(target, mixin){
	    var keys   = ownKeys(ES5Object(mixin))
	      , length = keys.length
	      , i = 0, key;
	    while(length > i)defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
	    return target;
	  };
	  $define(STATIC + FORCED, OBJECT, {
	    isObject: isObject,
	    classof: classof,
	    define: define,
	    make: function(proto, mixin){
	      return define(create(proto), mixin);
	    }
	  });
	}();

	/******************************************************************************
	 * Module : array                                                             *
	 ******************************************************************************/

	$define(PROTO + FORCED, ARRAY, {
	  turn: function(fn, target /* = [] */){
	    assertFunction(fn);
	    var memo   = target == undefined ? [] : Object(target)
	      , O      = ES5Object(this)
	      , length = toLength(O.length)
	      , index  = 0;
	    while(length > index)if(fn(memo, O[index], index++, this) === false)break;
	    return memo;
	  }
	});

	/******************************************************************************
	 * Module : array_statics                                                     *
	 ******************************************************************************/

	// JavaScript 1.6 / Strawman array statics shim
	!function(arrayStatics){
	  function setArrayStatics(keys, length){
	    forEach.call(array(keys), function(key){
	      if(key in ArrayProto)arrayStatics[key] = ctx(call, ArrayProto[key], length);
	    });
	  }
	  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
	  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	                  'reduce,reduceRight,copyWithin,fill,turn');
	  $define(STATIC, ARRAY, arrayStatics);
	}({});

	/******************************************************************************
	 * Module : number                                                            *
	 ******************************************************************************/

	!function(numberMethods){  
	  function NumberIterator(iterated){
	    set(this, ITER, {l: toLength(iterated), i: 0});
	  }
	  createIterator(NumberIterator, NUMBER, function(){
	    var iter = this[ITER]
	      , i    = iter.i++;
	    return i < iter.l ? iterResult(0, i) : iterResult(1);
	  });
	  defineIterator(Number, NUMBER, function(){
	    return new NumberIterator(this);
	  });
	  
	  numberMethods.random = function(lim /* = 0 */){
	    var a = +this
	      , b = lim == undefined ? 0 : +lim
	      , m = min(a, b);
	    return random() * (max(a, b) - m) + m;
	  };

	  forEach.call(array(
	      // ES3:
	      'round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' +
	      // ES6:
	      'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'
	    ), function(key){
	      var fn = Math[key];
	      if(fn)numberMethods[key] = function(/* ...args */){
	        // ie9- dont support strict mode & convert `this` to object -> convert it to number
	        var args = [+this]
	          , i    = 0;
	        while(arguments.length > i)args.push(arguments[i++]);
	        return invoke(fn, args);
	      }
	    }
	  );
	  
	  $define(PROTO + FORCED, NUMBER, numberMethods);
	}({});

	/******************************************************************************
	 * Module : string                                                            *
	 ******************************************************************************/

	!function(){
	  var escapeHTMLDict = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&apos;'
	  }, unescapeHTMLDict = {}, key;
	  for(key in escapeHTMLDict)unescapeHTMLDict[escapeHTMLDict[key]] = key;
	  $define(PROTO + FORCED, STRING, {
	    escapeHTML:   createReplacer(/[&<>"']/g, escapeHTMLDict),
	    unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
	  });
	}();

	/******************************************************************************
	 * Module : date                                                              *
	 ******************************************************************************/

	!function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR){
	  function createFormat(prefix){
	    return function(template, locale /* = current */){
	      var that = this
	        , dict = locales[has(locales, locale) ? locale : current];
	      function get(unit){
	        return that[prefix + unit]();
	      }
	      return String(template).replace(formatRegExp, function(part){
	        switch(part){
	          case 's'  : return get(SECONDS);                  // Seconds : 0-59
	          case 'ss' : return lz(get(SECONDS));              // Seconds : 00-59
	          case 'm'  : return get(MINUTES);                  // Minutes : 0-59
	          case 'mm' : return lz(get(MINUTES));              // Minutes : 00-59
	          case 'h'  : return get(HOURS);                    // Hours   : 0-23
	          case 'hh' : return lz(get(HOURS));                // Hours   : 00-23
	          case 'D'  : return get(DATE);                     // Date    : 1-31
	          case 'DD' : return lz(get(DATE));                 // Date    : 01-31
	          case 'W'  : return dict[0][get('Day')];           // Day     : Понедельник
	          case 'N'  : return get(MONTH) + 1;                // Month   : 1-12
	          case 'NN' : return lz(get(MONTH) + 1);            // Month   : 01-12
	          case 'M'  : return dict[2][get(MONTH)];           // Month   : Январь
	          case 'MM' : return dict[1][get(MONTH)];           // Month   : Января
	          case 'Y'  : return get(YEAR);                     // Year    : 2014
	          case 'YY' : return lz(get(YEAR) % 100);           // Year    : 14
	        } return part;
	      });
	    }
	  }
	  function lz(num){
	    return num > 9 ? num : '0' + num;
	  }
	  function addLocale(lang, locale){
	    function split(index){
	      var result = [];
	      forEach.call(array(locale.months), function(it){
	        result.push(it.replace(flexioRegExp, '$' + index));
	      });
	      return result;
	    }
	    locales[lang] = [array(locale.weekdays), split(1), split(2)];
	    return core;
	  }
	  $define(PROTO + FORCED, DATE, {
	    format:    createFormat('get'),
	    formatUTC: createFormat('getUTC')
	  });
	  addLocale(current, {
	    weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
	    months: 'January,February,March,April,May,June,July,August,September,October,November,December'
	  });
	  addLocale('ru', {
	    weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
	    months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' +
	            'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
	  });
	  core.locale = function(locale){
	    return has(locales, locale) ? current = locale : current;
	  };
	  core.addLocale = addLocale;
	}(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');
	}(Function('return this'), false);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var ElementOutput = __webpack_require__(18);

	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class Surface
	     * @constructor
	     *
	     * @param {Object} [options] default option overrides
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on target div
	     * @param {Array} [options.properties] string dictionary of CSS properties to set on target div
	     * @param {Array} [options.attributes] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface
	     */
	    function Surface(options) {
	        ElementOutput.call(this);

	        this.options = {};

	        this.properties = {};
	        this.attributes = {};
	        this.content = '';
	        this.classList = [];
	        this.size = null;

	        this._classesDirty = true;
	        this._stylesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._trueSizeCheck = true;

	        this._dirtyClasses = [];

	        if (options) this.setOptions(options);

	        this._currentTarget = null;
	    }
	    Surface.prototype = Object.create(ElementOutput.prototype);
	    Surface.prototype.constructor = Surface;
	    Surface.prototype.elementType = 'div';
	    Surface.prototype.elementClass = 'famous-surface';

	    /**
	     * Set HTML attributes on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setAttributes
	    * @param {Object} attributes property dictionary of "key" => "value"
	     */
	    Surface.prototype.setAttributes = function setAttributes(attributes) {
	        for (var n in attributes) {
	            if (n === 'style') throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');
	            this.attributes[n] = attributes[n];
	        }
	        this._attributesDirty = true;
	    };

	    /**
	     * Get HTML attributes on this Surface.
	     *
	     * @method getAttributes
	     *
	     * @return {Object} Dictionary of this Surface's attributes.
	     */
	    Surface.prototype.getAttributes = function getAttributes() {
	        return this.attributes;
	    };

	    /**
	     * Set CSS-style properties on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setProperties
	     * @chainable
	     * @param {Object} properties property dictionary of "key" => "value"
	     */
	    Surface.prototype.setProperties = function setProperties(properties) {
	        for (var n in properties) {
	            this.properties[n] = properties[n];
	        }
	        this._stylesDirty = true;
	        return this;
	    };

	    /**
	     * Get CSS-style properties on this Surface.
	     *
	     * @method getProperties
	     *
	     * @return {Object} Dictionary of this Surface's properties.
	     */
	    Surface.prototype.getProperties = function getProperties() {
	        return this.properties;
	    };

	    /**
	     * Add CSS-style class to the list of classes on this Surface. Note
	     *   this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method addClass
	     * @chainable
	     * @param {string} className name of class to add
	     */
	    Surface.prototype.addClass = function addClass(className) {
	        if (this.classList.indexOf(className) < 0) {
	            this.classList.push(className);
	            this._classesDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Remove CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method removeClass
	     * @chainable
	     * @param {string} className name of class to remove
	     */
	    Surface.prototype.removeClass = function removeClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
	            this._classesDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Toggle CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method toggleClass
	     * @param {string} className name of class to toggle
	     */
	    Surface.prototype.toggleClass = function toggleClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this.removeClass(className);
	        } else {
	            this.addClass(className);
	        }
	        return this;
	    };

	    /**
	     * Reset class list to provided dictionary.
	     * @method setClasses
	     * @chainable
	     * @param {Array.string} classList
	     */
	    Surface.prototype.setClasses = function setClasses(classList) {
	        var i = 0;
	        var removal = [];
	        for (i = 0; i < this.classList.length; i++) {
	            if (classList.indexOf(this.classList[i]) < 0) removal.push(this.classList[i]);
	        }
	        for (i = 0; i < removal.length; i++) this.removeClass(removal[i]);
	        // duplicates are already checked by addClass()
	        for (i = 0; i < classList.length; i++) this.addClass(classList[i]);
	        return this;
	    };

	    /**
	     * Get array of CSS-style classes attached to this div.
	     *
	     * @method getClasslist
	     * @return {Array.string} array of class names
	     */
	    Surface.prototype.getClassList = function getClassList() {
	        return this.classList;
	    };

	    /**
	     * Set or overwrite inner (HTML) content of this surface. Note that this
	     *    causes a re-rendering if the content has changed.
	     *
	     * @method setContent
	     * @chainable
	     * @param {string|Document Fragment} content HTML content
	     */
	    Surface.prototype.setContent = function setContent(content) {
	        if (this.content !== content) {
	            this.content = content;
	            this._contentDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Return inner (HTML) content of this surface.
	     *
	     * @method getContent
	     *
	     * @return {string} inner (HTML) content
	     */
	    Surface.prototype.getContent = function getContent() {
	        return this.content;
	    };

	    /**
	     * Set options for this surface
	     *
	     * @method setOptions
	     * @chainable
	     * @param {Object} [options] overrides for default options.  See constructor.
	     */
	    Surface.prototype.setOptions = function setOptions(options) {
	        if (options.size) this.setSize(options.size);
	        if (options.classes) this.setClasses(options.classes);
	        if (options.properties) this.setProperties(options.properties);
	        if (options.attributes) this.setAttributes(options.attributes);
	        if (options.content) this.setContent(options.content);
	        return this;
	    };

	    //  Apply to document all changes from removeClass() since last setup().
	    function _cleanupClasses(target) {
	        for (var i = 0; i < this._dirtyClasses.length; i++) target.classList.remove(this._dirtyClasses[i]);
	        this._dirtyClasses = [];
	    }

	    // Apply values of all Famous-managed styles to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = this.properties[n];
	        }
	    }

	    // Clear all Famous-managed styles from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = '';
	        }
	    }

	    // Apply values of all Famous-managed attributes to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyAttributes(target) {
	        for (var n in this.attributes) {
	            target.setAttribute(n, this.attributes[n]);
	        }
	    }

	    // Clear all Famous-managed attributes from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupAttributes(target) {
	        for (var n in this.attributes) {
	            target.removeAttribute(n);
	        }
	    }

	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }

	    /**
	     * One-time setup for an element to be ready for commits to document.
	     *
	     * @private
	     * @method setup
	     *
	     * @param {ElementAllocator} allocator document element pool for this context
	     */
	    Surface.prototype.setup = function setup(allocator) {
	        var target = allocator.allocate(this.elementType);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (var i = 0; i < this.elementClass.length; i++) {
	                    target.classList.add(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.add(this.elementClass);
	            }
	        }
	        target.style.display = '';
	        this.attach(target);
	        this._opacity = null;
	        this._currentTarget = target;
	        this._stylesDirty = true;
	        this._classesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._originDirty = true;
	        this._transformDirty = true;
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    Surface.prototype.commit = function commit(context) {
	        if (!this._currentTarget) this.setup(context.allocator);
	        var target = this._currentTarget;
	        var size = context.size;

	        if (this._classesDirty) {
	            _cleanupClasses.call(this, target);
	            var classList = this.getClassList();
	            for (var i = 0; i < classList.length; i++) target.classList.add(classList[i]);
	            this._classesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this._stylesDirty) {
	            _applyStyles.call(this, target);
	            this._stylesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this._attributesDirty) {
	            _applyAttributes.call(this, target);
	            this._attributesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this.size) {
	            var origSize = context.size;
	            size = [this.size[0], this.size[1]];
	            if (size[0] === undefined) size[0] = origSize[0];
	            if (size[1] === undefined) size[1] = origSize[1];
	            if (size[0] === true || size[1] === true) {
	                if (size[0] === true){
	                    if (this._trueSizeCheck || (this._size[0] === 0)) {
	                        var width = target.offsetWidth;
	                        if (this._size && this._size[0] !== width) {
	                            this._size[0] = width;
	                            this._sizeDirty = true;
	                        }
	                        size[0] = width;
	                    } else {
	                        if (this._size) size[0] = this._size[0];
	                    }
	                }
	                if (size[1] === true){
	                    if (this._trueSizeCheck || (this._size[1] === 0)) {
	                        var height = target.offsetHeight;
	                        if (this._size && this._size[1] !== height) {
	                            this._size[1] = height;
	                            this._sizeDirty = true;
	                        }
	                        size[1] = height;
	                    } else {
	                        if (this._size) size[1] = this._size[1];
	                    }
	                }
	                this._trueSizeCheck = false;
	            }
	        }

	        if (_xyNotEquals(this._size, size)) {
	            if (!this._size) this._size = [0, 0];
	            this._size[0] = size[0];
	            this._size[1] = size[1];

	            this._sizeDirty = true;
	        }

	        if (this._sizeDirty) {
	            if (this._size) {
	                target.style.width = (this.size && this.size[0] === true) ? '' : this._size[0] + 'px';
	                target.style.height = (this.size && this.size[1] === true) ?  '' : this._size[1] + 'px';
	            }

	            this._eventOutput.emit('resize');
	        }

	        if (this._contentDirty) {
	            this.deploy(target);
	            this._eventOutput.emit('deploy');
	            this._contentDirty = false;
	            this._trueSizeCheck = true;
	        }

	        ElementOutput.prototype.commit.call(this, context);
	    };

	    /**
	     *  Remove all Famous-relevant attributes from a document element.
	     *    This is called by SurfaceManager's detach().
	     *    This is in some sense the reverse of .deploy().
	     *
	     * @private
	     * @method cleanup
	     * @param {ElementAllocator} allocator
	     */
	    Surface.prototype.cleanup = function cleanup(allocator) {
	        var i = 0;
	        var target = this._currentTarget;
	        this._eventOutput.emit('recall');
	        this.recall(target);
	        target.style.display = 'none';
	        target.style.opacity = '';
	        target.style.width = '';
	        target.style.height = '';
	        _cleanupStyles.call(this, target);
	        _cleanupAttributes.call(this, target);
	        var classList = this.getClassList();
	        _cleanupClasses.call(this, target);
	        for (i = 0; i < classList.length; i++) target.classList.remove(classList[i]);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (i = 0; i < this.elementClass.length; i++) {
	                    target.classList.remove(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.remove(this.elementClass);
	            }
	        }
	        this.detach(target);
	        this._currentTarget = null;
	        allocator.deallocate(target);
	    };

	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    Surface.prototype.deploy = function deploy(target) {
	        var content = this.getContent();
	        if (content instanceof Node) {
	            while (target.hasChildNodes()) target.removeChild(target.firstChild);
	            target.appendChild(content);
	        }
	        else target.innerHTML = content;
	    };

	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method recall
	     */
	    Surface.prototype.recall = function recall(target) {
	        var df = document.createDocumentFragment();
	        while (target.hasChildNodes()) df.appendChild(target.firstChild);
	        this.setContent(df);
	    };

	    /**
	     *  Get the x and y dimensions of the surface.
	     *
	     * @method getSize
	     * @return {Array.Number} [x,y] size of surface
	     */
	    Surface.prototype.getSize = function getSize() {
	        return this._size ? this._size : this.size;
	    };

	    /**
	     * Set x and y dimensions of the surface.
	     *
	     * @method setSize
	     * @chainable
	     * @param {Array.Number} size as [width, height]
	     */
	    Surface.prototype.setSize = function setSize(size) {
	        this.size = size ? [size[0], size[1]] : null;
	        this._sizeDirty = true;
	        return this;
	    };

	    module.exports = Surface;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * The singleton object initiated upon process
	     *   startup which manages all active Context instances, runs
	     *   the render dispatch loop, and acts as a listener and dispatcher
	     *   for events.  All methods are therefore static.
	     *
	     *   On static initialization, window.requestAnimationFrame is called with
	     *     the event loop function.
	     *
	     *   Note: Any window in which Engine runs will prevent default
	     *     scrolling behavior on the 'touchmove' event.
	     *
	     * @static
	     * @class Engine
	     */
	    var Context = __webpack_require__(19);
	    var EventHandler = __webpack_require__(14);
	    var OptionsManager = __webpack_require__(20);

	    var Engine = {};

	    var contexts = [];

	    var nextTickQueue = [];

	    var currentFrame = 0;
	    var nextTickFrame = 0;

	    var deferQueue = [];

	    var lastTime = Date.now();
	    var frameTime;
	    var frameTimeLimit;
	    var loopEnabled = true;
	    var eventForwarders = {};
	    var eventHandler = new EventHandler();

	    var options = {
	        containerType: 'div',
	        containerClass: 'famous-container',
	        fpsCap: undefined,
	        runLoop: true,
	        appMode: true
	    };
	    var optionsManager = new OptionsManager(options);

	    /** @const */
	    var MAX_DEFER_FRAME_TIME = 10;

	    /**
	     * Inside requestAnimationFrame loop, step() is called, which:
	     *   calculates current FPS (throttling loop if it is over limit set in setFPSCap),
	     *   emits dataless 'prerender' event on start of loop,
	     *   calls in order any one-shot functions registered by nextTick on last loop,
	     *   calls Context.update on all Context objects registered,
	     *   and emits dataless 'postrender' event on end of loop.
	     *
	     * @static
	     * @private
	     * @method step
	     */
	    Engine.step = function step() {
	        currentFrame++;
	        nextTickFrame = currentFrame;

	        var currentTime = Date.now();

	        // skip frame if we're over our framerate cap
	        if (frameTimeLimit && currentTime - lastTime < frameTimeLimit) return;

	        var i = 0;

	        frameTime = currentTime - lastTime;
	        lastTime = currentTime;

	        eventHandler.emit('prerender');

	        // empty the queue
	        var numFunctions = nextTickQueue.length;
	        while (numFunctions--) (nextTickQueue.shift())(currentFrame);

	        // limit total execution time for deferrable functions
	        while (deferQueue.length && (Date.now() - currentTime) < MAX_DEFER_FRAME_TIME) {
	            deferQueue.shift().call(this);
	        }

	        for (i = 0; i < contexts.length; i++) contexts[i].update();

	        eventHandler.emit('postrender');
	    };

	    // engage requestAnimationFrame
	    function loop() {
	        if (options.runLoop) {
	            Engine.step();
	            window.requestAnimationFrame(loop);
	        }
	        else loopEnabled = false;
	    }
	    window.requestAnimationFrame(loop);

	    //
	    // Upon main document window resize (unless on an "input" HTML element):
	    //   scroll to the top left corner of the window,
	    //   and for each managed Context: emit the 'resize' event and update its size.
	    // @param {Object=} event document event
	    //
	    function handleResize(event) {
	        for (var i = 0; i < contexts.length; i++) {
	            contexts[i].emit('resize');
	        }
	        eventHandler.emit('resize');
	    }
	    window.addEventListener('resize', handleResize, false);
	    handleResize();

	    /**
	     * Initialize famous for app mode
	     *
	     * @static
	     * @private
	     * @method initialize
	     */
	    function initialize() {
	        // prevent scrolling via browser
	        window.addEventListener('touchmove', function(event) {
	            event.preventDefault();
	        }, true);

	        addRootClasses();
	    }
	    var initialized = false;

	    function addRootClasses() {
	        if (!document.body) {
	            Engine.nextTick(addRootClasses);
	            return;
	        }

	        document.body.classList.add('famous-root');
	        document.documentElement.classList.add('famous-root');
	    }

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Engine.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(Engine);
	        else return eventHandler.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Engine.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(Engine);
	        else return eventHandler.unpipe(target);
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @static
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Engine.on = function on(type, handler) {
	        if (!(type in eventForwarders)) {
	            eventForwarders[type] = eventHandler.emit.bind(eventHandler, type);

	            addEngineListener(type, eventForwarders[type]);
	        }
	        return eventHandler.on(type, handler);
	    };

	    function addEngineListener(type, forwarder) {
	        if (!document.body) {
	            Engine.nextTick(addEventListener.bind(this, type, forwarder));
	            return;
	        }

	        document.body.addEventListener(type, forwarder);
	    }

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Engine.emit = function emit(type, event) {
	        return eventHandler.emit(type, event);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @static
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Engine.removeListener = function removeListener(type, handler) {
	        return eventHandler.removeListener(type, handler);
	    };

	    /**
	     * Return the current calculated frames per second of the Engine.
	     *
	     * @static
	     * @method getFPS
	     *
	     * @return {Number} calculated fps
	     */
	    Engine.getFPS = function getFPS() {
	        return 1000 / frameTime;
	    };

	    /**
	     * Set the maximum fps at which the system should run. If internal render
	     *    loop is called at a greater frequency than this FPSCap, Engine will
	     *    throttle render and update until this rate is achieved.
	     *
	     * @static
	     * @method setFPSCap
	     *
	     * @param {Number} fps maximum frames per second
	     */
	    Engine.setFPSCap = function setFPSCap(fps) {
	        frameTimeLimit = Math.floor(1000 / fps);
	    };

	    /**
	     * Return engine options.
	     *
	     * @static
	     * @method getOptions
	     * @param {string} key
	     * @return {Object} engine options
	     */
	    Engine.getOptions = function getOptions(key) {
	        return optionsManager.getOptions(key);
	    };

	    /**
	     * Set engine options
	     *
	     * @static
	     * @method setOptions
	     *
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.fpsCap]  maximum fps at which the system should run
	     * @param {boolean} [options.runLoop=true] whether the run loop should continue
	     * @param {string} [options.containerType="div"] type of container element.  Defaults to 'div'.
	     * @param {string} [options.containerClass="famous-container"] type of container element.  Defaults to 'famous-container'.
	     */
	    Engine.setOptions = function setOptions(options) {
	        return optionsManager.setOptions.apply(optionsManager, arguments);
	    };

	    /**
	     * Creates a new Context for rendering and event handling with
	     *    provided document element as top of each tree. This will be tracked by the
	     *    process-wide Engine.
	     *
	     * @static
	     * @method createContext
	     *
	     * @param {Node} el will be top of Famo.us document element tree
	     * @return {Context} new Context within el
	     */
	    Engine.createContext = function createContext(el) {
	        if (!initialized && options.appMode) Engine.nextTick(initialize);

	        var needMountContainer = false;
	        if (!el) {
	            el = document.createElement(options.containerType);
	            el.classList.add(options.containerClass);
	            needMountContainer = true;
	        }

	        var context = new Context(el);
	        Engine.registerContext(context);

	        if (needMountContainer) mount(context, el);

	        return context;
	    };

	    function mount(context, el) {
	        if (!document.body) {
	            Engine.nextTick(mount.bind(this, context, el));
	            return;
	        }

	        document.body.appendChild(el);
	        context.emit('resize');
	    }

	    /**
	     * Registers an existing context to be updated within the run loop.
	     *
	     * @static
	     * @method registerContext
	     *
	     * @param {Context} context Context to register
	     * @return {FamousContext} provided context
	     */
	    Engine.registerContext = function registerContext(context) {
	        contexts.push(context);
	        return context;
	    };

	    /**
	     * Returns a list of all contexts.
	     *
	     * @static
	     * @method getContexts
	     * @return {Array} contexts that are updated on each tick
	     */
	    Engine.getContexts = function getContexts() {
	        return contexts;
	    };

	    /**
	     * Removes a context from the run loop. Note: this does not do any
	     *     cleanup.
	     *
	     * @static
	     * @method deregisterContext
	     *
	     * @param {Context} context Context to deregister
	     */
	    Engine.deregisterContext = function deregisterContext(context) {
	        var i = contexts.indexOf(context);
	        if (i >= 0) contexts.splice(i, 1);
	    };

	    /**
	     * Queue a function to be executed on the next tick of the
	     *    Engine.
	     *
	     * @static
	     * @method nextTick
	     *
	     * @param {function(Object)} fn function accepting window object
	     */
	    Engine.nextTick = function nextTick(fn) {
	        nextTickQueue.push(fn);
	    };

	    /**
	     * Queue a function to be executed sometime soon, at a time that is
	     *    unlikely to affect frame rate.
	     *
	     * @static
	     * @method defer
	     *
	     * @param {Function} fn
	     */
	    Engine.defer = function defer(fn) {
	        deferQueue.push(fn);
	    };

	    optionsManager.on('change', function(data) {
	        if (data.id === 'fpsCap') Engine.setFPSCap(data.value);
	        else if (data.id === 'runLoop') {
	            // kick off the loop only if it was stopped
	            if (!loopEnabled && data.value) {
	                loopEnabled = true;
	                window.requestAnimationFrame(loop);
	            }
	        }
	    });

	    module.exports = Engine;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transform = __webpack_require__(21);

	    /* TODO: remove these dependencies when deprecation complete */
	    var Transitionable = __webpack_require__(22);
	    var TransitionableTransform = __webpack_require__(15);

	    /**
	     *
	     *  A collection of visual changes to be
	     *    applied to another renderable component. This collection includes a
	     *    transform matrix, an opacity constant, a size, an origin specifier.
	     *    Modifier objects can be added to any RenderNode or object
	     *    capable of displaying renderables.  The Modifier's children and descendants
	     *    are transformed by the amounts specified in the Modifier's properties.
	     *
	     * @class Modifier
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Transform} [options.transform] affine transformation matrix
	     * @param {Number} [options.opacity]
	     * @param {Array.Number} [options.origin] origin adjustment
	     * @param {Array.Number} [options.size] size to apply to descendants
	     */
	    function Modifier(options) {
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;

	        /* TODO: remove this when deprecation complete */
	        this._legacyStates = {};

	        this._output = {
	            transform: Transform.identity,
	            opacity: 1,
	            origin: null,
	            align: null,
	            size: null,
	            proportions: null,
	            target: null
	        };

	        if (options) {
	            if (options.transform) this.transformFrom(options.transform);
	            if (options.opacity !== undefined) this.opacityFrom(options.opacity);
	            if (options.origin) this.originFrom(options.origin);
	            if (options.align) this.alignFrom(options.align);
	            if (options.size) this.sizeFrom(options.size);
	            if (options.proportions) this.proportionsFrom(options.proportions);
	        }
	    }

	    /**
	     * Function, object, or static transform matrix which provides the transform.
	     *   This is evaluated on every tick of the engine.
	     *
	     * @method transformFrom
	     *
	     * @param {Object} transform transform provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.transformFrom = function transformFrom(transform) {
	        if (transform instanceof Function) this._transformGetter = transform;
	        else if (transform instanceof Object && transform.get) this._transformGetter = transform.get.bind(transform);
	        else {
	            this._transformGetter = null;
	            this._output.transform = transform;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or number to provide opacity, in range [0,1].
	     *
	     * @method opacityFrom
	     *
	     * @param {Object} opacity provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.opacityFrom = function opacityFrom(opacity) {
	        if (opacity instanceof Function) this._opacityGetter = opacity;
	        else if (opacity instanceof Object && opacity.get) this._opacityGetter = opacity.get.bind(opacity);
	        else {
	            this._opacityGetter = null;
	            this._output.opacity = opacity;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide origin, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method originFrom
	     *
	     * @param {Object} origin provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.originFrom = function originFrom(origin) {
	        if (origin instanceof Function) this._originGetter = origin;
	        else if (origin instanceof Object && origin.get) this._originGetter = origin.get.bind(origin);
	        else {
	            this._originGetter = null;
	            this._output.origin = origin;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide align, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method alignFrom
	     *
	     * @param {Object} align provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.alignFrom = function alignFrom(align) {
	        if (align instanceof Function) this._alignGetter = align;
	        else if (align instanceof Object && align.get) this._alignGetter = align.get.bind(align);
	        else {
	            this._alignGetter = null;
	            this._output.align = align;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide size, as [width, height].
	     *
	     * @method sizeFrom
	     *
	     * @param {Object} size provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.sizeFrom = function sizeFrom(size) {
	        if (size instanceof Function) this._sizeGetter = size;
	        else if (size instanceof Object && size.get) this._sizeGetter = size.get.bind(size);
	        else {
	            this._sizeGetter = null;
	            this._output.size = size;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide proportions, as [percent of width, percent of height].
	     *
	     * @method proportionsFrom
	     *
	     * @param {Object} proportions provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.proportionsFrom = function proportionsFrom(proportions) {
	        if (proportions instanceof Function) this._proportionGetter = proportions;
	        else if (proportions instanceof Object && proportions.get) this._proportionGetter = proportions.get.bind(proportions);
	        else {
	            this._proportionGetter = null;
	            this._output.proportions = proportions;
	        }
	        return this;
	    };

	     /**
	     * Deprecated: Prefer transformFrom with static Transform, or use a TransitionableTransform.
	     * @deprecated
	     * @method setTransform
	     *
	     * @param {Transform} transform Transform to transition to
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setTransform = function setTransform(transform, transition, callback) {
	        if (transition || this._legacyStates.transform) {
	            if (!this._legacyStates.transform) {
	                this._legacyStates.transform = new TransitionableTransform(this._output.transform);
	            }
	            if (!this._transformGetter) this.transformFrom(this._legacyStates.transform);

	            this._legacyStates.transform.set(transform, transition, callback);
	            return this;
	        }
	        else return this.transformFrom(transform);
	    };

	    /**
	     * Deprecated: Prefer opacityFrom with static opacity array, or use a Transitionable with that opacity.
	     * @deprecated
	     * @method setOpacity
	     *
	     * @param {Number} opacity Opacity value to transition to.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
	        if (transition || this._legacyStates.opacity) {
	            if (!this._legacyStates.opacity) {
	                this._legacyStates.opacity = new Transitionable(this._output.opacity);
	            }
	            if (!this._opacityGetter) this.opacityFrom(this._legacyStates.opacity);

	            return this._legacyStates.opacity.set(opacity, transition, callback);
	        }
	        else return this.opacityFrom(opacity);
	    };

	    /**
	     * Deprecated: Prefer originFrom with static origin array, or use a Transitionable with that origin.
	     * @deprecated
	     * @method setOrigin
	     *
	     * @param {Array.Number} origin two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.origin) {

	            if (!this._legacyStates.origin) {
	                this._legacyStates.origin = new Transitionable(this._output.origin || [0, 0]);
	            }
	            if (!this._originGetter) this.originFrom(this._legacyStates.origin);

	            this._legacyStates.origin.set(origin, transition, callback);
	            return this;
	        }
	        else return this.originFrom(origin);
	    };

	    /**
	     * Deprecated: Prefer alignFrom with static align array, or use a Transitionable with that align.
	     * @deprecated
	     * @method setAlign
	     *
	     * @param {Array.Number} align two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setAlign = function setAlign(align, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.align) {

	            if (!this._legacyStates.align) {
	                this._legacyStates.align = new Transitionable(this._output.align || [0, 0]);
	            }
	            if (!this._alignGetter) this.alignFrom(this._legacyStates.align);

	            this._legacyStates.align.set(align, transition, callback);
	            return this;
	        }
	        else return this.alignFrom(align);
	    };

	    /**
	     * Deprecated: Prefer sizeFrom with static origin array, or use a Transitionable with that size.
	     * @deprecated
	     * @method setSize
	     * @param {Array.Number} size two element array of [width, height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setSize = function setSize(size, transition, callback) {
	        if (size && (transition || this._legacyStates.size)) {
	            if (!this._legacyStates.size) {
	                this._legacyStates.size = new Transitionable(this._output.size || [0, 0]);
	            }
	            if (!this._sizeGetter) this.sizeFrom(this._legacyStates.size);

	            this._legacyStates.size.set(size, transition, callback);
	            return this;
	        }
	        else return this.sizeFrom(size);
	    };

	    /**
	     * Deprecated: Prefer proportionsFrom with static origin array, or use a Transitionable with those proportions.
	     * @deprecated
	     * @method setProportions
	     * @param {Array.Number} proportions two element array of [percent of width, percent of height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setProportions = function setProportions(proportions, transition, callback) {
	        if (proportions && (transition || this._legacyStates.proportions)) {
	            if (!this._legacyStates.proportions) {
	                this._legacyStates.proportions = new Transitionable(this._output.proportions || [0, 0]);
	            }
	            if (!this._proportionGetter) this.proportionsFrom(this._legacyStates.proportions);

	            this._legacyStates.proportions.set(proportions, transition, callback);
	            return this;
	        }
	        else return this.proportionsFrom(proportions);
	    };

	    /**
	     * Deprecated: Prefer to stop transform in your provider object.
	     * @deprecated
	     * @method halt
	     */
	    Modifier.prototype.halt = function halt() {
	        if (this._legacyStates.transform) this._legacyStates.transform.halt();
	        if (this._legacyStates.opacity) this._legacyStates.opacity.halt();
	        if (this._legacyStates.origin) this._legacyStates.origin.halt();
	        if (this._legacyStates.align) this._legacyStates.align.halt();
	        if (this._legacyStates.size) this._legacyStates.size.halt();
	        if (this._legacyStates.proportions) this._legacyStates.proportions.halt();
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;
	    };

	    /**
	     * Deprecated: Prefer to use your provided transform or output of your transform provider.
	     * @deprecated
	     * @method getTransform
	     * @return {Object} transform provider object
	     */
	    Modifier.prototype.getTransform = function getTransform() {
	        return this._transformGetter();
	    };

	    /**
	     * Deprecated: Prefer to determine the end state of your transform from your transform provider
	     * @deprecated
	     * @method getFinalTransform
	     * @return {Transform} transform matrix
	     */
	    Modifier.prototype.getFinalTransform = function getFinalTransform() {
	        return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform;
	    };

	    /**
	     * Deprecated: Prefer to use your provided opacity or output of your opacity provider.
	     * @deprecated
	     * @method getOpacity
	     * @return {Object} opacity provider object
	     */
	    Modifier.prototype.getOpacity = function getOpacity() {
	        return this._opacityGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided origin or output of your origin provider.
	     * @deprecated
	     * @method getOrigin
	     * @return {Object} origin provider object
	     */
	    Modifier.prototype.getOrigin = function getOrigin() {
	        return this._originGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided align or output of your align provider.
	     * @deprecated
	     * @method getAlign
	     * @return {Object} align provider object
	     */
	    Modifier.prototype.getAlign = function getAlign() {
	        return this._alignGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided size or output of your size provider.
	     * @deprecated
	     * @method getSize
	     * @return {Object} size provider object
	     */
	    Modifier.prototype.getSize = function getSize() {
	        return this._sizeGetter ? this._sizeGetter() : this._output.size;
	    };

	    /**
	     * Deprecated: Prefer to use your provided proportions or output of your proportions provider.
	     * @deprecated
	     * @method getProportions
	     * @return {Object} proportions provider object
	     */
	    Modifier.prototype.getProportions = function getProportions() {
	        return this._proportionGetter ? this._proportionGetter() : this._output.proportions;
	    };

	    // call providers on tick to receive render spec elements to apply
	    function _update() {
	        if (this._transformGetter) this._output.transform = this._transformGetter();
	        if (this._opacityGetter) this._output.opacity = this._opacityGetter();
	        if (this._originGetter) this._output.origin = this._originGetter();
	        if (this._alignGetter) this._output.align = this._alignGetter();
	        if (this._sizeGetter) this._output.size = this._sizeGetter();
	        if (this._proportionGetter) this._output.proportions = this._proportionGetter();
	    }

	    /**
	     * Return render spec for this Modifier, applying to the provided
	     *    target component.  This is similar to render() for Surfaces.
	     *
	     * @private
	     * @method modify
	     *
	     * @param {Object} target (already rendered) render spec to
	     *    which to apply the transform.
	     * @return {Object} render spec for this Modifier, including the
	     *    provided target
	     */
	    Modifier.prototype.modify = function modify(target) {
	        _update.call(this);
	        this._output.target = target;
	        return this._output;
	    };

	    module.exports = Modifier;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Entity = __webpack_require__(23);
	    var SpecParser = __webpack_require__(24);

	    /**
	     * A wrapper for inserting a renderable component (like a Modifer or
	     *   Surface) into the render tree.
	     *
	     * @class RenderNode
	     * @constructor
	     *
	     * @param {Object} object Target renderable component
	     */
	    function RenderNode(object) {
	        this._object = null;
	        this._child = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = false;
	        this._isModifier = false;

	        this._resultCache = {};
	        this._prevResults = {};

	        this._childResult = null;

	        if (object) this.set(object);
	    }

	    /**
	     * Append a renderable to the list of this node's children.
	     *   This produces a new RenderNode in the tree.
	     *   Note: Does not double-wrap if child is a RenderNode already.
	     *
	     * @method add
	     * @param {Object} child renderable object
	     * @return {RenderNode} new render node wrapping child
	     */
	    RenderNode.prototype.add = function add(child) {
	        var childNode = (child instanceof RenderNode) ? child : new RenderNode(child);
	        if (this._child instanceof Array) this._child.push(childNode);
	        else if (this._child) {
	            this._child = [this._child, childNode];
	            this._hasMultipleChildren = true;
	            this._childResult = []; // to be used later
	        }
	        else this._child = childNode;

	        return childNode;
	    };

	    /**
	     * Return the single wrapped object.  Returns null if this node has multiple child nodes.
	     *
	     * @method get
	     *
	     * @return {Ojbect} contained renderable object
	     */
	    RenderNode.prototype.get = function get() {
	        return this._object || (this._hasMultipleChildren ? null : (this._child ? this._child.get() : null));
	    };

	    /**
	     * Overwrite the list of children to contain the single provided object
	     *
	     * @method set
	     * @param {Object} child renderable object
	     * @return {RenderNode} this render node, or child if it is a RenderNode
	     */
	    RenderNode.prototype.set = function set(child) {
	        this._childResult = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = child.render ? true : false;
	        this._isModifier = child.modify ? true : false;
	        this._object = child;
	        this._child = null;
	        if (child instanceof RenderNode) return child;
	        else return this;
	    };

	    /**
	     * Get render size of contained object.
	     *
	     * @method getSize
	     * @return {Array.Number} size of this or size of single child.
	     */
	    RenderNode.prototype.getSize = function getSize() {
	        var result = null;
	        var target = this.get();
	        if (target && target.getSize) result = target.getSize();
	        if (!result && this._child && this._child.getSize) result = this._child.getSize();
	        return result;
	    };

	    // apply results of rendering this subtree to the document
	    function _applyCommit(spec, context, cacheStorage) {
	        var result = SpecParser.parse(spec, context);
	        var keys = Object.keys(result);
	        for (var i = 0; i < keys.length; i++) {
	            var id = keys[i];
	            var childNode = Entity.get(id);
	            var commitParams = result[id];
	            commitParams.allocator = context.allocator;
	            var commitResult = childNode.commit(commitParams);
	            if (commitResult) _applyCommit(commitResult, context, cacheStorage);
	            else cacheStorage[id] = commitParams;
	        }
	    }

	    /**
	     * Commit the content change from this node to the document.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context render context
	     */
	    RenderNode.prototype.commit = function commit(context) {
	        // free up some divs from the last loop
	        var prevKeys = Object.keys(this._prevResults);
	        for (var i = 0; i < prevKeys.length; i++) {
	            var id = prevKeys[i];
	            if (this._resultCache[id] === undefined) {
	                var object = Entity.get(id);
	                if (object.cleanup) object.cleanup(context.allocator);
	            }
	        }

	        this._prevResults = this._resultCache;
	        this._resultCache = {};
	        _applyCommit(this.render(), context, this._resultCache);
	    };

	    /**
	     * Generate a render spec from the contents of the wrapped component.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render specification for the component subtree
	     *    only under this node.
	     */
	    RenderNode.prototype.render = function render() {
	        if (this._isRenderable) return this._object.render();

	        var result = null;
	        if (this._hasMultipleChildren) {
	            result = this._childResult;
	            var children = this._child;
	            for (var i = 0; i < children.length; i++) {
	                result[i] = children[i].render();
	            }
	        }
	        else if (this._child) result = this._child.render();

	        return this._isModifier ? this._object.modify(result) : result;
	    };

	    module.exports = RenderNode;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventEmitter = __webpack_require__(25);

	    /**
	     * EventHandler forwards received events to a set of provided callback functions.
	     * It allows events to be captured, processed, and optionally piped through to other event handlers.
	     *
	     * @class EventHandler
	     * @extends EventEmitter
	     * @constructor
	     */
	    function EventHandler() {
	        EventEmitter.apply(this, arguments);

	        this.downstream = []; // downstream event handlers
	        this.downstreamFn = []; // downstream functions

	        this.upstream = []; // upstream event handlers
	        this.upstreamListeners = {}; // upstream listeners
	    }
	    EventHandler.prototype = Object.create(EventEmitter.prototype);
	    EventHandler.prototype.constructor = EventHandler;

	    /**
	     * Assign an event handler to receive an object's input events.
	     *
	     * @method setInputHandler
	     * @static
	     *
	     * @param {Object} object object to mix trigger, subscribe, and unsubscribe functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setInputHandler = function setInputHandler(object, handler) {
	        object.trigger = handler.trigger.bind(handler);
	        if (handler.subscribe && handler.unsubscribe) {
	            object.subscribe = handler.subscribe.bind(handler);
	            object.unsubscribe = handler.unsubscribe.bind(handler);
	        }
	    };

	    /**
	     * Assign an event handler to receive an object's output events.
	     *
	     * @method setOutputHandler
	     * @static
	     *
	     * @param {Object} object object to mix pipe, unpipe, on, addListener, and removeListener functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
	        if (handler instanceof EventHandler) handler.bindThis(object);
	        object.pipe = handler.pipe.bind(handler);
	        object.unpipe = handler.unpipe.bind(handler);
	        object.on = handler.on.bind(handler);
	        object.addListener = object.on;
	        object.removeListener = handler.removeListener.bind(handler);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.emit = function emit(type, event) {
	        EventEmitter.prototype.emit.apply(this, arguments);
	        var i = 0;
	        for (i = 0; i < this.downstream.length; i++) {
	            if (this.downstream[i].trigger) this.downstream[i].trigger(type, event);
	        }
	        for (i = 0; i < this.downstreamFn.length; i++) {
	            this.downstreamFn[i](type, event);
	        }
	        return this;
	    };

	    /**
	     * Alias for emit
	     * @method addListener
	     */
	    EventHandler.prototype.trigger = EventHandler.prototype.emit;

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    EventHandler.prototype.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(this);

	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index < 0) downstreamCtx.push(target);

	        if (target instanceof Function) target('pipe', null);
	        else if (target.trigger) target.trigger('pipe', null);

	        return target;
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    EventHandler.prototype.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(this);

	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index >= 0) {
	            downstreamCtx.splice(index, 1);
	            if (target instanceof Function) target('unpipe', null);
	            else if (target.trigger) target.trigger('unpipe', null);
	            return target;
	        }
	        else return false;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.on = function on(type, handler) {
	        EventEmitter.prototype.on.apply(this, arguments);
	        if (!(type in this.upstreamListeners)) {
	            var upstreamListener = this.trigger.bind(this, type);
	            this.upstreamListeners[type] = upstreamListener;
	            for (var i = 0; i < this.upstream.length; i++) {
	                this.upstream[i].on(type, upstreamListener);
	            }
	        }
	        return this;
	    };

	    /**
	     * Alias for "on"
	     * @method addListener
	     */
	    EventHandler.prototype.addListener = EventHandler.prototype.on;

	    /**
	     * Listen for events from an upstream event handler.
	     *
	     * @method subscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.subscribe = function subscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index < 0) {
	            this.upstream.push(source);
	            for (var type in this.upstreamListeners) {
	                source.on(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };

	    /**
	     * Stop listening to events from an upstream event handler.
	     *
	     * @method unsubscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.unsubscribe = function unsubscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index >= 0) {
	            this.upstream.splice(index, 1);
	            for (var type in this.upstreamListeners) {
	                source.removeListener(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };

	    module.exports = EventHandler;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transitionable = __webpack_require__(22);
	    var Transform = __webpack_require__(21);
	    var Utility = __webpack_require__(26);

	    /**
	     * A class for transitioning the state of a Transform by transitioning the
	     * X, Y, and Z axes of it's translate, scale, skew and rotate components
	     * independently.
	     *
	     * @class TransitionableTransform
	     * @constructor
	     *
	     * @param [transform=Transform.identity] {Transform} The initial transform state
	     */
	    function TransitionableTransform(transform) {
	        this._final = Transform.identity.slice();

	        this._finalTranslate = [0, 0, 0];
	        this._finalRotate = [0, 0, 0];
	        this._finalSkew = [0, 0, 0];
	        this._finalScale = [1, 1, 1];

	        this.translate = [];
	        this.rotate    = [];
	        this.skew      = [];
	        this.scale     = [];

	        for (var i=0; i<3; i+=1) {
	            this.translate[i] = new Transitionable(this._finalTranslate[i]);
	            this.rotate[i]    = new Transitionable(this._finalRotate[i]);
	            this.skew[i]      = new Transitionable(this._finalSkew[i]);
	            this.scale[i]     = new Transitionable(this._finalScale[i]);
	        }

	        if (transform) this.set(transform);
	    }

	    function _build() {
	        return Transform.build({
	            translate: [this.translate[0].get(), this.translate[1].get(), this.translate[2].get()],
	            rotate:    [this.rotate[0].get(),    this.rotate[1].get(),    this.rotate[2].get()],
	            skew:      [this.skew[0].get(),      this.skew[1].get(),      this.skew[2].get()],
	            scale:     [this.scale[0].get(),     this.scale[1].get(),     this.scale[2].get()]
	        });
	    }

	    function _buildFinal() {
	        return Transform.build({
	            translate: this._finalTranslate,
	            rotate: this._finalRotate,
	            skew: this._finalSkew,
	            scale: this._finalScale
	        });
	    }

	    function _countOfType(array, type) {
	        var count = 0;
	        for (var i=0; i<array.length; i+=1) {
	            if (typeof array[i] === type+'') {
	                count+=1;
	            }
	        }
	        return count;
	    }

	    /**
	     * An optimized way of setting only the translation component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setTranslate
	     * @chainable
	     *
	     * @param translate {Array}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslate = function setTranslate(translate, transition, callback) {
	        var numberOfAxes = _countOfType(translate, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<translate.length; i+=1) {
	            if (typeof translate[i] === 'number') {
	                this.translate[i].set(translate[i], transition, _callback);
	                this._finalTranslate[i] = translate[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Translate only along the X axis of the translation component of a Transform.
	     *
	     * @method setTranslateX
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateX = function setTranslateX(translate, transition, callback) {
	        this.translate[0].set(translate, transition, callback);
	        this._finalTranslate[0] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Translate only along the Y axis of the translation component of a Transform.
	     *
	     * @method setTranslateY
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateY = function setTranslateY(translate, transition, callback) {
	        this.translate[1].set(translate, transition, callback);
	        this._finalTranslate[1] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Translate only along the Z axis of the translation component of a Transform.
	     *
	     * @method setTranslateZ
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateZ = function setTranslateZ(translate, transition, callback) {
	        this.translate[2].set(translate, transition, callback);
	        this._finalTranslate[2] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the scale component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setScale
	     * @chainable
	     *
	     * @param scale {Array}         New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScale = function setScale(scale, transition, callback) {
	        var numberOfAxes = _countOfType(scale, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<scale.length; i+=1) {
	            if (typeof scale[i] === 'number') {
	                this.scale[i].set(scale[i], transition, _callback);
	                this._finalScale[i] = scale[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Scale only along the X axis of the scale component of a Transform.
	     *
	     * @method setScaleX
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleX = function setScaleX(scale, transition, callback) {
	        this.scale[0].set(scale, transition, callback);
	        this._finalScale[0] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Scale only along the Y axis of the scale component of a Transform.
	     *
	     * @method setScaleY
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleY = function setScaleY(scale, transition, callback) {
	        this.scale[1].set(scale, transition, callback);
	        this._finalScale[1] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Scale only along the Z axis of the scale component of a Transform.
	     *
	     * @method setScaleZ
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleZ = function setScaleZ(scale, transition, callback) {
	        this.scale[2].set(scale, transition, callback);
	        this._finalScale[2] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the rotational component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setRotate
	     * @chainable
	     *
	     * @param eulerAngles {Array}   Euler angles for new rotation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotate = function setRotate(eulerAngles, transition, callback) {
	        var numberOfAxes = _countOfType(eulerAngles, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<eulerAngles.length; i+=1) {
	            if (typeof eulerAngles[i] === 'number') {
	                this.rotate[i].set(eulerAngles[i], transition, _callback);
	                this._finalRotate[i] = eulerAngles[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Rotate only about the X axis of the rotational component of a Transform.
	     *
	     * @method setScaleX
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateX = function setRotateX(eulerAngle, transition, callback) {
	        this.rotate[0].set(eulerAngle, transition, callback);
	        this._finalRotate[0] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Rotate only about the Y axis of the rotational component of a Transform.
	     *
	     * @method setScaleY
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateY = function setRotateY(eulerAngle, transition, callback) {
	        this.rotate[1].set(eulerAngle, transition, callback);
	        this._finalRotate[1] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Rotate only about the Z axis of the rotational component of a Transform.
	     *
	     * @method setScaleZ
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateZ = function setRotateZ(eulerAngle, transition, callback) {
	        this.rotate[2].set(eulerAngle, transition, callback);
	        this._finalRotate[2] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the skew component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setSkew
	     * @chainable
	     *
	     * @param skewAngles {Array}    New skew state. Axes who's values are null will not be affected.
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkew = function setSkew(skewAngles, transition, callback) {
	        var numberOfAxes = _countOfType(skewAngles, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<skewAngles.length; i+=1) {
	            if (typeof skewAngles[i] === 'number') {
	                this.skew[i].set(skewAngles[i], transition, _callback);
	                this._finalSkew[i] = skewAngles[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Skew only about the X axis of the skew component of a Transform.
	     *
	     * @method setSkewX
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewX = function setSkewX(skewAngle, transition, callback) {
	        this.skew[0].set(skewAngle, transition, callback);
	        this._finalSkew[0] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Skew only about the Y axis of the skew component of a Transform.
	     *
	     * @method setSkewY
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewY = function setSkewY(skewAngle, transition, callback) {
	        this.skew[1].set(skewAngle, transition, callback);
	        this._finalSkew[1] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Skew only about the Z axis of the skew component of a Transform.
	     *
	     * @method setSkewZ
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewZ = function setSkewZ(skewAngle, transition, callback) {
	        this.skew[2].set(skewAngle, transition, callback);
	        this._finalSkew[2] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };

	    /**
	     * Setter for a TransitionableTransform with optional parameters to transition
	     * between Transforms. Animates all axes of all components.
	     *
	     * @method set
	     * @chainable
	     *
	     * @param transform {Array}     New transform state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.set = function set(transform, transition, callback) {
	        var components = Transform.interpret(transform);

	        this._finalTranslate = components.translate;
	        this._finalRotate = components.rotate;
	        this._finalSkew = components.skew;
	        this._finalScale = components.scale;
	        this._final = transform;

	        var _callback = callback ? Utility.after(12, callback) : null;
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].set(components.translate[i], transition, _callback);
	            this.rotate[i].set(components.rotate[i], transition, _callback);
	            this.skew[i].set(components.skew[i], transition, _callback);
	            this.scale[i].set(components.scale[i], transition, _callback);
	        }
	        return this;
	    };

	    /**
	     * Sets the default transition to use for transitioning betwen Transform states
	     *
	     * @method setDefaultTransition
	     *
	     * @param transition {Object} Transition definition
	     */
	    TransitionableTransform.prototype.setDefaultTransition = function setDefaultTransition(transition) {
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].setDefault(transition);
	            this.rotate[i].setDefault(transition);
	            this.skew[i].setDefault(transition);
	            this.scale[i].setDefault(transition);
	        }
	    };

	    /**
	     * Getter. Returns the current state of the Transform
	     *
	     * @method get
	     *
	     * @return {Transform}
	     */
	    TransitionableTransform.prototype.get = function get() {
	        if (this.isActive()) {
	            return _build.call(this);
	        }
	        else return this._final;
	    };

	    /**
	     * Get the destination state of the Transform
	     *
	     * @method getFinal
	     *
	     * @return Transform {Transform}
	     */
	    TransitionableTransform.prototype.getFinal = function getFinal() {
	        return this._final;
	    };

	    /**
	     * Determine if the TransitionableTransform is currently transitioning
	     *
	     * @method isActive
	     *
	     * @return {Boolean}
	     */
	    TransitionableTransform.prototype.isActive = function isActive() {
	        var isActive = false;

	        for (var i=0; i<3; i+=1) {
	            if (
	                this.translate[i].isActive()
	                || this.rotate[i].isActive()
	                || this.skew[i].isActive()
	                || this.scale[i].isActive()
	            ) {
	                isActive = true; break;
	            }
	        }
	        return isActive;
	    };

	    /**
	     * Halts the transition
	     *
	     * @method halt
	     */
	    TransitionableTransform.prototype.halt = function halt() {
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].halt();
	            this.rotate[i].halt();
	            this.skew[i].halt();
	            this.scale[i].halt();

	            this._finalTranslate[i] = this.translate[i].get();
	            this._finalRotate[i] = this.rotate[i].get();
	            this._finalSkew[i] = this.skew[i].get();
	            this._finalScale[i] = this.scale[i].get();
	        }

	        this._final = this.get();

	        return this;
	    };

	    module.exports = TransitionableTransform;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	// Polyfill for Function.name on browsers that do not support it (IE):
	// See: http://stackoverflow.com/questions/6903762/function-name-not-supported-in-ie
	if (!(function f() {}).name) {
	    Object.defineProperty(Function.prototype, 'name', {
	        get: function() {
	            var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

	            // For better performance only parse once, and then cache the
	            // result through a new accessor for repeated access.
	            Object.defineProperty(this, 'name', { value: name });

	            return name;
	        }
	    });
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Entity = __webpack_require__(23);
	    var EventHandler = __webpack_require__(14);
	    var Transform = __webpack_require__(21);

	    var usePrefix = !('transform' in document.documentElement.style);
	    var devicePixelRatio = window.devicePixelRatio || 1;

	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class ElementOutput
	     * @constructor
	     *
	     * @param {Node} element document parent of this container
	     */
	    function ElementOutput(element) {
	        this._matrix = null;
	        this._opacity = 1;
	        this._origin = null;
	        this._size = null;

	        this._eventOutput = new EventHandler();
	        this._eventOutput.bindThis(this);

	        /** @ignore */
	        this.eventForwarder = function eventForwarder(event) {
	            this._eventOutput.emit(event.type, event);
	        }.bind(this);

	        this.id = Entity.register(this);
	        this._element = null;
	        this._sizeDirty = false;
	        this._originDirty = false;
	        this._transformDirty = false;

	        this._invisible = false;
	        if (element) this.attach(element);
	    }

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler callback
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.on = function on(type, fn) {
	        if (this._element) this._element.addEventListener(type, this.eventForwarder);
	        this._eventOutput.on(type, fn);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on"
	     *
	     * @method removeListener
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler
	     */
	    ElementOutput.prototype.removeListener = function removeListener(type, fn) {
	        this._eventOutput.removeListener(type, fn);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} [event] event data
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.emit = function emit(type, event) {
	        if (event && !event.origin) event.origin = this;
	        var handled = this._eventOutput.emit(type, event);
	        if (handled && event && event.stopPropagation) event.stopPropagation();
	        return handled;
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    ElementOutput.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    ElementOutput.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };

	    /**
	     * Return spec for this surface. Note that for a base surface, this is
	     *    simply an id.
	     *
	     * @method render
	     * @private
	     * @return {Object} render spec for this surface (spec id)
	     */
	    ElementOutput.prototype.render = function render() {
	        return this.id;
	    };

	    //  Attach Famous event handling to document events emanating from target
	    //    document element.  This occurs just after attachment to the document.
	    //    Calling this enables methods like #on and #pipe.
	    function _addEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.addEventListener(i, this.eventForwarder);
	        }
	    }

	    //  Detach Famous event handling from document events emanating from target
	    //  document element.  This occurs just before detach from the document.
	    function _removeEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.removeEventListener(i, this.eventForwarder);
	        }
	    }

	    /**
	     * Return a Matrix's webkit css representation to be used with the
	     *    CSS3 -webkit-transform style.
	     *    Example: -webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
	     *
	     * @method _formatCSSTransform
	     * @private
	     * @param {FamousMatrix} m matrix
	     * @return {string} matrix3d CSS style representation of the transform
	     */
	    function _formatCSSTransform(m) {
	        m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
	        m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;

	        var result = 'matrix3d(';
	        for (var i = 0; i < 15; i++) {
	            result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
	        }
	        result += m[15] + ')';
	        return result;
	    }

	    /**
	     * Directly apply given FamousMatrix to the document element as the
	     *   appropriate webkit CSS style.
	     *
	     * @method setMatrix
	     *
	     * @static
	     * @private
	     * @param {Element} element document element
	     * @param {FamousMatrix} matrix
	     */

	    var _setMatrix;
	    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
	        _setMatrix = function(element, matrix) {
	            element.style.zIndex = (matrix[14] * 1000000) | 0;    // fix for Firefox z-buffer issues
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }
	    else if (usePrefix) {
	        _setMatrix = function(element, matrix) {
	            element.style.webkitTransform = _formatCSSTransform(matrix);
	        };
	    }
	    else {
	        _setMatrix = function(element, matrix) {
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }

	    // format origin as CSS percentage string
	    function _formatCSSOrigin(origin) {
	        return (100 * origin[0]) + '% ' + (100 * origin[1]) + '%';
	    }

	    // Directly apply given origin coordinates to the document element as the
	    // appropriate webkit CSS style.
	    var _setOrigin = usePrefix ? function(element, origin) {
	        element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
	    } : function(element, origin) {
	        element.style.transformOrigin = _formatCSSOrigin(origin);
	    };

	    // Shrink given document element until it is effectively invisible.
	    var _setInvisible = usePrefix ? function(element) {
	        element.style.webkitTransform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    } : function(element) {
	        element.style.transform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    };

	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    ElementOutput.prototype.commit = function commit(context) {
	        var target = this._element;
	        if (!target) return;

	        var matrix = context.transform;
	        var opacity = context.opacity;
	        var origin = context.origin;
	        var size = context.size;

	        if (!matrix && this._matrix) {
	            this._matrix = null;
	            this._opacity = 0;
	            _setInvisible(target);
	            return;
	        }

	        if (_xyNotEquals(this._origin, origin)) this._originDirty = true;
	        if (Transform.notEquals(this._matrix, matrix)) this._transformDirty = true;

	        if (this._invisible) {
	            this._invisible = false;
	            this._element.style.display = '';
	        }

	        if (this._opacity !== opacity) {
	            this._opacity = opacity;
	            target.style.opacity = (opacity >= 1) ? '0.999999' : opacity;
	        }

	        if (this._transformDirty || this._originDirty || this._sizeDirty) {
	            if (this._sizeDirty) this._sizeDirty = false;

	            if (this._originDirty) {
	                if (origin) {
	                    if (!this._origin) this._origin = [0, 0];
	                    this._origin[0] = origin[0];
	                    this._origin[1] = origin[1];
	                }
	                else this._origin = null;
	                _setOrigin(target, this._origin);
	                this._originDirty = false;
	            }

	            if (!matrix) matrix = Transform.identity;
	            this._matrix = matrix;
	            var aaMatrix = this._size ? Transform.thenMove(matrix, [-this._size[0]*origin[0], -this._size[1]*origin[1], 0]) : matrix;
	            _setMatrix(target, aaMatrix);
	            this._transformDirty = false;
	        }
	    };

	    ElementOutput.prototype.cleanup = function cleanup() {
	        if (this._element) {
	            this._invisible = true;
	            this._element.style.display = 'none';
	        }
	    };

	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method attach
	     * @param {Node} target document parent of this container
	     */
	    ElementOutput.prototype.attach = function attach(target) {
	        this._element = target;
	        _addEventListeners.call(this, target);
	    };

	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method detach
	     */
	    ElementOutput.prototype.detach = function detach() {
	        var target = this._element;
	        if (target) {
	            _removeEventListeners.call(this, target);
	            if (this._invisible) {
	                this._invisible = false;
	                this._element.style.display = '';
	            }
	        }
	        this._element = null;
	        return target;
	    };

	    module.exports = ElementOutput;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var RenderNode = __webpack_require__(13);
	    var EventHandler = __webpack_require__(14);
	    var ElementAllocator = __webpack_require__(27);
	    var Transform = __webpack_require__(21);
	    var Transitionable = __webpack_require__(22);

	    var _zeroZero = [0, 0];
	    var usePrefix = !('perspective' in document.documentElement.style);

	    function _getElementSize(element) {
	        return [element.clientWidth, element.clientHeight];
	    }

	    var _setPerspective = usePrefix ? function(element, perspective) {
	        element.style.webkitPerspective = perspective ? perspective.toFixed() + 'px' : '';
	    } : function(element, perspective) {
	        element.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
	    };

	    /**
	     * The top-level container for a Famous-renderable piece of the document.
	     *   It is directly updated by the process-wide Engine object, and manages one
	     *   render tree root, which can contain other renderables.
	     *
	     * @class Context
	     * @constructor
	     * @private
	     * @param {Node} container Element in which content will be inserted
	     */
	    function Context(container) {
	        this.container = container;
	        this._allocator = new ElementAllocator(container);

	        this._node = new RenderNode();
	        this._eventOutput = new EventHandler();
	        this._size = _getElementSize(this.container);

	        this._perspectiveState = new Transitionable(0);
	        this._perspective = undefined;

	        this._nodeContext = {
	            allocator: this._allocator,
	            transform: Transform.identity,
	            opacity: 1,
	            origin: _zeroZero,
	            align: _zeroZero,
	            size: this._size
	        };

	        this._eventOutput.on('resize', function() {
	            this.setSize(_getElementSize(this.container));
	        }.bind(this));

	    }

	    // Note: Unused
	    Context.prototype.getAllocator = function getAllocator() {
	        return this._allocator;
	    };

	    /**
	     * Add renderables to this Context's render tree.
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    Context.prototype.add = function add(obj) {
	        return this._node.add(obj);
	    };

	    /**
	     * Move this Context to another containing document element.
	     *
	     * @method migrate
	     *
	     * @param {Node} container Element to which content will be migrated
	     */
	    Context.prototype.migrate = function migrate(container) {
	        if (container === this.container) return;
	        this.container = container;
	        this._allocator.migrate(container);
	    };

	    /**
	     * Gets viewport size for Context.
	     *
	     * @method getSize
	     *
	     * @return {Array.Number} viewport size as [width, height]
	     */
	    Context.prototype.getSize = function getSize() {
	        return this._size;
	    };

	    /**
	     * Sets viewport size for Context.
	     *
	     * @method setSize
	     *
	     * @param {Array.Number} size [width, height].  If unspecified, use size of root document element.
	     */
	    Context.prototype.setSize = function setSize(size) {
	        if (!size) size = _getElementSize(this.container);
	        this._size[0] = size[0];
	        this._size[1] = size[1];
	    };

	    /**
	     * Commit this Context's content changes to the document.
	     *
	     * @private
	     * @method update
	     * @param {Object} contextParameters engine commit specification
	     */
	    Context.prototype.update = function update(contextParameters) {
	        if (contextParameters) {
	            if (contextParameters.transform) this._nodeContext.transform = contextParameters.transform;
	            if (contextParameters.opacity) this._nodeContext.opacity = contextParameters.opacity;
	            if (contextParameters.origin) this._nodeContext.origin = contextParameters.origin;
	            if (contextParameters.align) this._nodeContext.align = contextParameters.align;
	            if (contextParameters.size) this._nodeContext.size = contextParameters.size;
	        }
	        var perspective = this._perspectiveState.get();
	        if (perspective !== this._perspective) {
	            _setPerspective(this.container, perspective);
	            this._perspective = perspective;
	        }

	        this._node.commit(this._nodeContext);
	    };

	    /**
	     * Get current perspective of this context in pixels.
	     *
	     * @method getPerspective
	     * @return {Number} depth perspective in pixels
	     */
	    Context.prototype.getPerspective = function getPerspective() {
	        return this._perspectiveState.get();
	    };

	    /**
	     * Set current perspective of this context in pixels.
	     *
	     * @method setPerspective
	     * @param {Number} perspective in pixels
	     * @param {Object} [transition] Transitionable object for applying the change
	     * @param {function(Object)} callback function called on completion of transition
	     */
	    Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
	        return this._perspectiveState.set(perspective, transition, callback);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Context.prototype.emit = function emit(type, event) {
	        return this._eventOutput.emit(type, event);
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Context.prototype.on = function on(type, handler) {
	        return this._eventOutput.on(type, handler);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Context.prototype.removeListener = function removeListener(type, handler) {
	        return this._eventOutput.removeListener(type, handler);
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Context.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Context.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };

	    module.exports = Context;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(14);

	    /**
	     *  A collection of methods for setting options which can be extended
	     *  onto other classes.
	     *
	     *
	     *  **** WARNING ****
	     *  You can only pass through objects that will compile into valid JSON.
	     *
	     *  Valid options:
	     *      Strings,
	     *      Arrays,
	     *      Objects,
	     *      Numbers,
	     *      Nested Objects,
	     *      Nested Arrays.
	     *
	     *    This excludes:
	     *        Document Fragments,
	     *        Functions
	     * @class OptionsManager
	     * @constructor
	     * @param {Object} value options dictionary
	     */
	    function OptionsManager(value) {
	        this._value = value;
	        this.eventOutput = null;
	    }

	    /**
	     * Create options manager from source dictionary with arguments overriden by patch dictionary.
	     *
	     * @static
	     * @method OptionsManager.patch
	     *
	     * @param {Object} source source arguments
	     * @param {...Object} data argument additions and overwrites
	     * @return {Object} source object
	     */
	    OptionsManager.patch = function patchObject(source, data) {
	        var manager = new OptionsManager(source);
	        for (var i = 1; i < arguments.length; i++) manager.patch(arguments[i]);
	        return source;
	    };

	    function _createEventOutput() {
	        this.eventOutput = new EventHandler();
	        this.eventOutput.bindThis(this);
	        EventHandler.setOutputHandler(this, this.eventOutput);
	    }

	    /**
	     * Create OptionsManager from source with arguments overriden by patches.
	     *   Triggers 'change' event on this object's event handler if the state of
	     *   the OptionsManager changes as a result.
	     *
	     * @method patch
	     *
	     * @param {...Object} arguments list of patch objects
	     * @return {OptionsManager} this
	     */
	    OptionsManager.prototype.patch = function patch() {
	        var myState = this._value;
	        for (var i = 0; i < arguments.length; i++) {
	            var data = arguments[i];
	            for (var k in data) {
	                if ((k in myState) && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
	                    if (!myState.hasOwnProperty(k)) myState[k] = Object.create(myState[k]);
	                    this.key(k).patch(data[k]);
	                    if (this.eventOutput) this.eventOutput.emit('change', {id: k, value: this.key(k).value()});
	                }
	                else this.set(k, data[k]);
	            }
	        }
	        return this;
	    };

	    /**
	     * Alias for patch
	     *
	     * @method setOptions
	     *
	     */
	    OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;

	    /**
	     * Return OptionsManager based on sub-object retrieved by key
	     *
	     * @method key
	     *
	     * @param {string} identifier key
	     * @return {OptionsManager} new options manager with the value
	     */
	    OptionsManager.prototype.key = function key(identifier) {
	        var result = new OptionsManager(this._value[identifier]);
	        if (!(result._value instanceof Object) || result._value instanceof Array) result._value = {};
	        return result;
	    };

	    /**
	     * Look up value by key or get the full options hash
	     * @method get
	     *
	     * @param {string} key key
	     * @return {Object} associated object or full options hash
	     */
	    OptionsManager.prototype.get = function get(key) {
	        return key ? this._value[key] : this._value;
	    };

	    /**
	     * Alias for get
	     * @method getOptions
	     */
	    OptionsManager.prototype.getOptions = OptionsManager.prototype.get;

	    /**
	     * Set key to value.  Outputs 'change' event if a value is overwritten.
	     *
	     * @method set
	     *
	     * @param {string} key key string
	     * @param {Object} value value object
	     * @return {OptionsManager} new options manager based on the value object
	     */
	    OptionsManager.prototype.set = function set(key, value) {
	        var originalValue = this.get(key);
	        this._value[key] = value;
	        if (this.eventOutput && value !== originalValue) this.eventOutput.emit('change', {id: key, value: value});
	        return this;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    OptionsManager.prototype.on = function on() {
	        _createEventOutput.call(this);
	        return this.on.apply(this, arguments);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    OptionsManager.prototype.removeListener = function removeListener() {
	        _createEventOutput.call(this);
	        return this.removeListener.apply(this, arguments);
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    OptionsManager.prototype.pipe = function pipe() {
	        _createEventOutput.call(this);
	        return this.pipe.apply(this, arguments);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     * Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    OptionsManager.prototype.unpipe = function unpipe() {
	        _createEventOutput.call(this);
	        return this.unpipe.apply(this, arguments);
	    };

	    module.exports = OptionsManager;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     *  A high-performance static matrix math library used to calculate
	     *    affine transforms on surfaces and other renderables.
	     *    Famo.us uses 4x4 matrices corresponding directly to
	     *    WebKit matrices (column-major order).
	     *
	     *    The internal "type" of a Matrix is a 16-long float array in
	     *    row-major order, with:
	     *    elements [0],[1],[2],[4],[5],[6],[8],[9],[10] forming the 3x3
	     *          transformation matrix;
	     *    elements [12], [13], [14] corresponding to the t_x, t_y, t_z
	     *           translation;
	     *    elements [3], [7], [11] set to 0;
	     *    element [15] set to 1.
	     *    All methods are static.
	     *
	     * @static
	     *
	     * @class Transform
	     */
	    var Transform = {};

	    // WARNING: these matrices correspond to WebKit matrices, which are
	    //    transposed from their math counterparts
	    Transform.precision = 1e-6;
	    Transform.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

	    /**
	     * Multiply two or more Transform matrix types to return a Transform matrix.
	     *
	     * @method multiply4x4
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply4x4 = function multiply4x4(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
	            a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
	            a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
	            a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
	            a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
	        ];
	    };

	    /**
	     * Fast-multiply two or more Transform matrix types to return a
	     *    Matrix, assuming bottom row on each is [0 0 0 1].
	     *
	     * @method multiply
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply = function multiply(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
	            0,
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
	            0,
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
	            0,
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
	            1
	        ];
	    };

	    /**
	     * Return a Transform translated by additional amounts in each
	     *    dimension. This is equivalent to the result of
	     *
	     *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
	     *
	     * @method thenMove
	     * @static
	     * @param {Transform} m a Transform
	     * @param {Array.Number} t floats delta vector of length 2 or 3
	     * @return {Transform}
	     */
	    Transform.thenMove = function thenMove(m, t) {
	        if (!t[2]) t[2] = 0;
	        return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
	    };

	    /**
	     * Return a Transform matrix which represents the result of a transform matrix
	     *    applied after a move. This is faster than the equivalent multiply.
	     *    This is equivalent to the result of:
	     *
	     *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
	     *
	     * @method moveThen
	     * @static
	     * @param {Array.Number} v vector representing initial movement
	     * @param {Transform} m matrix to apply afterwards
	     * @return {Transform} the resulting matrix
	     */
	    Transform.moveThen = function moveThen(v, m) {
	        if (!v[2]) v[2] = 0;
	        var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
	        var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
	        var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };

	    /**
	     * Return a Transform which represents a translation by specified
	     *    amounts in each dimension.
	     *
	     * @method translate
	     * @static
	     * @param {Number} x x translation
	     * @param {Number} y y translation
	     * @param {Number} z z translation
	     * @return {Transform}
	     */
	    Transform.translate = function translate(x, y, z) {
	        if (z === undefined) z = 0;
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
	    };

	    /**
	     * Return a Transform scaled by a vector in each
	     *    dimension. This is a more performant equivalent to the result of
	     *
	     *    Transform.multiply(Transform.scale(s[0], s[1], s[2]), m).
	     *
	     * @method thenScale
	     * @static
	     * @param {Transform} m a matrix
	     * @param {Array.Number} s delta vector (array of floats &&
	     *    array.length == 3)
	     * @return {Transform}
	     */
	    Transform.thenScale = function thenScale(m, s) {
	        return [
	            s[0] * m[0], s[1] * m[1], s[2] * m[2], 0,
	            s[0] * m[4], s[1] * m[5], s[2] * m[6], 0,
	            s[0] * m[8], s[1] * m[9], s[2] * m[10], 0,
	            s[0] * m[12], s[1] * m[13], s[2] * m[14], 1
	        ];
	    };

	    /**
	     * Return a Transform which represents a scale by specified amounts
	     *    in each dimension.
	     *
	     * @method scale
	     * @static
	     * @param {Number} x x scale factor
	     * @param {Number} y y scale factor
	     * @param {Number} z z scale factor
	     * @return {Transform}
	     */
	    Transform.scale = function scale(x, y, z) {
	        if (z === undefined) z = 1;
	        if (y === undefined) y = x;
	        return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the x axis.
	     *
	     * @method rotateX
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateX = function rotateX(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the y axis.
	     *
	     * @method rotateY
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateY = function rotateY(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the z axis.
	     *
	     * @method rotateZ
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateZ = function rotateZ(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents composed clockwise
	     *    rotations along each of the axes. Equivalent to the result of
	     *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
	     *
	     * @method rotate
	     * @static
	     * @param {Number} phi radians to rotate about the positive x axis
	     * @param {Number} theta radians to rotate about the positive y axis
	     * @param {Number} psi radians to rotate about the positive z axis
	     * @return {Transform}
	     */
	    Transform.rotate = function rotate(phi, theta, psi) {
	        var cosPhi = Math.cos(phi);
	        var sinPhi = Math.sin(phi);
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        var cosPsi = Math.cos(psi);
	        var sinPsi = Math.sin(psi);
	        var result = [
	            cosTheta * cosPsi,
	            cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
	            sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
	            0,
	            -cosTheta * sinPsi,
	            cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
	            sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
	            0,
	            sinTheta,
	            -sinPhi * cosTheta,
	            cosPhi * cosTheta,
	            0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };

	    /**
	     * Return a Transform which represents an axis-angle rotation
	     *
	     * @method rotateAxis
	     * @static
	     * @param {Array.Number} v unit vector representing the axis to rotate about
	     * @param {Number} theta radians to rotate clockwise about the axis
	     * @return {Transform}
	     */
	    Transform.rotateAxis = function rotateAxis(v, theta) {
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	        var verTheta = 1 - cosTheta; // versine of theta

	        var xxV = v[0] * v[0] * verTheta;
	        var xyV = v[0] * v[1] * verTheta;
	        var xzV = v[0] * v[2] * verTheta;
	        var yyV = v[1] * v[1] * verTheta;
	        var yzV = v[1] * v[2] * verTheta;
	        var zzV = v[2] * v[2] * verTheta;
	        var xs = v[0] * sinTheta;
	        var ys = v[1] * sinTheta;
	        var zs = v[2] * sinTheta;

	        var result = [
	            xxV + cosTheta, xyV + zs, xzV - ys, 0,
	            xyV - zs, yyV + cosTheta, yzV + xs, 0,
	            xzV + ys, yzV - xs, zzV + cosTheta, 0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };

	    /**
	     * Return a Transform which represents a transform matrix applied about
	     * a separate origin point.
	     *
	     * @method aboutOrigin
	     * @static
	     * @param {Array.Number} v origin point to apply matrix
	     * @param {Transform} m matrix to apply
	     * @return {Transform}
	     */
	    Transform.aboutOrigin = function aboutOrigin(v, m) {
	        var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
	        var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
	        var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };

	    /**
	     * Return a Transform representation of a skew transformation
	     *
	     * @method skew
	     * @static
	     * @param {Number} phi scale factor skew in the x axis
	     * @param {Number} theta scale factor skew in the y axis
	     * @param {Number} psi scale factor skew in the z axis
	     * @return {Transform}
	     */
	    Transform.skew = function skew(phi, theta, psi) {
	        return [1, Math.tan(theta), 0, 0, Math.tan(psi), 1, 0, 0, 0, Math.tan(phi), 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform representation of a skew in the x-direction
	     *
	     * @method skewX
	     * @static
	     * @param {Number} angle the angle between the top and left sides
	     * @return {Transform}
	     */
	    Transform.skewX = function skewX(angle) {
	        return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform representation of a skew in the y-direction
	     *
	     * @method skewY
	     * @static
	     * @param {Number} angle the angle between the top and right sides
	     * @return {Transform}
	     */
	    Transform.skewY = function skewY(angle) {
	        return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Returns a perspective Transform matrix
	     *
	     * @method perspective
	     * @static
	     * @param {Number} focusZ z position of focal point
	     * @return {Transform}
	     */
	    Transform.perspective = function perspective(focusZ) {
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
	    };

	    /**
	     * Return translation vector component of given Transform
	     *
	     * @method getTranslate
	     * @static
	     * @param {Transform} m Transform
	     * @return {Array.Number} the translation vector [t_x, t_y, t_z]
	     */
	    Transform.getTranslate = function getTranslate(m) {
	        return [m[12], m[13], m[14]];
	    };

	    /**
	     * Return inverse affine transform for given Transform.
	     *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
	     *   Will provide incorrect results if not invertible or preconditions not met.
	     *
	     * @method inverse
	     * @static
	     * @param {Transform} m Transform
	     * @return {Transform}
	     */
	    Transform.inverse = function inverse(m) {
	        // only need to consider 3x3 section for affine
	        var c0 = m[5] * m[10] - m[6] * m[9];
	        var c1 = m[4] * m[10] - m[6] * m[8];
	        var c2 = m[4] * m[9] - m[5] * m[8];
	        var c4 = m[1] * m[10] - m[2] * m[9];
	        var c5 = m[0] * m[10] - m[2] * m[8];
	        var c6 = m[0] * m[9] - m[1] * m[8];
	        var c8 = m[1] * m[6] - m[2] * m[5];
	        var c9 = m[0] * m[6] - m[2] * m[4];
	        var c10 = m[0] * m[5] - m[1] * m[4];
	        var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
	        var invD = 1 / detM;
	        var result = [
	            invD * c0, -invD * c4, invD * c8, 0,
	            -invD * c1, invD * c5, -invD * c9, 0,
	            invD * c2, -invD * c6, invD * c10, 0,
	            0, 0, 0, 1
	        ];
	        result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
	        result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
	        result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
	        return result;
	    };

	    /**
	     * Returns the transpose of a 4x4 matrix
	     *
	     * @method transpose
	     * @static
	     * @param {Transform} m matrix
	     * @return {Transform} the resulting transposed matrix
	     */
	    Transform.transpose = function transpose(m) {
	        return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
	    };

	    function _normSquared(v) {
	        return (v.length === 2) ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
	    }
	    function _norm(v) {
	        return Math.sqrt(_normSquared(v));
	    }
	    function _sign(n) {
	        return (n < 0) ? -1 : 1;
	    }

	    /**
	     * Decompose Transform into separate .translate, .rotate, .scale,
	     *    and .skew components.
	     *
	     * @method interpret
	     * @static
	     * @param {Transform} M transform matrix
	     * @return {Object} matrix spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     */
	    Transform.interpret = function interpret(M) {

	        // QR decomposition via Householder reflections
	        //FIRST ITERATION

	        //default Q1 to the identity matrix;
	        var x = [M[0], M[1], M[2]];                // first column vector
	        var sgn = _sign(x[0]);                     // sign of first component of x (for stability)
	        var xNorm = _norm(x);                      // norm of first column vector
	        var v = [x[0] + sgn * xNorm, x[1], x[2]];  // v = x + sign(x[0])|x|e1
	        var mult = 2 / _normSquared(v);            // mult = 2/v'v

	        //bail out if our Matrix is singular
	        if (mult >= Infinity) {
	            return {translate: Transform.getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
	        }

	        //evaluate Q1 = I - 2vv'/v'v
	        var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	        //diagonals
	        Q1[0]  = 1 - mult * v[0] * v[0];    // 0,0 entry
	        Q1[5]  = 1 - mult * v[1] * v[1];    // 1,1 entry
	        Q1[10] = 1 - mult * v[2] * v[2];    // 2,2 entry

	        //upper diagonal
	        Q1[1] = -mult * v[0] * v[1];        // 0,1 entry
	        Q1[2] = -mult * v[0] * v[2];        // 0,2 entry
	        Q1[6] = -mult * v[1] * v[2];        // 1,2 entry

	        //lower diagonal
	        Q1[4] = Q1[1];                      // 1,0 entry
	        Q1[8] = Q1[2];                      // 2,0 entry
	        Q1[9] = Q1[6];                      // 2,1 entry

	        //reduce first column of M
	        var MQ1 = Transform.multiply(Q1, M);

	        //SECOND ITERATION on (1,1) minor
	        var x2 = [MQ1[5], MQ1[6]];
	        var sgn2 = _sign(x2[0]);                    // sign of first component of x (for stability)
	        var x2Norm = _norm(x2);                     // norm of first column vector
	        var v2 = [x2[0] + sgn2 * x2Norm, x2[1]];    // v = x + sign(x[0])|x|e1
	        var mult2 = 2 / _normSquared(v2);           // mult = 2/v'v

	        //evaluate Q2 = I - 2vv'/v'v
	        var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	        //diagonal
	        Q2[5]  = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
	        Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry

	        //off diagonals
	        Q2[6] = -mult2 * v2[0] * v2[1];     // 2,1 entry
	        Q2[9] = Q2[6];                      // 1,2 entry

	        //calc QR decomposition. Q = Q1*Q2, R = Q'*M
	        var Q = Transform.multiply(Q2, Q1);      //note: really Q transpose
	        var R = Transform.multiply(Q, M);

	        //remove negative scaling
	        var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
	        R = Transform.multiply(R, remover);
	        Q = Transform.multiply(remover, Q);

	        //decompose into rotate/scale/skew matrices
	        var result = {};
	        result.translate = Transform.getTranslate(M);
	        result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
	        if (!result.rotate[0]) {
	            result.rotate[0] = 0;
	            result.rotate[2] = Math.atan2(Q[4], Q[5]);
	        }
	        result.scale = [R[0], R[5], R[10]];
	        result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];

	        //double rotation workaround
	        if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
	            result.rotate[1] = Math.PI - result.rotate[1];
	            if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
	            if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
	            if (result.rotate[0] < 0) result.rotate[0] += Math.PI;
	            else result.rotate[0] -= Math.PI;
	            if (result.rotate[2] < 0) result.rotate[2] += Math.PI;
	            else result.rotate[2] -= Math.PI;
	        }

	        return result;
	    };

	    /**
	     * Weighted average between two matrices by averaging their
	     *     translation, rotation, scale, skew components.
	     *     f(M1,M2,t) = (1 - t) * M1 + t * M2
	     *
	     * @method average
	     * @static
	     * @param {Transform} M1 f(M1,M2,0) = M1
	     * @param {Transform} M2 f(M1,M2,1) = M2
	     * @param {Number} t
	     * @return {Transform}
	     */
	    Transform.average = function average(M1, M2, t) {
	        t = (t === undefined) ? 0.5 : t;
	        var specM1 = Transform.interpret(M1);
	        var specM2 = Transform.interpret(M2);

	        var specAvg = {
	            translate: [0, 0, 0],
	            rotate: [0, 0, 0],
	            scale: [0, 0, 0],
	            skew: [0, 0, 0]
	        };

	        for (var i = 0; i < 3; i++) {
	            specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
	            specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
	            specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
	            specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
	        }
	        return Transform.build(specAvg);
	    };

	    /**
	     * Compose .translate, .rotate, .scale, .skew components into
	     * Transform matrix
	     *
	     * @method build
	     * @static
	     * @param {matrixSpec} spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     * @return {Transform} composed transform
	     */
	    Transform.build = function build(spec) {
	        var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
	        var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
	        var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
	        return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
	    };

	    /**
	     * Determine if two Transforms are component-wise equal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method equals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.equals = function equals(a, b) {
	        return !Transform.notEquals(a, b);
	    };

	    /**
	     * Determine if two Transforms are component-wise unequal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method notEquals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.notEquals = function notEquals(a, b) {
	        if (a === b) return false;

	        // shortci
	        return !(a && b) ||
	            a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] ||
	            a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] ||
	            a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] ||
	            a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
	    };

	    /**
	     * Constrain angle-trio components to range of [-pi, pi).
	     *
	     * @method normalizeRotation
	     * @static
	     * @param {Array.Number} rotation phi, theta, psi (array of floats
	     *    && array.length == 3)
	     * @return {Array.Number} new phi, theta, psi triplet
	     *    (array of floats && array.length == 3)
	     */
	    Transform.normalizeRotation = function normalizeRotation(rotation) {
	        var result = rotation.slice(0);
	        if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
	            result[0] = -result[0];
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] > Math.PI * 0.5) {
	            result[0] = result[0] - Math.PI;
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] < -Math.PI * 0.5) {
	            result[0] = result[0] + Math.PI;
	            result[1] = -Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        while (result[1] < -Math.PI) result[1] += 2 * Math.PI;
	        while (result[1] >= Math.PI) result[1] -= 2 * Math.PI;
	        while (result[2] < -Math.PI) result[2] += 2 * Math.PI;
	        while (result[2] >= Math.PI) result[2] -= 2 * Math.PI;
	        return result;
	    };

	    /**
	     * (Property) Array defining a translation forward in z by 1
	     *
	     * @property {array} inFront
	     * @static
	     * @final
	     */
	    Transform.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];

	    /**
	     * (Property) Array defining a translation backwards in z by 1
	     *
	     * @property {array} behind
	     * @static
	     * @final
	     */
	    Transform.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];

	    module.exports = Transform;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var MultipleTransition = __webpack_require__(28);
	    var TweenTransition = __webpack_require__(29);

	    /**
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states. Example numeric states include floats or
	     *    Transform objects.
	     *
	     * An initial state is set with the constructor or set(startState). A
	     *    corresponding end state and transition are set with set(endState,
	     *    transition). Subsequent calls to set(endState, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the interpolated state
	     *    along the way.
	     *
	     * Note that there is no event loop here - calls to get() are the only way
	     *    to find state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class Transitionable
	     * @constructor
	     * @param {number|Array.Number|Object.<number|string, number>} start
	     *    beginning state
	     */
	    function Transitionable(start) {
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];

	        this.state = 0;
	        this.velocity = undefined;
	        this._callback = undefined;
	        this._engineInstance = null;
	        this._currentMethod = null;

	        this.set(start);
	    }

	    var transitionMethods = {};

	    Transitionable.register = function register(methods) {
	        var success = true;
	        for (var method in methods) {
	            if (!Transitionable.registerMethod(method, methods[method]))
	                success = false;
	        }
	        return success;
	    };

	    Transitionable.registerMethod = function registerMethod(name, engineClass) {
	        if (!(name in transitionMethods)) {
	            transitionMethods[name] = engineClass;
	            return true;
	        }
	        else return false;
	    };

	    Transitionable.unregisterMethod = function unregisterMethod(name) {
	        if (name in transitionMethods) {
	            delete transitionMethods[name];
	            return true;
	        }
	        else return false;
	    };

	    function _loadNext() {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        if (this.actionQueue.length <= 0) {
	            this.set(this.get()); // no update required
	            return;
	        }
	        this.currentAction = this.actionQueue.shift();
	        this._callback = this.callbackQueue.shift();

	        var method = null;
	        var endValue = this.currentAction[0];
	        var transition = this.currentAction[1];
	        if (transition instanceof Object && transition.method) {
	            method = transition.method;
	            if (typeof method === 'string') method = transitionMethods[method];
	        }
	        else {
	            method = TweenTransition;
	        }

	        if (this._currentMethod !== method) {
	            if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
	                this._engineInstance = new method();
	            }
	            else {
	                this._engineInstance = new MultipleTransition(method);
	            }
	            this._currentMethod = method;
	        }

	        this._engineInstance.reset(this.state, this.velocity);
	        if (this.velocity !== undefined) transition.velocity = this.velocity;
	        this._engineInstance.set(endValue, transition, _loadNext.bind(this));
	    }

	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endState
	     *    end state to which we interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.set = function set(endState, transition, callback) {
	        if (!transition) {
	            this.reset(endState);
	            if (callback) callback();
	            return this;
	        }

	        var action = [endState, transition];
	        this.actionQueue.push(action);
	        this.callbackQueue.push(callback);
	        if (!this.currentAction) _loadNext.call(this);
	        return this;
	    };

	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startState
	     *    stable state to set to
	     */
	    Transitionable.prototype.reset = function reset(startState, startVelocity) {
	        this._currentMethod = null;
	        this._engineInstance = null;
	        this._callback = undefined;
	        this.state = startState;
	        this.velocity = startVelocity;
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];
	    };

	    /**
	     * Add delay action to the pending action queue queue.
	     *
	     * @method delay
	     *
	     * @param {number} duration delay time (ms)
	     * @param {function} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.delay = function delay(duration, callback) {
	        this.set(this.get(), {duration: duration,
	            curve: function() {
	                return 0;
	            }},
	            callback
	        );
	    };

	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    interpolated to this point in time.
	     */
	    Transitionable.prototype.get = function get(timestamp) {
	        if (this._engineInstance) {
	            if (this._engineInstance.getVelocity)
	                this.velocity = this._engineInstance.getVelocity();
	            this.state = this._engineInstance.get(timestamp);
	        }
	        return this.state;
	    };

	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     * @return {boolean}
	     */
	    Transitionable.prototype.isActive = function isActive() {
	        return !!this.currentAction;
	    };

	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     */
	    Transitionable.prototype.halt = function halt() {
	        return this.set(this.get());
	    };

	    module.exports = Transitionable;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * A singleton that maintains a global registry of Surfaces.
	     *   Private.
	     *
	     * @private
	     * @static
	     * @class Entity
	     */

	    var entities = [];

	    /**
	     * Get entity from global index.
	     *
	     * @private
	     * @method get
	     * @param {Number} id entity registration id
	     * @return {Surface} entity in the global index
	     */
	    function get(id) {
	        return entities[id];
	    }

	    /**
	     * Overwrite entity in the global index
	     *
	     * @private
	     * @method set
	     * @param {Number} id entity registration id
	     * @param {Surface} entity to add to the global index
	     */
	    function set(id, entity) {
	        entities[id] = entity;
	    }

	    /**
	     * Add entity to global index
	     *
	     * @private
	     * @method register
	     * @param {Surface} entity to add to global index
	     * @return {Number} new id
	     */
	    function register(entity) {
	        var id = entities.length;
	        set(id, entity);
	        return id;
	    }

	    /**
	     * Remove entity from global index
	     *
	     * @private
	     * @method unregister
	     * @param {Number} id entity registration id
	     */
	    function unregister(id) {
	        set(id, null);
	    }

	    module.exports = {
	        register: register,
	        unregister: unregister,
	        get: get,
	        set: set
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transform = __webpack_require__(21);

	    /**
	     *
	     * This object translates the rendering instructions ("render specs")
	     *   that renderable components generate into document update
	     *   instructions ("update specs").  Private.
	     *
	     * @private
	     * @class SpecParser
	     * @constructor
	     */
	    function SpecParser() {
	        this.result = {};
	    }
	    SpecParser._instance = new SpecParser();

	    /**
	     * Convert a render spec coming from the context's render chain to an
	     *    update spec for the update chain. This is the only major entry point
	     *    for a consumer of this class.
	     *
	     * @method parse
	     * @static
	     * @private
	     *
	     * @param {renderSpec} spec input render spec
	     * @param {Object} context context to do the parse in
	     * @return {Object} the resulting update spec (if no callback
	     *   specified, else none)
	     */
	    SpecParser.parse = function parse(spec, context) {
	        return SpecParser._instance.parse(spec, context);
	    };

	    /**
	     * Convert a renderSpec coming from the context's render chain to an update
	     *    spec for the update chain. This is the only major entrypoint for a
	     *    consumer of this class.
	     *
	     * @method parse
	     *
	     * @private
	     * @param {renderSpec} spec input render spec
	     * @param {Context} context
	     * @return {updateSpec} the resulting update spec
	     */
	    SpecParser.prototype.parse = function parse(spec, context) {
	        this.reset();
	        this._parseSpec(spec, context, Transform.identity);
	        return this.result;
	    };

	    /**
	     * Prepare SpecParser for re-use (or first use) by setting internal state
	     *  to blank.
	     *
	     * @private
	     * @method reset
	     */
	    SpecParser.prototype.reset = function reset() {
	        this.result = {};
	    };

	    // Multiply matrix M by vector v
	    function _vecInContext(v, m) {
	        return [
	            v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
	            v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
	            v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
	        ];
	    }

	    var _zeroZero = [0, 0];

	    // From the provided renderSpec tree, recursively compose opacities,
	    //    origins, transforms, and sizes corresponding to each surface id from
	    //    the provided renderSpec tree structure. On completion, those
	    //    properties of 'this' object should be ready to use to build an
	    //    updateSpec.
	    SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
	        var id;
	        var target;
	        var transform;
	        var opacity;
	        var origin;
	        var align;
	        var size;

	        if (typeof spec === 'number') {
	            id = spec;
	            transform = parentContext.transform;
	            align = parentContext.align || _zeroZero;
	            if (parentContext.size && align && (align[0] || align[1])) {
	                var alignAdjust = [align[0] * parentContext.size[0], align[1] * parentContext.size[1], 0];
	                transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
	            }
	            this.result[id] = {
	                transform: transform,
	                opacity: parentContext.opacity,
	                origin: parentContext.origin || _zeroZero,
	                align: parentContext.align || _zeroZero,
	                size: parentContext.size
	            };
	        }
	        else if (!spec) { // placed here so 0 will be cached earlier
	            return;
	        }
	        else if (spec instanceof Array) {
	            for (var i = 0; i < spec.length; i++) {
	                this._parseSpec(spec[i], parentContext, sizeContext);
	            }
	        }
	        else {
	            target = spec.target;
	            transform = parentContext.transform;
	            opacity = parentContext.opacity;
	            origin = parentContext.origin;
	            align = parentContext.align;
	            size = parentContext.size;
	            var nextSizeContext = sizeContext;

	            if (spec.opacity !== undefined) opacity = parentContext.opacity * spec.opacity;
	            if (spec.transform) transform = Transform.multiply(parentContext.transform, spec.transform);
	            if (spec.origin) {
	                origin = spec.origin;
	                nextSizeContext = parentContext.transform;
	            }
	            if (spec.align) align = spec.align;

	            if (spec.size || spec.proportions) {
	                var parentSize = size;
	                size = [size[0], size[1]];

	                if (spec.size) {
	                    if (spec.size[0] !== undefined) size[0] = spec.size[0];
	                    if (spec.size[1] !== undefined) size[1] = spec.size[1];
	                }

	                if (spec.proportions) {
	                    if (spec.proportions[0] !== undefined) size[0] = size[0] * spec.proportions[0];
	                    if (spec.proportions[1] !== undefined) size[1] = size[1] * spec.proportions[1];
	                }

	                if (parentSize) {
	                    if (align && (align[0] || align[1])) transform = Transform.thenMove(transform, _vecInContext([align[0] * parentSize[0], align[1] * parentSize[1], 0], sizeContext));
	                    if (origin && (origin[0] || origin[1])) transform = Transform.moveThen([-origin[0] * size[0], -origin[1] * size[1], 0], transform);
	                }

	                nextSizeContext = parentContext.transform;
	                origin = null;
	                align = null;
	            }

	            this._parseSpec(target, {
	                transform: transform,
	                opacity: opacity,
	                origin: origin,
	                align: align,
	                size: size
	            }, nextSizeContext);
	        }
	    };

	    module.exports = SpecParser;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * EventEmitter represents a channel for events.
	     *
	     * @class EventEmitter
	     * @constructor
	     */
	    function EventEmitter() {
	        this.listeners = {};
	        this._owner = this;
	    }

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventEmitter.prototype.emit = function emit(type, event) {
	        var handlers = this.listeners[type];
	        if (handlers) {
	            for (var i = 0; i < handlers.length; i++) {
	                handlers[i].call(this._owner, event);
	            }
	        }
	        return this;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	   EventEmitter.prototype.on = function on(type, handler) {
	        if (!(type in this.listeners)) this.listeners[type] = [];
	        var index = this.listeners[type].indexOf(handler);
	        if (index < 0) this.listeners[type].push(handler);
	        return this;
	    };

	    /**
	     * Alias for "on".
	     * @method addListener
	     */
	    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	   /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventEmitter} this
	     */
	    EventEmitter.prototype.removeListener = function removeListener(type, handler) {
	        var listener = this.listeners[type];
	        if (listener !== undefined) {
	            var index = listener.indexOf(handler);
	            if (index >= 0) listener.splice(index, 1);
	        }
	        return this;
	    };

	    /**
	     * Call event handlers with this set to owner.
	     *
	     * @method bindThis
	     *
	     * @param {Object} owner object this EventEmitter belongs to
	     */
	    EventEmitter.prototype.bindThis = function bindThis(owner) {
	        this._owner = owner;
	    };

	    module.exports = EventEmitter;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * This namespace holds standalone functionality.
	     *  Currently includes name mapping for transition curves,
	     *  name mapping for origin pairs, and the after() function.
	     *
	     * @class Utility
	     * @static
	     */
	    var Utility = {};

	    /**
	     * Table of direction array positions
	     *
	     * @property {object} Direction
	     * @final
	     */
	    Utility.Direction = {
	        X: 0,
	        Y: 1,
	        Z: 2
	    };

	    /**
	     * Return wrapper around callback function. Once the wrapper is called N
	     *   times, invoke the callback function. Arguments and scope preserved.
	     *
	     * @method after
	     *
	     * @param {number} count number of calls before callback function invoked
	     * @param {Function} callback wrapped callback function
	     *
	     * @return {function} wrapped callback with coundown feature
	     */
	    Utility.after = function after(count, callback) {
	        var counter = count;
	        return function() {
	            counter--;
	            if (counter === 0) callback.apply(this, arguments);
	        };
	    };

	    /**
	     * Load a URL and return its contents in a callback
	     *
	     * @method loadURL
	     *
	     * @param {string} url URL of object
	     * @param {function} callback callback to dispatch with content
	     */
	    Utility.loadURL = function loadURL(url, callback) {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function onreadystatechange() {
	            if (this.readyState === 4) {
	                if (callback) callback(this.responseText);
	            }
	        };
	        xhr.open('GET', url);
	        xhr.send();
	    };

	    /**
	     * Create a document fragment from a string of HTML
	     *
	     * @method createDocumentFragmentFromHTML
	     *
	     * @param {string} html HTML to convert to DocumentFragment
	     *
	     * @return {DocumentFragment} DocumentFragment representing input HTML
	     */
	    Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
	        var element = document.createElement('div');
	        element.innerHTML = html;
	        var result = document.createDocumentFragment();
	        while (element.hasChildNodes()) result.appendChild(element.firstChild);
	        return result;
	    };

	    /*
	     *  Deep clone an object.
	     *  @param b {Object} Object to clone
	     *  @return a {Object} Cloned object.
	     */
	    Utility.clone = function clone(b) {
	        var a;
	        if (typeof b === 'object') {
	            a = (b instanceof Array) ? [] : {};
	            for (var key in b) {
	                if (typeof b[key] === 'object' && b[key] !== null) {
	                    if (b[key] instanceof Array) {
	                        a[key] = new Array(b[key].length);
	                        for (var i = 0; i < b[key].length; i++) {
	                            a[key][i] = Utility.clone(b[key][i]);
	                        }
	                    }
	                    else {
	                      a[key] = Utility.clone(b[key]);
	                    }
	                }
	                else {
	                    a[key] = b[key];
	                }
	            }
	        }
	        else {
	            a = b;
	        }
	        return a;
	    };

	    module.exports = Utility;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Internal helper object to Context that handles the process of
	     *   creating and allocating DOM elements within a managed div.
	     *   Private.
	     *
	     * @class ElementAllocator
	     * @constructor
	     * @private
	     * @param {Node} container document element in which Famo.us content will be inserted
	     */
	    function ElementAllocator(container) {
	        if (!container) container = document.createDocumentFragment();
	        this.container = container;
	        this.detachedNodes = {};
	        this.nodeCount = 0;
	    }

	    /**
	     * Move the document elements from their original container to a new one.
	     *
	     * @private
	     * @method migrate
	     *
	     * @param {Node} container document element to which Famo.us content will be migrated
	     */
	    ElementAllocator.prototype.migrate = function migrate(container) {
	        var oldContainer = this.container;
	        if (container === oldContainer) return;

	        if (oldContainer instanceof DocumentFragment) {
	            container.appendChild(oldContainer);
	        }
	        else {
	            while (oldContainer.hasChildNodes()) {
	                container.appendChild(oldContainer.firstChild);
	            }
	        }

	        this.container = container;
	    };

	    /**
	     * Allocate an element of specified type from the pool.
	     *
	     * @private
	     * @method allocate
	     *
	     * @param {string} type type of element, e.g. 'div'
	     * @return {Node} allocated document element
	     */
	    ElementAllocator.prototype.allocate = function allocate(type) {
	        type = type.toLowerCase();
	        if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
	        var nodeStore = this.detachedNodes[type];
	        var result;
	        if (nodeStore.length > 0) {
	            result = nodeStore.pop();
	        }
	        else {
	            result = document.createElement(type);
	            this.container.appendChild(result);
	        }
	        this.nodeCount++;
	        return result;
	    };

	    /**
	     * De-allocate an element of specified type to the pool.
	     *
	     * @private
	     * @method deallocate
	     *
	     * @param {Node} element document element to deallocate
	     */
	    ElementAllocator.prototype.deallocate = function deallocate(element) {
	        var nodeType = element.nodeName.toLowerCase();
	        var nodeStore = this.detachedNodes[nodeType];
	        nodeStore.push(element);
	        this.nodeCount--;
	    };

	    /**
	     * Get count of total allocated nodes in the document.
	     *
	     * @private
	     * @method getNodeCount
	     *
	     * @return {Number} total node count
	     */
	    ElementAllocator.prototype.getNodeCount = function getNodeCount() {
	        return this.nodeCount;
	    };

	    module.exports = ElementAllocator;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Utility = __webpack_require__(26);

	    /**
	     * Transition meta-method to support transitioning multiple
	     *   values with scalar-only methods.
	     *
	     *
	     * @class MultipleTransition
	     * @constructor
	     *
	     * @param {Object} method Transionable class to multiplex
	     */
	    function MultipleTransition(method) {
	        this.method = method;
	        this._instances = [];
	        this.state = [];
	    }

	    MultipleTransition.SUPPORTS_MULTIPLE = true;

	    /**
	     * Get the state of each transition.
	     *
	     * @method get
	     *
	     * @return state {Number|Array} state array
	     */
	    MultipleTransition.prototype.get = function get() {
	        for (var i = 0; i < this._instances.length; i++) {
	            this.state[i] = this._instances[i].get();
	        }
	        return this.state;
	    };

	    /**
	     * Set the end states with a shared transition, with optional callback.
	     *
	     * @method set
	     *
	     * @param {Number|Array} endState Final State.  Use a multi-element argument for multiple transitions.
	     * @param {Object} transition Transition definition, shared among all instances
	     * @param {Function} callback called when all endStates have been reached.
	     */
	    MultipleTransition.prototype.set = function set(endState, transition, callback) {
	        var _allCallback = Utility.after(endState.length, callback);
	        for (var i = 0; i < endState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].set(endState[i], transition, _allCallback);
	        }
	    };

	    /**
	     * Reset all transitions to start state.
	     *
	     * @method reset
	     *
	     * @param  {Number|Array} startState Start state
	     */
	    MultipleTransition.prototype.reset = function reset(startState) {
	        for (var i = 0; i < startState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].reset(startState[i]);
	        }
	    };

	    module.exports = MultipleTransition;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     *
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states.  Example numeric states include floats or
	     *    Transfornm objects.
	     *
	     *    An initial state is set with the constructor or set(startValue). A
	     *    corresponding end state and transition are set with set(endValue,
	     *    transition). Subsequent calls to set(endValue, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the _interpolated state
	     *    along the way.
	     *
	     *   Note that there is no event loop here - calls to get() are the only way
	     *    to find out state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class TweenTransition
	     * @constructor
	     *
	     * @param {Object} options TODO
	     *    beginning state
	     */
	    function TweenTransition(options) {
	        this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        this._startTime = 0;
	        this._startValue = 0;
	        this._updateTime = 0;
	        this._endValue = 0;
	        this._curve = undefined;
	        this._duration = 0;
	        this._active = false;
	        this._callback = undefined;
	        this.state = 0;
	        this.velocity = undefined;
	    }

	    /**
	     * Transition curves mapping independent variable t from domain [0,1] to a
	     *    range within [0,1]. Includes functions 'linear', 'easeIn', 'easeOut',
	     *    'easeInOut', 'easeOutBounce', 'spring'.
	     *
	     * @property {object} Curve
	     * @final
	     */
	    TweenTransition.Curves = {
	        linear: function(t) {
	            return t;
	        },
	        easeIn: function(t) {
	            return t*t;
	        },
	        easeOut: function(t) {
	            return t*(2-t);
	        },
	        easeInOut: function(t) {
	            if (t <= 0.5) return 2*t*t;
	            else return -2*t*t + 4*t - 1;
	        },
	        easeOutBounce: function(t) {
	            return t*(3 - 2*t);
	        },
	        spring: function(t) {
	            return (1 - t) * Math.sin(6 * Math.PI * t) + t;
	        }
	    };

	    TweenTransition.SUPPORTS_MULTIPLE = true;
	    TweenTransition.DEFAULT_OPTIONS = {
	        curve: TweenTransition.Curves.linear,
	        duration: 500,
	        speed: 0 /* considered only if positive */
	    };

	    var registeredCurves = {};

	    /**
	     * Add "unit" curve to internal dictionary of registered curves.
	     *
	     * @method registerCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @param {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     * @return {boolean} false if key is taken, else true
	     */
	    TweenTransition.registerCurve = function registerCurve(curveName, curve) {
	        if (!registeredCurves[curveName]) {
	            registeredCurves[curveName] = curve;
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    /**
	     * Remove object with key "curveName" from internal dictionary of registered
	     *    curves.
	     *
	     * @method unregisterCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {boolean} false if key has no dictionary value
	     */
	    TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
	        if (registeredCurves[curveName]) {
	            delete registeredCurves[curveName];
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    /**
	     * Retrieve function with key "curveName" from internal dictionary of
	     *    registered curves. Default curves are defined in the
	     *    TweenTransition.Curves array, where the values represent
	     *    unitCurve functions.
	     *
	     * @method getCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurve = function getCurve(curveName) {
	        var curve = registeredCurves[curveName];
	        if (curve !== undefined) return curve;
	        else throw new Error('curve not registered');
	    };

	    /**
	     * Retrieve all available curves.
	     *
	     * @method getCurves
	     *
	     * @static
	     *
	     * @return {object} curve functions of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurves = function getCurves() {
	        return registeredCurves;
	    };

	     // Interpolate: If a linear function f(0) = a, f(1) = b, then return f(t)
	    function _interpolate(a, b, t) {
	        return ((1 - t) * a) + (t * b);
	    }

	    function _clone(obj) {
	        if (obj instanceof Object) {
	            if (obj instanceof Array) return obj.slice(0);
	            else return Object.create(obj);
	        }
	        else return obj;
	    }

	    // Fill in missing properties in "transition" with those in defaultTransition, and
	    //   convert internal named curve to function object, returning as new
	    //   object.
	    function _normalize(transition, defaultTransition) {
	        var result = {curve: defaultTransition.curve};
	        if (defaultTransition.duration) result.duration = defaultTransition.duration;
	        if (defaultTransition.speed) result.speed = defaultTransition.speed;
	        if (transition instanceof Object) {
	            if (transition.duration !== undefined) result.duration = transition.duration;
	            if (transition.curve) result.curve = transition.curve;
	            if (transition.speed) result.speed = transition.speed;
	        }
	        if (typeof result.curve === 'string') result.curve = TweenTransition.getCurve(result.curve);
	        return result;
	    }

	    /**
	     * Set internal options, overriding any default options.
	     *
	     * @method setOptions
	     *
	     *
	     * @param {Object} options options object
	     * @param {Object} [options.curve] function mapping [0,1] to [0,1] or identifier
	     * @param {Number} [options.duration] duration in ms
	     * @param {Number} [options.speed] speed in pixels per ms
	     */
	    TweenTransition.prototype.setOptions = function setOptions(options) {
	        if (options.curve !== undefined) this.options.curve = options.curve;
	        if (options.duration !== undefined) this.options.duration = options.duration;
	        if (options.speed !== undefined) this.options.speed = options.speed;
	    };

	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endValue
	     *    end state to which we _interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    TweenTransition.prototype.set = function set(endValue, transition, callback) {
	        if (!transition) {
	            this.reset(endValue);
	            if (callback) callback();
	            return;
	        }

	        this._startValue = _clone(this.get());
	        transition = _normalize(transition, this.options);
	        if (transition.speed) {
	            var startValue = this._startValue;
	            if (startValue instanceof Object) {
	                var variance = 0;
	                for (var i in startValue) variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
	                transition.duration = Math.sqrt(variance) / transition.speed;
	            }
	            else {
	                transition.duration = Math.abs(endValue - startValue) / transition.speed;
	            }
	        }

	        this._startTime = Date.now();
	        this._endValue = _clone(endValue);
	        this._startVelocity = _clone(transition.velocity);
	        this._duration = transition.duration;
	        this._curve = transition.curve;
	        this._active = true;
	        this._callback = callback;
	    };

	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startValue
	     *    starting state
	     * @param {number} startVelocity
	     *    starting velocity
	     */
	    TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        this.state = _clone(startValue);
	        this.velocity = _clone(startVelocity);
	        this._startTime = 0;
	        this._duration = 0;
	        this._updateTime = 0;
	        this._startValue = this.state;
	        this._startVelocity = this.velocity;
	        this._endValue = this.state;
	        this._active = false;
	    };

	    /**
	     * Get current velocity
	     *
	     * @method getVelocity
	     *
	     * @returns {Number} velocity
	     */
	    TweenTransition.prototype.getVelocity = function getVelocity() {
	        return this.velocity;
	    };

	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    _interpolated to this point in time.
	     */
	    TweenTransition.prototype.get = function get(timestamp) {
	        this.update(timestamp);
	        return this.state;
	    };

	    function _calculateVelocity(current, start, curve, duration, t) {
	        var velocity;
	        var eps = 1e-7;
	        var speed = (curve(t) - curve(t - eps)) / eps;
	        if (current instanceof Array) {
	            velocity = [];
	            for (var i = 0; i < current.length; i++){
	                if (typeof current[i] === 'number')
	                    velocity[i] = speed * (current[i] - start[i]) / duration;
	                else
	                    velocity[i] = 0;
	            }

	        }
	        else velocity = speed * (current - start) / duration;
	        return velocity;
	    }

	    function _calculateState(start, end, t) {
	        var state;
	        if (start instanceof Array) {
	            state = [];
	            for (var i = 0; i < start.length; i++) {
	                if (typeof start[i] === 'number')
	                    state[i] = _interpolate(start[i], end[i], t);
	                else
	                    state[i] = start[i];
	            }
	        }
	        else state = _interpolate(start, end, t);
	        return state;
	    }

	    /**
	     * Update internal state to the provided timestamp. This may invoke the last
	     *    callback and begin a new action.
	     *
	     * @method update
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     */
	    TweenTransition.prototype.update = function update(timestamp) {
	        if (!this._active) {
	            if (this._callback) {
	                var callback = this._callback;
	                this._callback = undefined;
	                callback();
	            }
	            return;
	        }

	        if (!timestamp) timestamp = Date.now();
	        if (this._updateTime >= timestamp) return;
	        this._updateTime = timestamp;

	        var timeSinceStart = timestamp - this._startTime;
	        if (timeSinceStart >= this._duration) {
	            this.state = this._endValue;
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
	            this._active = false;
	        }
	        else if (timeSinceStart < 0) {
	            this.state = this._startValue;
	            this.velocity = this._startVelocity;
	        }
	        else {
	            var t = timeSinceStart / this._duration;
	            this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
	        }
	    };

	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     *
	     * @return {boolean}
	     */
	    TweenTransition.prototype.isActive = function isActive() {
	        return this._active;
	    };

	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     *
	     */
	    TweenTransition.prototype.halt = function halt() {
	        this.reset(this.get());
	    };

	    // Register all the default curves
	    TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
	    TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
	    TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
	    TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
	    TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
	    TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);

	    TweenTransition.customCurve = function customCurve(v1, v2) {
	        v1 = v1 || 0; v2 = v2 || 0;
	        return function(t) {
	            return v1*t + (-2*v1 - v2 + 3)*t*t + (v1 + v2 - 2)*t*t*t;
	        };
	    };

	    module.exports = TweenTransition;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ])