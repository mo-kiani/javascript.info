// Task 1.5.5.11

/**
 * @param {Array} users 
 *      Array of objects with 'age' property as number
 * @affects users
 *      average age of objects in users
 */
function getAverageAge(users) {
    return users.reduce((acc, item) => acc + item.age, 0) / users.length;
}

