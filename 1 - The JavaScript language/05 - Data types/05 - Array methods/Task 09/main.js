// Task 1.5.5.9

/**
 * @param {Array} arr 
 *      Array of objects with 'age' property as number
 * @affects arr
 *      sorted by (increasing) age
 */
function sortByAge(arr) {
    arr.sort( (a, b) => a.age - b.age );
}

