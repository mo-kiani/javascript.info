// Task 1.5.11.7

/**
 * @returns {number} 
 *      The number of seconds remaining in today (local time zone)
 */
function getSecondsToTomorrow() {
    let tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate( tomorrow.getDate() + 1 );
    return Math.floor( (tomorrow.getTime() - Date.now()) / 1000 );
}

alert( getSecondsToTomorrow() );

