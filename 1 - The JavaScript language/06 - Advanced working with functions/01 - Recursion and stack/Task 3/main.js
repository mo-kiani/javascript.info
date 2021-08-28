// Task 1.6.1.3

/**
 * @param {number} n
 *      any non-negative integer
 * @returns {number} 
 *      The fibonacci number of n
 */
function fibIterative(n) {
    let curr = 0
    let next = 1

    for ( let i = 0; i < n; i++ ) {
        [curr, next] = [next, curr+next];
    }

    return curr;
}

const FIBONACCI_MEMO = new Map([[0, 0], [1, 1]]);
function fibRecursive(n) {
    if ( !(FIBONACCI_MEMO.has(n)) ) {
        FIBONACCI_MEMO.set( n, fibRecursive(n-1) + fibRecursive(n-2) );
    }
    return FIBONACCI_MEMO.get(n);
}

