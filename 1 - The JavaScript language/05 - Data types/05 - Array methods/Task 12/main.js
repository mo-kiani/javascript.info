// Task 1.5.5.12

/**
 * @param {Array} arr
 * @returns {Array} 
 *      an array containing only unique elements found in arr in original order
 */
function unique(arr) {
    let result = [];
    for ( let item of arr ) {
        if ( !result.includes(item) ) {
            result.push(item);
        }
    }
    return result;
}

