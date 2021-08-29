// Task 1.6.3.6

/**
 * @param {number} a 
 *      any number 
 * @returns {function}
 *      function(b) which returns a + b
 */
function sum(a) {
    return function(b) { return a + b };
}

