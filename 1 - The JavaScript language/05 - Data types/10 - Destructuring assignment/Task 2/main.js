// Task 1.5.10.2

/**
 * @param {Object} salaries 
 *      a mapping of names {string} to salaries {number} (non-negative)
 * @returns {string} returns the name associated with the highest salaries, 
 *      where ties are handled arbitrarily and an empty input yields null.
 *      
 */
function topSalary(salaries) {
    let highestSalary = 0;
    let highestEarner = null;
    for ( let [name, salary] of Object.entries(salaries) ) {
        if (highestSalary < salary) {
            highestSalary = salary;
            highestEarner = name;
        }
    }
    return highestEarner;
}

