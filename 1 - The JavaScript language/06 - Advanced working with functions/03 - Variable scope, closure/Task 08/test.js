// Task 1.6.3.8

describe("inBetween", function() {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  it("given example", () => {
    let filteredArr = arr.filter( inBetween(3, 6) );

    assert.equal( filteredArr.length, 4);

    assert.equal( filteredArr[0], 3);
    assert.equal( filteredArr[1], 4);
    assert.equal( filteredArr[2], 5);
    assert.equal( filteredArr[3], 6);
  });

});

describe("inArray", function() {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  it("given example", () => {
    let filteredArr = arr.filter( inArray([1, 2, 10]) );

    assert.equal( filteredArr.length, 2);

    assert.equal( filteredArr[0], 1);
    assert.equal( filteredArr[1], 2);
  });

});

