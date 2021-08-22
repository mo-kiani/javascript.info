// Task 1.5.7.2

/**
 * @param {Array} arr
 *      An array of words (strings)
 * @returns {Array} 
 *      An array containing only one member of each anagram group in arr.
 *      An anagram group is a set of words which share the same count of every
 *      symbol. The first occurring member of a group is the one that's in the
 *      return. Comparisons are case insensitive.
 */
function aclean(arr) {
    function normalizeAnagram(word) {
        return Array.from( word.toLowerCase() ).sort().join('');
    }

    let map = new Map();
    for ( let word of arr ) {
        let normal = normalizeAnagram(word);
        if (!map.has(normal)) {
            map.set(normal, word);
        }
    }

    return Array.from( map.values() );
}

