// ways to create an array
const arr = [];
const arr1 = new Array();

const fruits = ["Apple", "Mango", "Banana"];

// accessing elements of array based on index
console.log(fruits[0]);

// updating element of array based on index
fruits[1] = "Pineapple";
console.log(fruits);

// adding new element to array

fruits[3] = "Grapes";
console.log(fruits);

const list = [
  1,
  "hello",
  { name: "Sashank" },
  function () {
    return "Hi";
  },
];

console.log(`name from object in list`, list[2].name);
console.log(`exec func in list`, list[3]());

console.log(fruits.at(-1));

// Methods that work with end index of array.

// Push, adds an element at end of an array

fruits.push("Guava");

// Pop, removes an element at the end of an array

fruits.pop();

// Shift - removes element from start of array

console.log(fruits.shift("Apple"));
console.log(`after shift`, fruits);

// Unshift, add elements at start of the array

console.log(fruits.unshift("Pear"));
console.log(fruits);
