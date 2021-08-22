// Task 1.5.7.1

/**
 * @param {Array} arr
 * @returns {Array} 
 *      an array containing only unique elements found in arr in original order
 */
function unique(arr) {
    return Array.from ( new Set(arr) );
}

