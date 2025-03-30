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

const person2 = {
  name: "John",
  role: "Dev",
  location: {
    state: "NY",
    country: "USA",
  },
};

const clone2 = Object.assign(person2);
clone2.location.state = "TX";
console.log(clone2, person2); // the state in person 2 also gets updated

// to prevent state in person 2 to get updated use structuredClone

const cloneStructured = structuredClone(person2);
cloneStructured.location.state = "AZ";
console.log(cloneStructured, person2); // state not updated this time
