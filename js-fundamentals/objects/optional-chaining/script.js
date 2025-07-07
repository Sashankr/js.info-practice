const user1 = {
  name: "John",
  street: {
    line1: "My street",
  },
};

const user2 = {
  name: "Jacob",
};

const usersList = [user1, user2];

// usersList.forEach((item) => {
//   console.log(item.street.line1);
// });

/*
We get this error in console and execution stops because line and address both are not there for user2
console.log(item.street.line1);
TypeError: Cannot read properties of undefined (reading 'line1')
*/

// To fix this we had to do this

usersList.forEach((item) => {
  console.log(
    "Ternary",
    item
      ? item.street
        ? item.street.line1
        : "line1 not found"
      : "address not found"
  );
});

// Reading this is hard, and we are also repeating same expressions again, item.street, item.street.line1 this is not good

// We can also user short circuiting

usersList.forEach((item) => {
  console.log("Short circuiting", item && item.street && item.street.line1);
});

// but in this also we are repeating code.

// That's why optional chaining was introduced, to allow access properties on a null/undefined property safely.

usersList.forEach((item) => {
  console.log("Optional chaining", item?.street?.line1);
});
