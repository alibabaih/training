mocha.setup('bdd');
//take out in a global scope
var expect = ('chai').expect;
var assert = ('chai').assert;


describe("Check reduce", function() {

    it("Accumulate array", function() {
        assert.equal(checker.reduce([10, 20], function(total, n) {
            return total + n;
        }), 30);
    });

});


