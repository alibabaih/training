var expect = require('chai').expect;

describe("Creates an array of values: ", function() {
    it("should return only even integers in array", function() {
        expect(map([4, 5, 6], function(n) {
            return n * 2;
        }).to.equal([8, 10, 12]));
    });
    it("should return a NaN", function() {
        expect(filter([4, undefined, 6], function(n) {
            return n * 2;
        }).to.be.a(NaN));
    });
    it("should be an array", function() {
        expect(filter([4, 5, 6], function(n) {
            return n * 2;
        }).to.be.a('array'));
    });
    it("should be a null", function() {
        expect(filter([null, null], function(n) {
            return n * 2;
        }).to.be.a('null'));
    });
});