(function() {
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

//create an object
var under = function(obj) {
    if (obj instanceof under) {
        return obj;
    }
    if (!(this instanceof under)) {
        return new under(obj);
    }
};


//bind
var ctor = function(){};
var nativeBind = Function.prototype.bind;

under.bind = function(func, context) {
    var args, bound;
    if (nativeBind) {
        console.log(Array.prototype.slice.call(arguments));
        return nativeBind.apply(func, Array.prototype.slice.call(arguments, 1));
    }

};


















    var func = function(greeting){
        return greeting + ' ' + this.name + ' ' + this.sername;
    };
    func = under.bind(func, {name : 'Vasiliy', sername: 'Schitov'}, 'Hi');

    var re = func();
    console.log(re);
// вернёт 'hi: moe'





}).call(this);