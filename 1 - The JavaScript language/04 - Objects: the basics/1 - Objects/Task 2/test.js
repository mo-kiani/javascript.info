// Task 1.4.1.2

describe("isEmpty", function() {

  it("Empty object returns true", () => {
    let empty_object = {};
    assert.equal( isEmpty(empty_object), true );
  });

  it("Object with one property returns false", () => {
    let object = {["8:30"]: "get up"};
    assert.equal( isEmpty(object), false );
  });

});

