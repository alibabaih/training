_.partial = function(func) {

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

};
