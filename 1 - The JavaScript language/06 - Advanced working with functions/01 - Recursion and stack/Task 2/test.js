// Task 1.6.1.2

describe("factorial", function() {

    it("given case 1", () => {
      assert.equal( factorial(1) , 1 );
    });
  
    it("given case 2", () => {
      assert.equal( factorial(2) , 2 );
    });
  
    it("given case 3", () => {
      assert.equal( factorial(3) , 6 );
    });
  
    it("given case 4", () => {
      assert.equal( factorial(4) , 24 );
    });
  
    it("given case 5", () => {
      assert.equal( factorial(5) , 120 );
    });

    it("zero", () => {
      assert.equal( factorial(0) , 1 );
    });

});

