/**
 * Using _.partial
<<<<<<< HEAD
 */
    var greet = function(greeting, name, age) {
        return greeting + ' ' + name + ' ' + age;
    };
    var sayHelloTo = _.partial(greet, 'Hello,'); // console.log(sayHelloTo);
    var greetings = sayHelloTo('Fred', 25);
=======
*/
var greet = function(greeting, name, age) {
    return greeting + ' ' + name + ' ' + age;
};
>>>>>>> 95fe15a01b115d07ac5e4ef3c13ef0d1917326ec

console.log('---_.partial end---');

<<<<<<< HEAD
/**
 * Using _.reduce
*/
    _.reduce([10, 20], function(total, n) {
        return total + n;
    });

console.log('---_.reduce end---');

/**
 * Using _.map
 */
    function timesThree(n) {
        return n * 3;
    }
    _.map([1, 2], timesThree);

    _.map({ 'a': 1, 'b': 2 }, timesThree); // [3, 6] (iteration order is not guaranteed)

console.log('---_.map end---');

/**
 * Using _.reduce.filter
 */
    _.filter([4, 5, 6], function(n) {
        return n % 2 == 0;
    });
    // → [4, 6]

console.log('---_.filter end---');
=======
var sayHelloTo = _.partial(greet, 'Hello,'); // console.log(sayHelloTo);
var greetings = sayHelloTo('Fred', 25);
//console.log(greetings);

/**
 * Using _.reduce
*/
_.reduce([1, 20], function(total, n) {
  return total + n;
});

_.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
  result[key] = n * 3;
  return result;
}, {});
// → { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
>>>>>>> 95fe15a01b115d07ac5e4ef3c13ef0d1917326ec
