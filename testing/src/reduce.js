'use strict';

module .exports.reduce = function(collection, acc) {

    var slice = Array.prototype.slice,
        func = slice.call(arguments, 1)[0],
        localCollection = collection;

    localCollection.reduce(function (acc, i) {
        console.log(acc + ' ' + i);
        return acc + i;
    }, 0);

}