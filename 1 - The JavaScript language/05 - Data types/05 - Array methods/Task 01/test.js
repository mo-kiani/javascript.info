// Task 1.5.5.1

describe("camelize", function() {

  it("background-color", () => {
    assert.equal( camelize("background-color"), "backgroundColor" );
  });

  it("list-style-image", () => {
    assert.equal( camelize("list-style-image"), "listStyleImage" );
  });

  it("-webkit-transition", () => {
    assert.equal( camelize("-webkit-transition"), "WebkitTransition" );
  });

  it("--double--dash", () => {
    assert.equal( camelize("--double--dash"), "DoubleDash" );
  });

});

