// Task 1.6.3.9

describe("byField", function() {
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  it("given example by name", () => {
    users.sort( byField('name') );

    assert.equal( users.length, 3);

    assert.equal( users[0].name, 'Ann');
    assert.equal( users[1].name, 'John');
    assert.equal( users[2].name, 'Pete');
  });

  it("given example by age", () => {
    users.sort( byField('age') );

    assert.equal( users.length, 3);

    assert.equal( users[0].name, 'Pete');
    assert.equal( users[1].name, 'Ann');
    assert.equal( users[2].name, 'John');
  });

});

