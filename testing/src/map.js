'use strict';

module.exports.map = function (map, func) {

    var slice = Array.prototype.slice,
        func = slice.call(arguments, 1)[0],
        iterate = map,
        localArr = [];

    if(typeof iterate === 'object') {
        Object.keys(iterate).forEach(function(key) {
            localArr.push(func.call(null, iterate[key]));
            return localArr;
        });
    }
    return func.apply(null, iterate);
},