'use strict';
<<<<<<< HEAD

var _ = {};
=======
var _ = {};
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
        //console.log(func.apply(null, args)); // apply calls function with specified value 'this' and its arguments in form of the array
        
        return func.apply(null, args);
    }

};

_.reduce = function(collection) {
    var slice = Array.prototype.slice,
        func = slice.call(arguments, 1)[0], //  function, get it by pointing on it in the array
        localCollection = collection, // { 'a': 1, 'b': 2 }
        iterator = slice.call(arguments)[2];
       
    
    for(var prop in localCollection) {
        console.log(prop + ' = ' + localCollection[prop]);
        return func.apply(null, localCollection, localCollection[prop], prop);
    }
    
    /*
    Array.prototype.each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    */
    console.log(func);
    console.log(func.apply(null, localCollection));
    console.log(slice.call(arguments, 0));
    
    return func.apply(null, localCollection, localCollection[prop], prop);
    //return func.apply(null, localCollection);
    

    
};
>>>>>>> 95fe15a01b115d07ac5e4ef3c13ef0d1917326ec
