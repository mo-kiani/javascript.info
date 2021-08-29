// Task 1.6.3.9

/**
 * @param {string} fieldName
 *      the name of a property to sort by
 * @returns {function}
 *      a comparator function suitable for sorting an Array of Objects by the
 *      given fieldName.
 */
function byField(fieldName) {
    return (a, b) => {
        if ( a[fieldName] > b[fieldName] ) {
            return 1;
        } else if ( a[fieldName] < b[fieldName] ) {
            return -1;
        } else {
            return 0;
        }
    };
}

