// Task 1.6.1.3

describe("fib", function() {

  describe("Loop implementation", function() {
      testImplementation(fibIterative);
  });

  describe("Recursive implementation", function() {
      testImplementation(fibRecursive);
  });


  function testImplementation(fib) {

    it("base case 0", () => {
      assert.equal( fib(0) , 0 );
    });
  
    it("base case 1", () => {
      assert.equal( fib(1) , 1 );
    });

    it("given case 1", () => {
      assert.equal( fib(3) , 2 );
    });
  
    it("given case 2", () => {
      assert.equal( fib(7) , 13 );
    });
  
    it("given case 3", () => {
      assert.equal( fib(77) , 5527939700884757 );
    });
  
  }

});

