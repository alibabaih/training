var _ = {
    partial: function() {
        console.log(arguments);
        return function() {
            console.log(arguments);
            return this;
        }
    }
};




var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// → 'hello fred'

// using placeholders
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// → 'hi fred'