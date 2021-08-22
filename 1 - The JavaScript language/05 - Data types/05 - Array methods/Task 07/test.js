// Task 1.5.5.7

describe("mapToNames", function() {

  it("given case", () => {
      let john = {name: "John", age: 25};
      let pete = {name: "Pete", age: 30};
      let mary = {name: "Mary", age: 28};

      let users = [john, pete, mary ];
      let names = mapToNames(users);

      assert.equal(names[0], 'John');
      assert.equal(names[1], 'Pete');
      assert.equal(names[2], 'Mary');
  });

});

