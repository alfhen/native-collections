/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	// Return the avarage of the provided values
	Array.prototype.avg = function (callbackOrString) {
	    return this.sum(callbackOrString) / this.count();
	};

	// Break an array into smaller arrays matching the provided length
	Array.prototype.chunk = function (length) {
	    return this.reduce(function (total, item, index) {
	        if (index % length === 0) {
	            total.push([]);
	        }
	        total.last().push(item);
	        return total;
	    }, []);
	};

	// Merge sub arrays into one big array
	Array.prototype.collapse = function () {
	    return this.reduce(function (total, item) {
	        if (Array.isArray(item)) {
	            total = total.concat(item.collapse());
	        } else {
	            total.push(item);
	        }
	        return total;
	    }, []);
	};

	// Return the count of items
	Array.prototype.count = function (callbackOrString) {
	    return this.length;
	};

	// Return the count of items
	Array.prototype.first = function () {
	    return this[0];
	};

	// Return the count of items
	Array.prototype.last = function () {
	    return this[this.length - 1];
	};

	// Create an Array of properties that match the given key
	Array.prototype.pluck = function (key) {
	    return this.map(function (item) {
	        return item[key];
	    });
	};

	// Create an array of all elements that do not pass a given truth test.
	Array.prototype.reject = function (callbackOrString) {
	    return this.filter(function (item) {
	        if (typeof callbackOrString === 'function') {
	            return !callbackOrString(item);
	        }
	        if (typeof callbackOrString === 'string') {
	            return !item[callbackOrString];
	        }
	    });
	};

	// Sum item values or values from a property on items in array
	Array.prototype.sum = function (callbackOrString) {
	    return this.reduce(function (total, item) {
	        if (typeof callbackOrString === 'function') {
	            return total += callbackOrString(item);
	        }
	        if (typeof callbackOrString === 'string') {
	            return total += item[callbackOrString];
	        }
	        if (typeof callbackOrString === 'undefined') {
	            return total += item;
	        }
	    }, 0);
	};

/***/ }
/******/ ]);