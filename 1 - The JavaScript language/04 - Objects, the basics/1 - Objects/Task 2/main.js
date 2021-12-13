// Task 1.4.1.2

/**
 * @param {object} object Any object
 * @return {boolean} false if the given object contains any string-keyed
 *     enumerable properies. true otherwise.
 */
function isEmpty(object) {
    for (key in object) {
        return false;
    }
    return true;
}

