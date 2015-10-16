// DOM is not yet ready => $p.length is zero
var $p = ion('p');
console.log('DOM not ready: p elements count %d, %o', $p.length, $p);


// DOM ready event
ion(function() {

    var $p = ion('p');
    console.log('DOM ready: p elements count %d, %o', $p.length, $p);

    var $newDiv = ion('<div>New div</div>');
    document.body.appendChild($newDiv[0]);
});