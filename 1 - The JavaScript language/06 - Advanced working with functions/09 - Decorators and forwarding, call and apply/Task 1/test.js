// Task 1.6.9.1

describe("spy", function() {

  it("given case", () => {
    function work(a, b) {
        // Replaced the alert statement with a return statement to prevent
        // timeouts of the mocha test framework.
        return a + b;
        // alert( a + b ); 
    }
    work = spy(work);
    
    work(1, 2);
    work(4, 5);

    assert.equal( Array.isArray(work.calls), true );
    assert.equal( work.calls.length, 2 );
    assert.equal( work.calls[0].length, 2 );
    assert.equal( work.calls[1].length, 2 );
    assert.equal( work.calls[0][0], 1);
    assert.equal( work.calls[0][1], 2);
    assert.equal( work.calls[1][0], 4);
    assert.equal( work.calls[1][1], 5);
  });

});

