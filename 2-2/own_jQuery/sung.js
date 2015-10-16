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

(function (window, undefined) {

    // Handle DOMContentLoaded event
    var domReadyStack = [];

    function handleDOMReady(fn) {
        return document.readyState === 'complete' ? fn.call(document) : domReadyStack.push(fn);
    }

    document.addEventListener('DOMContentLoaded', function onDOMReady() {
        document.removeEventListener('DOMContentLoaded', onDOMReady);
        while (domReadyStack.length) {
            domReadyStack.shift().call(document);
        }
    });

    // ion constructor
    function ion(selector) {

        if (!(this instanceof ion)) {
            return new ion(selector);
        }

        if (typeof selector === 'function') {
            return handleDOMReady(selector);
        }

        // Number of elements in collection
        this.length = 0;

        // Nodes collection array
        this.nodes = [];

        // HTMLElements and NodeLists are wrapped in nodes array
        if (selector instanceof HTMLElement || selector instanceof NodeList) {
            this.nodes = selector.length > 1 ? [].slice.call(selector) : [selector];
        } else if (typeof selector === 'string') {
            if (selector[0] === '<' && selector[selector.length - 1] === ">") {
                // Create DOM elements
                this.nodes = [createNode(selector)];
            } else {
                // Query DOM
                this.nodes = [].slice.call(document.querySelectorAll(selector));
            }
        }

        if (this.nodes.length) {
            this.length = this.nodes.length;
            for (var i = 0; i < this.nodes.length; i++) {
                this[i] = this.nodes[i];
            }
        }
    }

    function createNode(html) {
        var div = document.createElement('div');
        div.innerHTML = html;
        return div.firstChild;
    }

    window.ion = ion;

})(window);



