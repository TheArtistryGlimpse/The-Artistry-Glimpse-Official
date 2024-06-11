"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/debounce";
exports.ids = ["vendor-chunks/debounce"];
exports.modules = {

/***/ "(ssr)/./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * Returns a function, that, as long as it continues to be invoked, will not\n * be triggered. The function will be called after it stops being called for\n * N milliseconds. If `immediate` is passed, trigger the function on the\n * leading edge, instead of the trailing. The function also has a property 'clear' \n * that is a function which will clear the timer to prevent previously scheduled executions. \n *\n * @source underscore.js\n * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/\n * @param {Function} function to wrap\n * @param {Number} timeout in ms (`100`)\n * @param {Boolean} whether to execute at the beginning (`false`)\n * @api public\n */ \nfunction debounce(func, wait, immediate) {\n    var timeout, args, context, timestamp, result;\n    if (null == wait) wait = 100;\n    function later() {\n        var last = Date.now() - timestamp;\n        if (last < wait && last >= 0) {\n            timeout = setTimeout(later, wait - last);\n        } else {\n            timeout = null;\n            if (!immediate) {\n                result = func.apply(context, args);\n                context = args = null;\n            }\n        }\n    }\n    ;\n    var debounced = function() {\n        context = this;\n        args = arguments;\n        timestamp = Date.now();\n        var callNow = immediate && !timeout;\n        if (!timeout) timeout = setTimeout(later, wait);\n        if (callNow) {\n            result = func.apply(context, args);\n            context = args = null;\n        }\n        return result;\n    };\n    debounced.clear = function() {\n        if (timeout) {\n            clearTimeout(timeout);\n            timeout = null;\n        }\n    };\n    debounced.flush = function() {\n        if (timeout) {\n            result = func.apply(context, args);\n            context = args = null;\n            clearTimeout(timeout);\n            timeout = null;\n        }\n    };\n    return debounced;\n}\n// Adds compatibility for ES modules\ndebounce.debounce = debounce;\nmodule.exports = debounce;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVib3VuY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQztBQUNELFNBQVNBLFNBQVNDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxTQUFTO0lBQ3JDLElBQUlDLFNBQVNDLE1BQU1DLFNBQVNDLFdBQVdDO0lBQ3ZDLElBQUksUUFBUU4sTUFBTUEsT0FBTztJQUV6QixTQUFTTztRQUNQLElBQUlDLE9BQU9DLEtBQUtDLEdBQUcsS0FBS0w7UUFFeEIsSUFBSUcsT0FBT1IsUUFBUVEsUUFBUSxHQUFHO1lBQzVCTixVQUFVUyxXQUFXSixPQUFPUCxPQUFPUTtRQUNyQyxPQUFPO1lBQ0xOLFVBQVU7WUFDVixJQUFJLENBQUNELFdBQVc7Z0JBQ2RLLFNBQVNQLEtBQUthLEtBQUssQ0FBQ1IsU0FBU0Q7Z0JBQzdCQyxVQUFVRCxPQUFPO1lBQ25CO1FBQ0Y7SUFDRjs7SUFFQSxJQUFJVSxZQUFZO1FBQ2RULFVBQVUsSUFBSTtRQUNkRCxPQUFPVztRQUNQVCxZQUFZSSxLQUFLQyxHQUFHO1FBQ3BCLElBQUlLLFVBQVVkLGFBQWEsQ0FBQ0M7UUFDNUIsSUFBSSxDQUFDQSxTQUFTQSxVQUFVUyxXQUFXSixPQUFPUDtRQUMxQyxJQUFJZSxTQUFTO1lBQ1hULFNBQVNQLEtBQUthLEtBQUssQ0FBQ1IsU0FBU0Q7WUFDN0JDLFVBQVVELE9BQU87UUFDbkI7UUFFQSxPQUFPRztJQUNUO0lBRUFPLFVBQVVHLEtBQUssR0FBRztRQUNoQixJQUFJZCxTQUFTO1lBQ1hlLGFBQWFmO1lBQ2JBLFVBQVU7UUFDWjtJQUNGO0lBRUFXLFVBQVVLLEtBQUssR0FBRztRQUNoQixJQUFJaEIsU0FBUztZQUNYSSxTQUFTUCxLQUFLYSxLQUFLLENBQUNSLFNBQVNEO1lBQzdCQyxVQUFVRCxPQUFPO1lBRWpCYyxhQUFhZjtZQUNiQSxVQUFVO1FBQ1o7SUFDRjtJQUVBLE9BQU9XO0FBQ1Q7QUFFQSxvQ0FBb0M7QUFDcENmLFNBQVNBLFFBQVEsR0FBR0E7QUFFcEJxQixPQUFPQyxPQUFPLEdBQUd0QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcmVhdGl2ZS1wb3J0Zm9saW8tc3RhcnRlci1jb2RlLWZpbGVzLy4vbm9kZV9tb2R1bGVzL2RlYm91bmNlL2luZGV4LmpzPzAxYTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gKiBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gKiBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAqIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuIFRoZSBmdW5jdGlvbiBhbHNvIGhhcyBhIHByb3BlcnR5ICdjbGVhcicgXG4gKiB0aGF0IGlzIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBjbGVhciB0aGUgdGltZXIgdG8gcHJldmVudCBwcmV2aW91c2x5IHNjaGVkdWxlZCBleGVjdXRpb25zLiBcbiAqXG4gKiBAc291cmNlIHVuZGVyc2NvcmUuanNcbiAqIEBzZWUgaHR0cDovL3Vuc2NyaXB0YWJsZS5jb20vMjAwOS8wMy8yMC9kZWJvdW5jaW5nLWphdmFzY3JpcHQtbWV0aG9kcy9cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0aW9uIHRvIHdyYXBcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lb3V0IGluIG1zIChgMTAwYClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2hldGhlciB0byBleGVjdXRlIGF0IHRoZSBiZWdpbm5pbmcgKGBmYWxzZWApXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpe1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gIGlmIChudWxsID09IHdhaXQpIHdhaXQgPSAxMDA7XG5cbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgdmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBkZWJvdW5jZWQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBpZiAoIXRpbWVvdXQpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGRlYm91bmNlZC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIFxuICBkZWJvdW5jZWQuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWQ7XG59O1xuXG4vLyBBZGRzIGNvbXBhdGliaWxpdHkgZm9yIEVTIG1vZHVsZXNcbmRlYm91bmNlLmRlYm91bmNlID0gZGVib3VuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iXSwibmFtZXMiOlsiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJhcmdzIiwiY29udGV4dCIsInRpbWVzdGFtcCIsInJlc3VsdCIsImxhdGVyIiwibGFzdCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJkZWJvdW5jZWQiLCJhcmd1bWVudHMiLCJjYWxsTm93IiwiY2xlYXIiLCJjbGVhclRpbWVvdXQiLCJmbHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/debounce/index.js\n");

/***/ })

};
;