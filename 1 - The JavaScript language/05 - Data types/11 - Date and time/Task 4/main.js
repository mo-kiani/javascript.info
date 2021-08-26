// Task 1.5.11.4

/**
 * @param {Date} date 
 *      any Date
 * @param {number} days 
 *      the number of days to go backwards from given date
 * @returns {number} 
 *      the day of the month <days> days ago from <date>
 */
function getDateAgo(date, days) {
    return ( 
        new Date( 
            date.getFullYear(), 
            date.getMonth(), 
            date.getDate() - days
        ) 
    ).getDate();
}

