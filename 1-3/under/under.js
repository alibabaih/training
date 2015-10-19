'use strict';

/**
 *    Functions, Objects
 *    See WEB Training I-3 Practice.
 *    Implement the following Underscore.js functions:
 *    bind, bindAll, partial, memoize, delay, defer,
 *    throttle, debounce, once, after, before, wrap, negate, compose.
 *    See http://underscorejs.org/#functions for more details and examples.
 *    tests
 */

(function() {

    var under = function(obj) {
        return obj;
    };

    //this.under = under();

    under.bind = function(func, context) {
        console.log(Array.prototype.slice.call(arguments));
        //Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.
        //новый массив с 1 элемента, запускаем в контексте переданных arguments
        var arg = Array.prototype.slice.call(arguments, 1);
        console.log(Array.prototype.slice.call(arguments));
        //байндим переданную функцию и "скармливаем" ему arg
        return Function.prototype.bind.apply(func, arg);

    };

    under.bindAll = function(obj) {
        var i, length = arguments.length, key;
        if (length <= 1) throw new Error('bindAll must be passed function names');
        for (i = 1; i < length; i++) {
            key = arguments[i];
            obj[key] = _.bind(obj[key], obj);
        }
        return obj;
    };

    var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result)) return result;
        return self;
    };

    under.partial = function(func) {
        var boundArgs = Array.prototype.slice.call(arguments, 1);
        console.log(Array.prototype.slice.call(arguments, 1));
        var bound = function() {
            var position = 0, length = boundArgs.length;
            var args = Array(length);
            for (var i = 0; i < length; i++) {
                args[i] = boundArgs[i] === Array.prototype.slice ? arguments[position++] : boundArgs[i];
            }
            while (position < arguments.length) args.push(arguments[position++]);
            return executeBound(func, bound, this, this, args);
        };
        return bound;
    };

    under.memoize = function(func, hasher) {
        var memoize = function(key) {
            var cache = memoize.cache;
            var address = '' + (hasher ? hasher.apply(this, arguments) : key);
            if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
            return cache[address];
        };
        memoize.cache = {};
        return memoize;
    };

    under.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function(){
            return func.apply(null, args);
        }, wait);
    };

    under.defer = under.partial(under.delay, under, 1);

    under.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function() {
            previous = options.leading === false ? 0 : _.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = _.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    under.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var later = function() {
            var last = _.now() - timestamp;

            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                }
            }
        };

        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }

            return result;
        };
    };

    under.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    under.before = function(times, func) {
        var memo;
        return function() {
            if (--times > 0) {
                memo = func.apply(this, arguments);
            }
            if (times <= 1) func = null;
            return memo;
        };
    };

    under.once = under.partial(under.before, 2);

    under.wrap = function(func, wrapper) {
        return _.partial(wrapper, func);
    };

    under.negate = function(predicate) {
        return function() {
            return !predicate.apply(this, arguments);
        };
    };

    under.compose = function() {
        var args = arguments;
        var start = args.length - 1;
        return function() {
            var i = start;
            var result = args[start].apply(this, arguments);
            while (i--) result = args[i].call(this, result);
            return result;
        };
    };

    //bind
    var greetings = function(greeting){
        return greeting + ' ' + this.name + ' ' + this.sername;
    };
    greetings = under.bind(greetings, {name : 'Vasiliy', sername: 'Schitov'}, 'Hi');
    var re = greetings();
    console.log(re);

    //partial
    var add = function(a, b) { return a + b; };
    var add5 = under.partial(add, 5);
    console.log(add5(10));



}).call(this);