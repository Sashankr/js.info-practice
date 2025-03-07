// creating a new object
const user = new Object(); // Object constructor.
const user1 = {}; // object literal

console.log(user, user1);

// sqaure bracket notation

user["first name"] = "Sashank";
user["last name"] = "R";
console.log(user["first name"], user);
delete user["first name"];
console.log(user);

// runtime expression to get value of a key from an object.
let key = "last name";
console.log(user[key]);

// computed property
// We can accept a value from user and then create that key on runtime while creating an object.

const fruit = prompt("Enter fruit you want to buy");
const bag = {
  [fruit]: 5,
};

console.log("my bag", bag);

// Object property shorthand

function createName(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
console.log(createName("S", "R"));

function createName2(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

console.log(createName2("S", "R"));

const newObj = {
  for: "hello",
  let: "bye",
  return: "return",
  0: "zero num", // auto converts to string
  0: "zero string",
};

console.log(newObj.for, newObj.let, newObj.return);

console.log(newObj[0], newObj["0"]); // both work

const obj3 = {};
obj3.__proto__ = 5;
console.log(obj3.__proto__);
