// Task 1.5.5.1

/**
 * @param {string} str some given string
 * @returns {string} returns copy of given string but with all dashes removed 
 *      and the characters after dashes capitalized.
 */
function camelize(str) {
    return str.split('-').map((item, index) => {
        if ( index === 0 || item === ''){
            return item
        } else {
            return item[0].toUpperCase() + item.slice(1);
        }
    }).join('');
}

