// tasks

// 1. Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

// 2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  let length = 0;
  for (let key in obj) {
    length += 1;
  }
  // if (Object.keys(obj).length === 0) {
  //   return true;
  // }
  // return false;
  if (length === 0) {
    return true;
  }
  return false;
}

let schedule = {};

alert(`is schedule empty: ${isEmpty(schedule)} ${JSON.stringify(schedule)}`);

schedule["8:30"] = "get up";

alert(`is schedule empty: ${isEmpty(schedule)} ${JSON.stringify(schedule)}`); // false

// 3. Sum object properties

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log("salaries sum", sum);

// 4. Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log("menu", menu);
