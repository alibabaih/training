'use strict';

module.exports.filter = function(predicate) {

    var slice = Array.prototype.slice,
        func = slice.call(arguments, 1)[0],
        iterate = predicate,
        localArr = [];

    iterate.forEach(function(key) {
        if(func.call(null, key)) {
            localArr.push(key);
            return localArr;
        }
    });

}