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

    //declare an object
    var under = function(obj) {
        return obj;
    };

    //function compose
    under.compose = function() {
        console.log('*compose*');

        //collect arguments
        var args = arguments;
        console.log(args);


        var start = args.length - 1;

        return function() {
            var i = start;

            //привязываем контекст, передаём массив контексту
            var result = args[start].apply(this, arguments);
            console.log(result);

            //до тех пор, пока список аргументов не закончится, делаем ??????
            while (i--) {
                //зачем снова привязывать контекст?
                result = args[i].call(this, result);
            }
            console.log(result);
            return result;
        };

    };

    var greet    = function(name){ return "hi: " + name; };
    var exclaim  = function(statement){ return statement + "!"; };
    var welcome = under.compose(greet, exclaim);
    welcome('moe');


    under.bind = function(func, context) {
        console.log(Array.prototype.slice.call(arguments));
        //Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.
        //новый массив с 1 элемента, запускаем в контексте переданных arguments
        var arg = Array.prototype.slice.call(arguments, 1);
        console.log(Array.prototype.slice.call(arguments));
        //байндим переданную функцию и "скармливаем" ему arg
        return Function.prototype.bind.apply(func, arg);

    };

    var func = function(greeting){ return greeting + ': ' + this.name };
    func = under.bind(func, {name: 'moe'}, 'hi');
    console.log(func());

    under.bindAll = function(obj) {
        var i, length = arguments.length, key;
        if (length <= 1) throw new Error('bindAll must be passed function names');
        for (i = 1; i < length; i++) {
            key = arguments[i];
            obj[key] = under.bind(obj[key], obj);
        }
        return obj;
    };

    var buttonView = {
        label  : 'underscore',
        onClick: function(){ alert('clicked: ' + this.label); },
        onHover: function(){ console.log('hovering: ' + this.label); }
    };
    under.bindAll(buttonView, 'onClick', 'onHover');
// When the button is clicked, this.label will have the correct value.
    jQuery('#underscore_button').bind('click', buttonView.onClick);
    console.log(buttonView.label);


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

    var fibonacci = under.memoize(function(n) {
        return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
    });
    console.log(fibonacci);

    under.delay = function(func, wait) {
        var args = Array.prototype.slice.call(arguments, 2);
        return setTimeout(function(){
            return func.apply(null, args);
        }, wait);
    };

    var log = under.bind(console.log, console);
    under.delay(log, 1000, 'logged later');


    under.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) {
            options = {};
        }
        var later = function() {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = Date.now();
            if (!previous && options.leading === false) {
                previous = now;
            }
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
                if (!timeout) {
                    context = args = null;
                }
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };
    function updatePosition() {
        console.log('update');
    }
    var throttled = under.throttle(updatePosition, 100);
    $(window).scroll(throttled);

    under.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var later = function() {
            var last = Date.now() - timestamp;

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
            timestamp = Date.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }

            return result;
        };
    };
    function calculateLayout() {
        console.log('recalculated');
    }
    var lazyLayout = under.debounce(calculateLayout, 300);
    $(window).resize(lazyLayout);


    under.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };
    /*
    var notes = ['record1', 'record2','record3','record4','record5'];
    var renderNotes = _.after(notes.length, render);
    under.each(notes, function(note) {
        note.asyncSave({success: renderNotes});
    });
    */
// renderNotes is run once, after all notes have saved.

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
    function askForRaise() {
        console.log('function wake up');
    }
    var monthlyMeeting = under.before(3, askForRaise);
    monthlyMeeting();
    monthlyMeeting();
    monthlyMeeting();
// the result of any subsequent calls is the same as the second call










    //partial
    var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result)) return result;
        return self;
    };

    console.log('partial');
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

    var add = function(a, b) { return a + b; };
    var add5 = under.partial(add, 5);
    console.log(add5(10));


    under.negate = function(predicate) {
        return function() {
            return !predicate.apply(this, arguments);
        };
    };
    var isFalsy = under.negate(Boolean);

    under.wrap = function(func, wrapper) {
        return under.partial(wrapper, func);
    };
    var hello = function(name) { return "hello: " + name; };
    hello = under.wrap(hello, function(func) {
        return "before, " + func("moe") + ", after";
    });
    console.log(hello());
    //=> 'before, hello: moe, after'

})();


