// Task 1.5.11.2

/**
 * @param {Date} date 
 *      any Date
 * @returns {string} returns one of 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', or 'SA'
 *      corresponding to the weekday of the given date.
 */
function getWeekDay(date) {
    let lookup = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return lookup[ date.getDay()];
}

