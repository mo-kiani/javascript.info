// Task 1.5.4.5

describe("getMaxSubSum", function() {
    it("Test Case 1", function() {
        assert.equal( getMaxSubSum([-1, 2, 3, -9]), 5);
    });
    it("Test Case 2", function() {
        assert.equal( getMaxSubSum([2, -1, 2, 3, -9]), 6);
    });
    it("Test Case 3", function() {
        assert.equal( getMaxSubSum([-1, 2, 3, -9, 11]), 11);
    });
    it("Test Case 4", function() {
        assert.equal( getMaxSubSum([-2, -1, 1, 2]), 3);
    });
    it("Test Case 5", function() {
        assert.equal( getMaxSubSum([100, -9, 2, -3, 5]), 100);
    });
    it("Test Case 6", function() {
        assert.equal( getMaxSubSum([1, 2, 3]), 6);
    });
    it("Test Case 7", function() {
        assert.equal( getMaxSubSum([-1, -2, -3]), 0);
    });
});

