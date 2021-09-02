// Task 1.6.6.1


// Function property variant
function makeCounter() {


  function counter() {
    return ++counter.count;
  };

  counter.count = 0;

  counter.set = function(value) {
      return counter.count = value;
  }

  counter.decrease = function() {
    return --counter.count;
  }

  return counter;
}


// Closure variant
function makeCounter() {

  let count = 0

  function counter() {
    return ++count;
  };

  counter.set = function(value) {
      return count = value;
  }

  counter.decrease = function() {
    return --count;
  }

  return counter;
}

