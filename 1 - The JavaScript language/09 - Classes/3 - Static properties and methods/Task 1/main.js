// Task 1.9.3.1

class Rabbit extends Object {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error

