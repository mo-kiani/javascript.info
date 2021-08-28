// Task 1.6.1.4

/**
 * @param {Object} node
 *      a linked list node of form {value: <number>, next: <node>|null}
 * @description
 *      alerts each value in order (separately)
 */
function printListIterative(list) {
    while ( list !== null ) {
        alert(list.value);
        list = list.next;
    }
}
function printListRecursive(list) {
    if ( list === null ) return;
    alert(list.value);
    printListRecursive(list.next);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

alert('starting iterative implementation');
printListIterative(list);

alert('starting recursive implementation');
printListRecursive(list);

