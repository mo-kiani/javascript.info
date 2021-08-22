// Task 1.5.5.11

describe("getAverageAge", function() {

  it("given case", () => {
      let john = {name: "John", age: 25};
      let pete = {name: "Pete", age: 30};
      let mary = {name: "Mary", age: 29};

      let arr = [john, pete, mary];

      assert.equal( getAverageAge(arr), 28 );
  });

});

