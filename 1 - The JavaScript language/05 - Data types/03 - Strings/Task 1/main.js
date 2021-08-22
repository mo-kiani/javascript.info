// Task 1.5.3.1

/**
 * @param {string} str some given string
 * @returns {string} the given string with the first letter capitalized.
 */
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

