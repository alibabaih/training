var assert = require('assert')
  , nextPrime = require('./../index').nextPrime
  , reduce = require('./../index').reduce
  //, expect = chai.expect
  //, assert = chai.assert
  , _ = {};

suite('nextPrime', function() {
  test('nextPrime should return the next prime number', function() {
    assert.equal(11, nextPrime(7));
  });

  test('zero and one are not prime numbers', function() {
    assert.equal(2, nextPrime(0));
    assert.equal(2, nextPrime(1));
  });
});

//suite('reduce', function() {
//    test('reduce should summ up two integers in array', function() {
//        assert.equal(30, _.reduce([10,20], function(total, n) {
//            return total + n;
//        }));
//        assert.equal(20, _.reduce([10,10], function(total, n) {
//            return total + n;
//        }));
//    });
//
//});

describe("Check reduce", function() {
    it("Accumulate array", function() {
        assert.equal(_.reduce([10, 20], function(total, n) {
            return total + n;
        }), 30);
    });
});

describe("Check map", function() {
    it("One integer", function() {
        assert.equal(_.map([2], function(n){
            return n * 3;
        }), 6);
    });
    it("An object", function() {
        assert.equal(_.map({ 'a': 1, 'b': 2 }, function(n){
            return n * 3;
        }), 6);
    });
});

describe("Check partial", function() {
    it("One iteration", function() {
        assert.equal(_.partial(greeting, 'Hello'), 'Hello ');
    });
    it("Two iteration", function() {
        assert.equal(hello('Fred'), 'Hello Fred');
    });
});

describe("Check filter", function() {
    it("One iteration", function() {
        assert.equal(_.filter([4, 5, 6], function(n) {
            return n % 2 == 0;
        }), [4, 6]);
    });
});

