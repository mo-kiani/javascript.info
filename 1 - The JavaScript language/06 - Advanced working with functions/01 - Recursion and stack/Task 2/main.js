// Task 1.6.1.2

/**
 * @param {number} n
 *      any integer greater than or equal to 1
 * @returns {number} 
 *      the factorial of n (n!)
 */
function factorial(n) {
    return ( n === 0 ) ? 1 : n * factorial(n-1);
}

