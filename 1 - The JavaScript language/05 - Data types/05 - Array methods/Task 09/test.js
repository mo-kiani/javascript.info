// Task 1.5.5.9

describe("sortByAge", function() {

  it("given case", () => {
      let john = {name: "John", age: 25};
      let pete = {name: "Pete", age: 30};
      let mary = {name: "Mary", age: 28};

      let arr = [john, pete, mary];

      sortByAge(arr);

      assert.equal(arr[0].name, 'John');
      assert.equal(arr[1].name, 'Mary');
      assert.equal(arr[2].name, 'Pete');
  });

});

