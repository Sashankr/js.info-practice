// we write a spec first, then we write implementation, run tests fix failing tests by refactoring and run tests again
// this is called iterative development or Red, Green, Refactor approach TDD(Test driven development).

// we will be using Mocha - which is a testing library that provided helpful test functions like describe and it.
// we will be using Chai - which provides assertions to validate our function against expected functionality.

describe("pow", () => {
  describe("raises to power 3", () => {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in power 3 is ${expected}`, () => {
        assert.equal(pow(x, 3), expected);
      });
    }
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("for negative n result is NaN", () => {
    assert.isNaN(pow(2, -1));
  });
  it("for non integer n result is NaN", () => {
    assert.isNaN(pow(2, 1.5));
  });
});
