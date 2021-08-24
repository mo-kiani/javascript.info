// Task 1.5.9.2

describe("count", function() {

  it("given case", () => {
      let user = {
          name: 'John',
          age: 30,
      };

      assert.equal( count(user), 2 );
  });

  it("empty case (0)", () => {
      let empty = {};

      assert.equal( count(empty), 0 );
  });

});

