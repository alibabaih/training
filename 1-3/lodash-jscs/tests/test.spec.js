var Checker = require()
//take out in a global scope
var expect = ('chai').expect;
var assert = chai.assert;


describe("Check reduce", function() {

    it("Accumulate array", function() {
        assert.equal(_.reduce([10, 20], function(total, n) {
            return total + n;
        }), 30);
    });

});

describe('Testing lodash functionality', function() {

    'use strict';

    it('should return number of days until New Year', function() {
        expect(daysUntilNewYear(new Date(2015, 5, 1))).to.equal(134);
    });

    it('should reverse the string', function() {
        expect(reverse('123abcABC')).to.equal('CBAcba321');
    });

    it('1. should check if object contains number', function() {
        expect(containsNumber(null, null)).to.be.null();
    });

    it('2. should check if object contains number', function() {
        expect(containsNumber({a: '1'}, null)).to.be.null();
    });

    it('3. should check if object contains number', function() {
        expect(containsNumber({a: 1}, null)).to.be.null();
    });

    it('4. should check if object contains number', function() {
        expect(containsNumber({a: 1}, 'a')).to.equal(1);
    });

    it('5. should check if object contains number', function() {
        expect(containsNumber({}, null)).to.be.null();
    });

    it('1. should serialize an object into .properties format', function() {
        expect(serialize({})).to.equal('');
    });

    it('2. should serialize an object into .properties format', function() {
        expect(serialize({a: 1})).to.equal('a=1');
    });

    it('3. should serialize an object into .properties format', function() {
        expect(serialize({o: {a: 1, b: 2}, c : 'a'})).to.equal('o.a=1\no.b=2\nc=a');
    });

});

