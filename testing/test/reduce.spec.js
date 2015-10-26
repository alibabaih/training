var expect = require('chai').expect;

describe("Reduces collection to a certain value: ", function() {
    it("should return sum of the integers in array", function() {
        expect(_.reduce([10, 20], function(total, n) {
            return total + n;
        }).to.equal(30));
    });
    it("should return a NaN", function() {
        expect(_.reduce([undefined, 20], function(total, n) {
            return total + n;
        }).to.be.a(NaN));
    });
    it("should be a number", function() {
        expect(_.reduce([undefined, 20], function(total, n) {
            return total + n;
        }).to.be.a('number'));
    });
    it("should be a null", function() {
        expect(_.reduce([null, null], function(total, n) {
            return total + n;
        }).to.be.a('null'));
    });
});