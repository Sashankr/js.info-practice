// Q1. Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.age); // undefined
// We get undefined because this is not referring to object here, because its called inside a function, not as a method of an object
// If in the window object there was a name property then it would print that name instead of undefined.
// Be very careful when dealing with this keyword, it provides a lot of flexibility but, we can make mistakes if not used carefully.

/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.

*/

const calculator = {
  a: null,
  b: null,
  read() {
    this.a = prompt("Enter first number");
    this.b = prompt("Enter second number");
  },
  sum() {
    console.log("Sum: ", +this.a + +this.b);
  },
  multiply() {
    console.log("Product: ", +this.a * +this.b);
  },
};

calculator.read();
calculator.sum();
calculator.multiply();
