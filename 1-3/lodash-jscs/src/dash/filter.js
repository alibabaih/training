_.filter = function(predicate) {
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

}