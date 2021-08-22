// Task 1.5.3.2

/**
 * @param {string} str some given string
 * @returns {boolean} true iff str contains "XXX" or "viagra" (case-insensitive)
 */
function checkSpam(str) {
    let lower = str.toLowerCase();
    return Boolean( lower.includes('xxx') || lower.includes('viagra') );
}

