// Task 1.4.1.3

/**
 * @param {object} object any object
 * @return {number} the sum of the string-keyed enumerable properies of object.
 *     0 if there are no such properties.
 * @requires all enumerable string-keyed properties of the given object have
 *     numberic values (ie -5, or '-5').
 */
function sumProps(object) {
    let acc = 0;
    for (key in object) {
        acc += +object[key];
    }
    return acc;
}

