// Task 1.5.5.8

/**
 * @param {Array} arr Array of objects with 'name' and 'surname' properties
 * @returns {Array} an Array of copies of all the objects but with name and 
 *      surname combined into fullName, which is a space-separated concatenation
 *      of name and surname in that order.
 */
function mapToObjects(arr) {
    return arr.map( item => {
        let obj = Object.assign({}, item, {fullName: `${item.name} ${item.surname}`});
        delete obj.name;
        delete obj.surname;
        return obj;
    } );
}

