// Task 1.5.11.6

/**
 * @returns {number} 
 *      The number of seconds since the beginning of today (local time zone)
 */
function getSecondsToday() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.floor( (Date.now() - today.getTime()) / 1000 );
}

alert( getSecondsToday() );

