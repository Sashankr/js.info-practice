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
