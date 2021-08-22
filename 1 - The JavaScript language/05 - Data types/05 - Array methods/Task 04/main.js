// Task 1.5.5.4

/**
 * @param {Array} arr some given Array of numbers
 * @affects arr sorts in reverse order
 */
function reverseSort(arr) {
    arr.sort( (a, b) => a - b );
    arr.reverse();
}

