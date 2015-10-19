'use strict';
//gulp, методы на классе,  babel, connect, serv static
//gulp watch
//tests gulp
//yo generator

/**
 * Implement jQuery functional
 * width(),
 * height(),
 * hasClass(),
 * addClass(),
 * toggleClass(),
 * removeClass(),
 * wrap(),
 * append(),
 * prepend()
 *
 * YO generator
 * Gulp watch
 * Babel compiler
 * Write tests for JS
 */

var Select = class Select extends Array{

  constructor(select) {
    super();
    //Array.call(this);

    for(var i = 0; i < select.length; i++) {
      this.push(select[i]);
    }

  }

  width(width) {
    if(width) {
      for(var i = 0; i < this.length; i++) {
        this[i].style.width = width + 'px';
      }
      return this;
    }
    else {
      return this[0].style.width;
    }
  };

  height(height) {
    if(height) {
      for(var i = 0; i < this.length; i++) {
        this[i].style.height = height + 'px';
      }
      return this;
    }
    else {
      return this[0].style.height;
    }
  };

  hasClass(className) {
    for(var i = 0; i < this.length; i++) {
      if(this[i].classList.contains(className)) {
        console.log('This element contains class which you are looking for.');
        return true;
      }
      else {
        return false;
      }

    }
  };

  addClass(addClass){
    if(addClass) {
      for(var i = 0; i < this.length; i++) {
        this[i].className = this[i].className + ' ' + addClass;
      }
      return this;
    }
    else {
      return this[0].className;
    }
  };

  removeClass(delClass){
    if(delClass) {
      for(var i = 0; i < this.length; i++) {
        this[i].classList.remove(delClass);
      }
      return this;
    }
    else {
      return this[0].className;
    }
  };

  toggleClass(toggle){
    if(toggle) {
      for(var i = 0; i < this.length; i++) {
        this[i].classList.toggle(toggle);
      }
      return this;
    }
    else {
      return this[0].className;
    }
  };

  wrap(wrap) {
    if(wrap) {
      var tags = wrap.match(/<.+?>/g);
      console.log(tags);

      for(var i = 0; i < this.length; i++) {
        this[i].outerHTML = tags[0] + this[i].outerHTML + tags[1];
      }
      return this;
    }
    else {
      return this[0].outerHTML;
    }
  };

  append(append) {
    if(append) {
      for(var i = 0; i < this.length; i++) {
        this[i].innerHTML = this[i].innerHTML + append;
      }
      return this;
    }
    else {
      return this[0].innerHTML;
    }
  };

  prepend(prepend) {
    if(prepend) {
      for(var i = 0; i < this.length; i++) {
        this[i].innerHTML = prepend + this[i].innerHTML;
      }
      return this;
    }
    else {
      return this[0].innerHTML;
    }

  };

};

var sung = window.sung = function(arg) {
  var selector = document.querySelectorAll(arg);
  console.log(selector);
  return new Select(selector);

};


Select.prototype = Object.create(Array.prototype); //new object with specified prototype object and properties





sung('.change-width').width(200);
sung('.change-height').height(70);
sung('.find-class').hasClass('cool-class');
sung('.add-class').addClass('added-class');
sung('.nice-class').removeClass('scram');
sung('.add-material').append(' <strong>Appended</strong>').prepend('<strong>Prepended</strong> ');
sung('.add-material').wrap('<div class="wrapped"></div>');
sung('.toggle').toggleClass('toggleable');
