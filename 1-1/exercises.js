/**
 * Return number of days to New Year from given date
 * @param d Date object
 */
function daysUntilNewYear(d) {
    // TODO Not implemented yet
    var curDate = new(Date);
    var dayCount = (curDate - d) / (1000 * 60 * 60 * 24);
    //console.log(dayCount);
    return Math.round(dayCount);
}

/**
 * Reverse the string
 * @param string string to reverse
 */
function reverse(string) {
    // TODO Not implemented yet
    var o = [];
    for (var i = string.length - 1, j = 0; i >= 0; i--, j++)
        o[j] = string[i];
    return o.join('');
}

/**
 * Check if object has a given property which contains number
 * Note: Both arguments can be not defined.
 * Return either the number or null
 * @param obj object to check
 * @param prop property name to check
 */
function containsNumber(obj, prop) {

    if (obj === null || Object.keys(obj).length === 0) { //check if null or empty
        return null;
    } else {
        for (var i in obj) {
            //console.log(i, ":", obj[i]);
            if (obj.hasOwnProperty(i)) {
                if (i === prop) {
                    return obj[i];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }

}

/**
 * Serialize the object into string in .properties format
 * http://en.wikipedia.org/wiki/.properties
 * Note: string values aren't wrapped with quotes in result
 *
 * Example: {a: '1'} becomes 'a=1'
 *
 * @param obj object to serialize
 */
function serialize(obj) {
    // TODO Not implemented yet
    //console.log(JSON.stringify(obj));
    if (Object.keys(obj).length === 0) {
        return '';
    }
    
    for(var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return i + "=" + obj[i];
        }
    }
    
    
}