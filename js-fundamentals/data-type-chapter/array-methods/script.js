// Array splice method:
// It can remove, add, replace items in an array.
const arr = ["I", "learn", "javascript"];
console.log("arr", arr);
// Syntax:
// arr.splice(start,deleteCount,el1,el2,...eln)
arr.splice(1, 2);
console.log("arr", arr); // ['I']

const arr2 = ["I", "learn", "JS"];
console.log("arr2", arr2);

arr2.splice(2, 1, "Typescript", "Now");
console.log("arr2", arr2);

const arr3 = [1, 2, 3, 4, 5];
console.log("arr3", arr3);

arr3.splice(-1, 0, 9, 10);
console.log("arr3", arr3);

// Slice method is similar, but doesn't replace or delete, only extracts
// from start index to end index, it extracts the items from the array and returns it.
// it doesn't replace the original array either.

const strArray = ["Hello", "How", "Is", "It", "Going"];
console.log(strArray);

console.log("slice", strArray.slice(0, 3));
// when negative index is given, it counts from the end and extracts till end of string.
console.log("slice negative index", strArray.slice(-3));

// concat method
// We can concat, arrays with other arrays or numbers

const nums = [1, 2];
console.log("concat array", nums.concat([3, 4])); // [1,2,3,4]
console.log("concat numbers", nums.concat(3, 4)); // [1,2,3,4]

// concating object properties.

const permissions = {
  read: true,
  write: false,
};

console.log("concat object", nums.concat(permissions)); // [ 1, 2, { read: true, write: false } ]

const user = {
  0: "Sashank",
  1: "developer",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log("concat object with array spreadable", nums.concat(user));

const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((item) => {
  console.log(item);
});

const arr4 = ["a", "b", "c", false];
console.log(arr4.indexOf("b")); // 1
console.log(arr4.indexOf(false)); // 4
console.log(arr4.includes(false));
// true

// indcludes vs indexOf

const arr5 = [NaN];
arr5.indexOf(NaN); // -1 wrong should be 0
arr5.includes(NaN); // true

// find,findIndex and findLastIndex

// find method searches for an element in an array based on specific condition and returns that first item that matches
// that condition

const users = [
  {
    name: "Sashank",
    role: "Developer",
  },
  {
    name: "Devin",
    role: "AI Agent",
  },
  {
    name: "Travis",
    role: "Developer",
  },
];

const userData = users.find((item) => item.role === "AI Agent");
console.log("userdata", userData);
const userDataIndexOfElement = users.findIndex(
  (item) => item.role === "AI Agent"
);

console.log("user data index", userDataIndexOfElement);

const userDataLastIndexOfElement = users.findLastIndex(
  (item) => item.role === "AI Agent"
);

console.log("user data last index", userDataLastIndexOfElement);

// If we have to look for multiple items matching a condition we use the filter method

const filterDevs = users.filter((item) => item.role === "Developer");
console.log("filter devs", filterDevs);

// Transform an array

const roleList = users.map((item) => item.role);
console.log("rolelist", roleList); // [ 'Developer', 'AI Agent', 'Developer' ]

const numberList = [1, 2, 15];
console.log("sorted numbers", numberList.sort()); // [1 , 15, 2]
// why did 2 come after 15, this is because all numbers are converted to string for comparison and lexicographical index of 2 is greater than 15.

function sortNumbers(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log("sorted numbers with sort fn", numberList.sort(sortNumbers)); // [1,2,15]

// all the sort function needs is a positive value or a negative value, we can make it shorter like so

console.log(
  "consice sort",
  numberList.sort((a, b) => a - b)
);

let countries = ["Österreich", "Andorra", "Vietnam"];
// in general better to use localeCompare to sort strings

console.log(
  "countries sort",
  countries.sort((a, b) => a.localeCompare(b))
);

// reverse method, reverses the order of an array
console.log(countries.reverse());
