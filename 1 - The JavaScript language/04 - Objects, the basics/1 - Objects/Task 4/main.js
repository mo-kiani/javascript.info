// Task 1.4.1.4

/**
 * @description Double the value of all string-keyed enumerable properies of obj
 *     that are of type number
 * @param {obj} obj any object
 * @affects obj
 */
function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] !== 'number') continue;

        obj[key] *= 2;
    }
}

