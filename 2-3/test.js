/**
 * Converts passed object as follows:
 * 1. Each enumerable property is converted to getter/setter
 * 2. Added special property _stats which have same keys as converted ones
 * 3. Value of obj._stats[prop] is an object with the following properties:
 * <pre><code>

    var stat = {
         lastRead: 0,         // last time when property was read in milliseconds
         lastModified: 0      // last time when property was modified in milliseconds
                              // all properties passed in second argument for this property (see below)
     };
    var property = {
         log: false,          // if true, log each read/write operation for the property to console
         desc: undefined,     // new descriptor of the property
         compute: undefined   // function used to compute this property value passed __ as string __.
                              // Property should be read-only if compute is present
     };

 * </code></pre>
 *
 * 4. Changes to _stats for given property should change the behavior of the property as described
 *
 * Example of usage:
 * <pre><code>
    convert({a: 1, b: 2}, {
        a: {log: true},
        b: {desc: {enumerable: false}, compute: 'a + 1'}
    });
 * </code></pre>
 *
 * @param obj object to convert
 * @param properties object with keys equal to corresponding keys in the obj and values as "property" variable above
 */
function convert(obj, properties) {
    // TODO Not implemented yet
    for (var i = 0; i < properties.length; i++) {
        console.log(properties[i]);
        var property = properties[i];

        function getProperty() {
            return property;
        }

        function setProperty(set) {
            this.set = set;
        }

        Object.defineProperty(obj, _stats, descriptor);
    }

}
