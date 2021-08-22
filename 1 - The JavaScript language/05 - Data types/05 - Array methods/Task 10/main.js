// Task 1.5.5.10

/**
 * @param {Array} arr
 * @affects arr
 *      randomly shuffles arr with uniform probability using Fisher-Yates algo
 */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor( Math.random() * (i+1) );
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
    }
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

