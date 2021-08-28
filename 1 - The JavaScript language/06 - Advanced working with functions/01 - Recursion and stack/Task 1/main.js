// Task 1.6.1.1

/**
 * @param {number} n
 *      any integer
 * @returns {number} 
 *      the sum of all integers between and including 0 and n
 */
function sumToLoop(n) {
    let wasNegative = false;
    if ( n < 0 ) {
        n = -n;
        wasNegative = true;
    }

    let acc = 0;
    for ( let i = 1; i <= n; i++ ) {
        acc += i;
    }

    return (wasNegative) ? -acc : acc;
}
function sumToRecursive(n) {
    if ( n === 0 ) return 0;
    if ( n < 0 ) return -sumToRecursive(-n);
    return n + sumToRecursive(n-1);
}
function sumToFormulaic(n) {
    return ( n < 0 ) ? -sumToFormulaic(-n) : ( (n+1) * (n) ) / 2;
}

