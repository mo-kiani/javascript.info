// Task 1.5.11.5

/**
 * @param {number} year
 *      an integer representing a year
 * @param {number} month 
 *      an integer representing a month (Jan is 0, Dec is 11)
 * @returns {number} 
 *      The number of days in the given month of the given year in the Gregorian
 *      calendar.
 */
function getLastDayOfMonth(year, month) {
    return ( new Date(year, month+1, 0) ).getDate();
}

