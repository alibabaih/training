//'use strict';
var _ = {};
_.partial = function(func, arg) {
    var slice = Array.prototype.slice;
    //console.log(this);
    //console.log(context.call(this));
    console.log(arguments);
    console.log(slice.call(arguments,1)); https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind Partial Functions

   var hello = slice.call(arguments, 1); //call arguments, cut out [0] argument (function)
    return function () {
        var result = hello + '22';
        console.log(result);
        console.log('-------------------------');
        //return result;
        return eval(Function.prototype.bind.apply(func, hello));
    }

};


// using placeholders
//var greetFred = _.partial(greet, _, 'fred');
//greetFred('hi');
// → 'hi fred'