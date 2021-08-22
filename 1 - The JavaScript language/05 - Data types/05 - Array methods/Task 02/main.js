// Task 1.5.5.2

/**
 * @param {Array} arr some given Array of numbers
 * @param {number} a a lower bound
 * @param {number} b an upper bound
 * @returns {Array} the subsequence of arr containing all elements greater than 
 *      or equal to a and less than or equal to b.
 */
function filterRange(arr, a, b) {
    return arr.filter( number => number >= a && number <= b );
}

