// Task 1.5.3.1

describe("ucFirst", function() {
  it(`"john" becomes "John"`, () => {
    assert.equal( ucFirst("john"), "John" );
  });
  it(`empty string`, () => {
    assert.equal( ucFirst(""), "" );
  });
});

