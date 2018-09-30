/**
 * You will be writing unit tests for all of the functions inside `exercises/05-unit-testing/unit-testing.js`
 *
 * To run the tests, type the following in your command line from the JavaScript2018 directory:
 * ```
 * npm run test ./test/05-unit-testing/unit-testing-test.js
 * ```
 * Or use the debugger in Visual Studio Code
 *
 * For documentation on what tests you can do,
 * @see https://www.chaijs.com/api/bdd/
 */

const { expect } = require("chai");
const {
  add,
  subtract,
  multiply,
  findAdults
} = require("../../exercises/05-unit-testing/unit-testing");

describe("unit testing exercise", function() {
  describe("add", function() {
    it("should add two numbers", function() {
      var sum = add(2, 3);
      expect(sum).to.equal(5);
    });
  });

  describe("subtract", function() {
    it("should subtract two numbers", function() {
      var subsum = subtract(2, 3);
      expect(subsum).to.equal(-1);
    });
  });

  describe("multiply", function() {
    it("should multiply two numbers", function() {
      var mulsum = multiply(2, 3);
      expect(mulsum).to.equal(6);
    });
  });

  describe("findAdults", function() {
    // Remove the `.skip` when you are ready to write this test
    it("will find, in a multidimensional array, all the people older than 18", function() {
      // Complete the unit test for findAdults here
      // Hint: Arrays are passed by reference, so you will need to call on a test that deeply compares values
      // @see https://www.chaijs.com/api/bdd/
      var people = [
        { name: "Janet", age: 43 },
        { name: "Aiden", age: 10 },
        { name: "Chloe", age: 16 }
      ];
      expect(people).to.deep.include({name: "Janet", age: 43});
    });

    // Remove the `.skip` when you are ready to write this test
    it("will return an empty array if no adults are found", function() {
      // Complete the unit test for findAdults here, where you use a different assertion than `.equal()`
      // @see https://www.chaijs.com/api/bdd/
      var people = [
        { name: "Liam", age: 3 },
        { name: "Emma", age: 17 },
        { name: "Ethan", age: 8 }
      ];
      expect(people).to.not.include({name: "Emma", age: 17});
    });
  });
});
