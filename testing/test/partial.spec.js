var expect = require('chai').expect,
    app = {},
    greet = function(greeting, name) { return greeting + ' ' + name; },
    sayHelloTo = app.partial(greet, 'hello');

describe("Creates a function that invokes func with partial arguments: ", function() {
    it("should return only even integers in array", function() {
        expect(partial(sayHelloTo('Fred')).to.equal('Hello Fred'));
    });
    it("should return a NaN", function() {
        expect(partial([4, undefined, 6], function(n) {
            return n * 2;
        }).to.be.a(NaN));
    });
    it("should be an array", function() {
        expect(partial([4, 5, 6], function(n) {
            return n * 2;
        }).to.be.a('array'));
    });
    it("should be a null", function() {
        expect(partial([null, null], function(n) {
            return n * 2;
        }).to.be.a('null'));
    });
});