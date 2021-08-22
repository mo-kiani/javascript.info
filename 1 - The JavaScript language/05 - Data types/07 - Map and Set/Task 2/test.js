// Task 1.5.7.2

describe("aclean", function() {

  it("given case", () => {
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    let result = aclean(arr);

    assert.equal( result.length, 3 );

    assert.equal( result[0], "nap" );
    assert.equal( result[1], "teachers" );
    assert.equal( result[2], "ear" );
  });

});

