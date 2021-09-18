// Task 1.8.1.2

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};


// Part 1
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

