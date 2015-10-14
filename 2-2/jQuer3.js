'use strict';
//width(), height(), hasClass(), addClass(), ,toggleClass(), removeClass(), wrap(), append(), prepend()

var $$$ = window.$$$ = function(arg) {
    var arg2 = document.querySelectorAll(arg);
    return new Select(arg2);
};

var Select = function(arg2) {
    Array.call(this);
    for(var i - 0; i < arg2.length; i++) {
        this.push(arg2[i]);
    }
};

Select.prototype = Object.create(Array.prototype);

Select.prototype.width = function(arg1) {
    if(arg1) {
        for(var i = 0; i < this.length; i++) {
            this[i].style.width = arg1 + 'px';
        }
        return this;
    }
    else {
        return this[0].style.width;
    }
};

Select.prototype.height = function(arg1) {
    if(arg1) {
        for(var i = 0; i < this.length; i++) {
            this[i].style.width = arg1 + 'px'
        }
        return this;
    }
    else {
        return this[0].style.width;
    }
};

Select.prototype.hasClass = function(className) {
    for(var i = 0; i < this.length; i++) {
        if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
        return false;
    }
}

Select.prototype.addClass = function(el, class){
    el.className += ' '+class;
}

Select.prototype.toggleClass = function element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

Select.prototype.removeClass = function(el, class){
    var elClass = ' '+el.className+' ';
    while(elClass.indexOf(' '+class+' ') != -1)
         elClass = elClass.replace(' '+class+' ', '');
    el.className = elClass;
}

Select.prototype.wrap = function(elms) {
    // Convert `elms` to an array, if necessary.
    if (!elms.length) elms = [elms];

    // Loops backwards to prevent having to clone the wrapper on the
    // first element (see `child` below).
    for (var i = elms.length - 1; i >= 0; i--) {
        var child = (i > 0) ? this.cloneNode(true) : this;
        var el    = elms[i];

        // Cache the current parent and sibling.
        var parent  = el.parentNode;
        var sibling = el.nextSibling;

        // Wrap the element (is automatically removed from its current
        // parent).
        child.appendChild(el);

        // If the element had a sibling, insert the wrapper before
        // the sibling to maintain the HTML structure; otherwise, just
        // append it to the parent.
        if (sibling) {
            parent.insertBefore(child, sibling);
        } else {
            parent.appendChild(child);
        }
    }
}

Select.prototype.append = function(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

Select.prototype.prepend = function(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.insertBefore(div.children[0]);
    }
}


document.getElementById('test-btn').addEventListener('click', function() {
    toggleClass(document.getElementById('test'), 'test-class');
});//toggle
