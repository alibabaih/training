/**
 * Using _.partial
*/
var greet = function(greeting, name, age) {
    return greeting + ' ' + name + ' ' + age;
};

//var greet = function(greeting, name) {
//    return '11';
//};

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