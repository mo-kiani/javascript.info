// Task 1.5.11.8

/**
 * @param {number} date
 *      any Date 
 * @returns {string} 
 *      a user-friendly formatting of the given date, with useful relative 
 *      statements (like "30 sec. ago") if the given date is sufficiently close
 *      to the present and in the past.
 */
function formatDate(date) {
    let miliseconds_past = Math.floor(Date.now()) - Math.floor(date.getTime());
    if (miliseconds_past < 0) {
        // skip all other conditions
    } else if (miliseconds_past < 1000) {
        return "right now";
    } else if (miliseconds_past < 1000 * 60) {
        return `${Math.floor( miliseconds_past / 1000 )} sec. ago`
    } else if (miliseconds_past < 1000 * 60 * 60) {
        return `${Math.floor( miliseconds_past / (1000 * 60) )} min. ago`
    }

    let day = date.getDate().toString();
    day = (day.length < 2) ? '0'+day : day;
    let month = ( date.getMonth() + 1 ).toString();
    month = (month.length < 2) ? '0'+month : month;
    let year = ( date.getFullYear() % 100 ).toString();
    year = (year.length < 2) ? '0'+year : year;
    let hour = ( date.getHours() ).toString();
    hour = (hour.length < 2) ? '0'+hour : hour;
    let minute = ( date.getMinutes() ).toString();
    minute = (minute.length < 2) ? '0'+minute : minute;

    return `${day}.${month}.${year} ${hour}:${minute}`;
}

