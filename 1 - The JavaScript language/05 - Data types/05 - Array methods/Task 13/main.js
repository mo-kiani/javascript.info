// Task 1.5.5.13

/**
 * @param {Array} arr of objects with key id of unique value within arr
 * @returns {Object} 
 *      an object where each object in arr is found with its id as the key.
 */
function groupById(arr) {
    let lookup = {};
    for ( let item of arr ) {
        lookup[item.id] = item;
    }
    return lookup
}

