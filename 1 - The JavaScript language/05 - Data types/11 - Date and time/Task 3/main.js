// Task 1.5.11.3

/**
 * @param {Date} date 
 *      any Date
 * @returns {number} returns European version of weekday, where Monday is 1 and
 *      Sunday is 7
 */
function getLocalDay(date) {
    return date.getDay() || 7;
}

