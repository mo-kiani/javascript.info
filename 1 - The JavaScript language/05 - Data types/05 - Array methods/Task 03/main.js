// Task 1.5.5.3

/**
 * @param {Array} arr 
 *      some given Array of numbers
 * @param {number} a 
 *      a lower bound
 * @param {number} b 
 *      an upper bound
 * @affects arr 
 *      all elements less than a or greater than b are removed
 */
function filterRangeInPlace(arr, a, b) {
    let i = 0;
    while ( i < arr.length ) {
        if ( arr[i] < a || arr[i] > b ) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
}

