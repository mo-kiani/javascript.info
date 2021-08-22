// Task 1.5.5.12

describe("unique", function() {

  it("given case", () => {
    let strings = [
        "Hare", 
        "Krishna", 
        "Hare", 
        "Krishna", 
        "Krishna", 
        "Krishna", 
        "Hare", 
        "Hare", 
        ":-O" 
    ];

    let result = unique(strings);

    assert.equal(strings.length, 9);

    assert.equal(result.length, 3);
    assert.equal( result[0], "Hare" );
    assert.equal( result[1], "Krishna" );
    assert.equal( result[2], ":-O" );
  });

});

