// Task 1.5.5.5

describe("copySorted", function() {

  it("given case", () => {
    let arr = ["HTML", "JavaScript", "CSS"];
    function arrEquals(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every(function(item, index){
            return item === arr2[index];
        });
    }
    assert.equal( arrEquals( copySorted(arr), ["CSS", "HTML", "JavaScript"] ), true );
    assert.equal( arrEquals( arr, ["HTML", "JavaScript", "CSS"] ), true );
  });

});

