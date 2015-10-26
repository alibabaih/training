var _ = require('./src/js/lib/dash.js');
var mocha = require('node_modules/mocha/mocha.js');
var chai = require('node_modules/chai/chai.js');
var mocha_conf = require('./tests/test.spec.js');

/**
 * Using _.partial
 */

var greet = function(greeting, name, age) {
    return greeting + ' ' + name + ' ' + age;
};
var sayHelloTo = _.partial(greet, 'Hello,'); // console.log(sayHelloTo);
var greetings = sayHelloTo('Fred', 25);

console.log(greetings);
console.log('---_.partial end---');

/**
 * Using _.reduce
 */

define(function (require) {
    _.reduce([10, 20], function(total, n) {
        return total + n;
    });

    console.log('---_.reduce end---');
});

/**
 * Using _.map
 */

define(function (require) {
    function timesThree(n) {
        return n * 3;
    }
    _.map([1, 2], timesThree);

    _.map({ 'a': 1, 'b': 2 }, timesThree); // [3, 6] (iteration order is not guaranteed)

    console.log('---_.map end---');
});

/**
 * Using _.reduce.filter
 */

define(function (require) {
    _.filter([4, 5, 6], function(n) {
        return n % 2 == 0;
    });
    // → [4, 6]

    console.log('---_.filter end---');
});