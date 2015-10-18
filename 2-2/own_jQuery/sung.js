'use strict';

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
 */

var Select = function(select) {
    Array.call(this);
    //console.log(Array.call(this));

    for(var i = 0; i < select.length; i++) {
        this.push(select[i]);
    }
    //console.log(this);
};

var sung = window.sung = function(arg) {
    var selector = document.querySelectorAll(arg);
    console.log(selector);
    return new Select(selector);

};


Select.prototype = Object.create(Array.prototype); //new object with specified prototype object and properties

Select.prototype.width = function(width) {
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

Select.prototype.height = function(height) {
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

Select.prototype.hasClass = function(className) {
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

Select.prototype.addClass = function(addClass){
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

Select.prototype.removeClass = function(delClass){
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

Select.prototype.toggleClass = function (toggle){
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

Select.prototype.wrap = function(wrap) {
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

Select.prototype.append = function(append) {
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