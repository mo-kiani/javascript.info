// Task 1.5.3.3

/**
 * @param {string} str some given string
 * @param {number} maxlength some integer representing the desired max length
 * @returns {string} the given str truncated to fit in maxlength, ending with 
 *      ellipsis ("...") if truncation was required. The returned string is 
 *      guaranteed to have a length less that or equal to the given maxlength.
 */
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substr(0, maxlength-1) + String.fromCodePoint(2026);
    } else {
        return str;
    }
}

