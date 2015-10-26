module.exports = {
    nextPrime: function(n) {
        var smaller;
        n = Math.floor(n);

        if (n >= 2) {
            smaller = 1;
            while (smaller * smaller <= n) {
                n++;
                smaller = 2;
                while ((n % smaller > 0) && (smaller * smaller <= n)) {
                    smaller++;
                }
            }
            return n;
        } else {
            return 2;
        }
    },



}
//var _ = {};
//var greeting = function(greeting, name) {
//    return greeting + ' ' + name;
//};
//var hello = _.partial(greeting, 'Hello')