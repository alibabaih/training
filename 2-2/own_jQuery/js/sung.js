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
 * Implement Gulp
 * Rewrite prototype methods on class methods
 * Add Babel - JS compiler
 *
 */

var Select = function(select) {
    Array.call(this);

    //console.log(Array.call(this));

    for(var i = 0; i < select.length; i++) {
        this.push(select[i]);
    }

    this.width = function(width) {
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

    this.height = function(height) {
        if(height) {
            for(var i = 0; i < this.length; i++) {
                this[i].style.height = height + 'px'
            }
            return this;
        }
        else {
            return this[0].style.height;
        }
    };

    this.hasClass = function(className) {
        for(var i = 0; i < this.length; i++) {
            if(this[i].classList.contains(className)) {
                console.log('This element contains class which you are looking for.');
                return true;
            }
            else {
                return false;
            }

        }
    }

    this.addClass = function(addClass){
        if(addClass) {
            for(var i = 0; i < this.length; i++) {
                this[i].className =  this[i].className + ' ' + addClass;
            }
            return this;
        }
        else {
            return this[0].className;
        }
    }

    this.removeClass = function(delClass){
        if(delClass) {
            for(var i = 0; i < this.length; i++) {
                this[i].classList.remove(delClass);
            }
            return this;
        }
        else {
            return this[0].className;
        }
    }


    this.toggleClass = function (toggle){
        if(toggle) {
            for(var i = 0; i < this.length; i++) {
                this[i].classList =  this[i].classList.toggle(toggle);
            }
            return this;
        }
        else {
            return this[0].className;
        }
    }


    this.wrap = function(wrap) {
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
    }

    this.append = function(append) {
        if(append) {
            for(var i = 0; i < this.length; i++) {
                this[i].innerHTML = this[i].innerHTML + append;
            }
            return this;
        }
        else {
            return this[0].innerHTML;
        }
    }



};

var sung = window.sung = function(arg) {
    var selector = document.querySelectorAll(arg);
    console.log(selector);
    return new Select(selector);

};


Select.prototype = Object.create(Array.prototype); //new object with specified prototype object and properties

Select.prototype.prepend = function(prepend) {
    if(prepend) {
        for(var i = 0; i < this.length; i++) {
            this[i].innerHTML = prepend + this[i].innerHTML;
        }
        return this;
    }
    else {
        return this[0].innerHTML;
    }
}