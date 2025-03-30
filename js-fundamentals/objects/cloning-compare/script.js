const person = {
  name: "Sashank",
  role: "Dev",
};

const copy = person;
copy.name = "John";

console.log(person);

const newCopy = Object.assign({}, person); // copy all primitive properties of object
newCopy.name = "Joe";

console.log(newCopy, person);

// const person2 = {
//     name : 'John'
// }
