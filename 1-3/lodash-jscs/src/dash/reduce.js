_.reduce = function(collection, acc) {

    var slice = Array.prototype.slice,
        func = slice.call(arguments, 1)[0], //  function, get it by pointing on it in the array
        localCollection = collection; // { 'a': 1, 'b': 2 }

    console.log(func.apply(null, localCollection)); //return func.apply(null, localCollection);

    localCollection.reduce(function (acc, i) {
        console.log(acc + ' ' + i);
        return acc + i;
    }, 0);

};