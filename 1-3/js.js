'use strict';

/*
 *    Functions, Objects
 *    See WEB Training I-3 Practice.
 *    Implement the following Underscore.js functions:
 *    bind, bindAll, partial, memoize, delay, defer,
 *    throttle, debounce, once, after, before, wrap, negate, compose.
 *    See http://underscorejs.org/#functions for more details and examples.
 *    tests
 */

___.bind = function(func, context) {
    var g = bind(func, context);

};



_.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
        key = arguments[i];
        obj[key] = _.bind(obj[key], obj);
    }
    return obj;
};

var greet = function(name) {
    return 'Hi' + name;
};

var exclaim = function() {
    return '!';
};

function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
}

compose(greet, exclaim);

