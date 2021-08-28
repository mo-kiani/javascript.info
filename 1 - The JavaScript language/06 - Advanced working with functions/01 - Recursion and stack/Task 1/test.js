// Task 1.6.1.1

describe("sumTo", function() {

  describe("Loop implementation", function() {
      testImplementation(sumToLoop);
  });

  describe("Recursive implementation", function() {
      testImplementation(sumToRecursive);
  });

  describe("Formulaic implementation", function() {
      testImplementation(sumToFormulaic);
  });


  function testImplementation(sumTo) {

    it("given case 1", () => {
      assert.equal( sumTo(1) , 1 );
    });
  
    it("given case 2", () => {
      assert.equal( sumTo(2) , 3 );
    });
  
    it("given case 3", () => {
      assert.equal( sumTo(3) , 6 );
    });
  
    it("given case 4", () => {
      assert.equal( sumTo(4) , 10 );
    });
  
    it("given case 5", () => {
      assert.equal( sumTo(100) , 5050 );
    });

    it("zero", () => {
      assert.equal( sumTo(0) , 0 );
    });

    it("negative 1", () => {
      assert.equal( sumTo(100) , 5050 );
    });

    it("small negative number", () => {
      assert.equal( sumTo(-3) , -6 );
    });

    it("large negative number", () => {
      assert.equal( sumTo(-99) , -4950 );
    });

  }

});

