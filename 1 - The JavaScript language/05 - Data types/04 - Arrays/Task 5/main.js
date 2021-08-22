// Task 1.5.4.5

/**
 * @param {Array} arr an array of numbers
 * @returns {number} the maximum sum of any continguous subarray of arr.
 */
function getMaxSubSum(arr) {
    let acc = 0;
    let min_acc = 0;
    let best = 0;
    for ( let n of arr ) {
        acc += n;
        min_acc = Math.min(min_acc, acc);
        best = Math.max(best, acc - min_acc);
    }
    return best;
}

