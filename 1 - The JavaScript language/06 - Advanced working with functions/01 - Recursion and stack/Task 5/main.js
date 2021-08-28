// Task 1.6.1.5

/**
 * @param {Object} node
 *      a linked list node of form {value: <number>, next: <node>|null}
 * @description
 *      alerts each value in reverse order (separately)
 */
function printReverseListIterative(list) {
    let stack = [];
    while ( list !== null ) {
        stack.push(list.value);
        list = list.next;
    }
    while ( stack.length > 0 ) {
        alert( stack.pop() );
    }
}
function printReverseListRecursive(list) {
    if ( list === null ) return;
    printReverseListRecursive(list.next);
    alert(list.value);
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
printReverseListIterative(list);

alert('starting recursive implementation');
printReverseListRecursive(list);

