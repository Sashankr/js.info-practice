// we write a spec first, then we write implementation, run tests fix failing tests by refactoring and run tests again
// this is called iterative development or Red, Green, Refactor approach TDD(Test driven development).

// we will be using Mocha - which is a testing library that provided helpful test functions like describe and it.
// we will be using Chai - which provides assertions to validate our function against expected functionality.

describe("pow", () => {
  it("2 raised to power 3 is 8", () => {
    console.log(assert);
    assert.equal(pow(2, 3), 8);
  });
  it("3 raised to power 4 is 81", () => {
    console.log(assert);
    assert.equal(pow(3, 4), 81);
  });
});
