// Task 1.6.3.8

/**
 * @param {number} a
 * @param {number} b
 * @returns {function}
 *      function(value) returns true iff value is greater than or equal to a and
 *      less than or equal to b
 */
function inBetween(a, b) {
    return function(value) { return (a <= value) && (value <= b) };
}

/**
 * @param {Array} arr
 * @returns {function}
 *      function(value) returns true iff there exists an element in arr such
 *      that element === value
 */
function inArray(arr) {
    return function(value) {
        for ( let element of arr ) {
            if ( element === value ) {
                return true;
            }
        }
        return false;
    };
}

