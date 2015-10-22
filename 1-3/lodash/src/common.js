var greet = function(greeting, name) {
    return greeting + ' ' + name;
};

//var greet = function(greeting, name) {
//    return '11';
//};

var sayHelloTo = _.partial(greet, 'hello');
var greetings = sayHelloTo('fred');
console.log(greetings);