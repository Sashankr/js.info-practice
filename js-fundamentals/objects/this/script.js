// Q1. Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

debugger;
console.log(user.ref.age); // undefined
// We get undefined because this is not referring to object here, because its called inside a function, not as a method of an object
// If in the window object there was a name property then it would print that name instead of undefined.
