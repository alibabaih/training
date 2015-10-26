'use strict';

var exports = module.exports = {};
module.exports = {
    filter: function(predicate) {
        var slice = Array.prototype.slice, // make array from pseudo-array of the arguments
            func = slice.call(arguments, 1)[0],
            iterate = predicate; // array

        console.log(func);
        console.log(iterate);

        var localArr = [];
        iterate.forEach(function(key) {

            console.log(func.call(null, key));

            if(func.call(null, key)) {

                localArr.push(key);

                console.log(key);
                console.log(localArr);

                return localArr;
            }
        });
    },
    map: function (map, func) {

        var slice = Array.prototype.slice, // make array from pseudo-array of the arguments
            func = slice.call(arguments, 1)[0],
            iterate = map; // array

        console.log(func);
        console.log(iterate);
        console.log(func.apply(null, iterate));
        console.log(Object.keys(iterate));


        if(typeof iterate === 'object') {
            var localArr = [];
            Object.keys(iterate).forEach(function(key) {

                console.log(key + ' ' + iterate[key]);
                console.log(func.call(null, iterate[key]));

                localArr.push(func.call(null, iterate[key]));

                console.log(localArr);

                return localArr;
            });
        }
        return func.apply(null, iterate);
    },
    partial: function(func) {

        var slice = Array.prototype.slice, // make array from pseudo-array of the arguments
            stored_args = slice.call(arguments, 1); // ["Hello,"]

        console.log(stored_args);
        console.log('All arguments from first function are: ' + arguments);

        return function () {
            var new_args = slice.call(arguments), // ["Fred"]
                args = stored_args.concat(new_args);

            console.log(new_args); // ["Fred"]
            console.log(args); // ["Hello,", "Fred"]
            console.log(func);
            console.log(func.apply(null, args)); // apply calls function with specified value 'this' and its arguments in form of the array

            return func.apply(null, args);
        }
    },
    reduce: function(collection, acc) {

        var slice = Array.prototype.slice,
            func = slice.call(arguments, 1)[0], //  function, get it by pointing on it in the array
            localCollection = collection; // { 'a': 1, 'b': 2 }

        console.log(func.apply(null, localCollection)); //return func.apply(null, localCollection);

        localCollection.reduce(function (acc, i) {
            console.log(acc + ' ' + i);
            return acc + i;
        }, 0);

    }
}

function pow() {
    return 8;
}

