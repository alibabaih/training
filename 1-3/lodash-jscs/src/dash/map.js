_.map = function (map, func) {

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

}