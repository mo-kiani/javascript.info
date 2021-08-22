// Task 1.5.3.4

/**
 * @param {string} str A string that starts with '$' and the rest is a number
 * @returns {string} The number in the string.
 */
function extractCurrencyValue(str) {
    return Number( str.slice(1) );
}

