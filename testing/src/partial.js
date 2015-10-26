'use strict';

module.exports.partial = function(func) {

    var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);

    return function () {
        var new_args = slice.call(arguments),
            args = stored_args.concat(new_args);

        return func.apply(null, args);
    }
}