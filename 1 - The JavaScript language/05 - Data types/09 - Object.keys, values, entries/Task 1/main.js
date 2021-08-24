// Task 1.5.9.1

/**
 * @param {Object} salaries
 *      a mapping of names (strings) to salaries (numbers)
 * @returns {number} 
 *      the sum of all the given salaries
 */
function sumSalaries(salaries) {
    let acc = 0;
    for ( let salary of Object.values(salaries) ) {
        acc += salary;
    }
    return acc;
}

