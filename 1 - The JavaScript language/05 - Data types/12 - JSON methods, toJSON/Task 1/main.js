// Task 1.5.12.1

let user = {
  name: "John Smith",
  age: 35
};

// convert user to JSON
userJSON = JSON.stringify(user);

// create user copy from JSON
userCopy = JSON.parse(userJSON);

