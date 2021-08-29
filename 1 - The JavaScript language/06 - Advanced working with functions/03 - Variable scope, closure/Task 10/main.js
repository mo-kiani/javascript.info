// Task 1.6.3.10

function makeArmy() {
  let shooters = [];

  function shooterFactory(i) {
      return function() { alert(i) };
  }

  let i = 0;
  while (i < 10) {
    let shooter = shooterFactory(i);
    shooters.push(shooter); 
    i++;
  }

  return shooters;
}

let army = makeArmy();

for ( let shooter of army ) {
    shooter();
}

