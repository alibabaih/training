(function () {
  'use strict';

  describe('Exercise 2-2 jQuery Testing', function() {
    it('should return width of the object 200px', function() {
      $('.change-width').should.have.css('width');
    });
  });


  //describe('Give it some context', function () {
  //  describe('maybe a bit more context here', function () {
  //    it('should run here few assertions', function () {
  //
  //    });
  //  });
  //});

})();
