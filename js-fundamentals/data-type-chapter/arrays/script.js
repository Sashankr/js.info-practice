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

// Methods push, unshift can add multiple elements

fruits.unshift("Dragon fruit", "Pomogrenate");
fruits.push("Orange", "Green apple");

console.log(fruits);

// How not to use arrays

const arrTest = [];

arrTest.apple = "1";
console.log(arrTest); // adding properties
arrTest[0] = 2; // creating gaps
arrTest[1000] = 200;
console.log(arrTest);
arrTest[2000] = 1;
arrTest[1999] = 2;

console.log(arrTest);

// Performance of array methods

console.log("Performance of array methods");

const randomArray = Array(1000)
  .fill(0)
  .map(() => Math.random());

console.log("large array", randomArray);
console.log(`shift start`, performance.now());
randomArray.shift();
console.log("shift end", performance.now());

console.log(`pop start`, performance.now());
randomArray.pop();
console.log("pop end", performance.now());

// Loops

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

const arrEx = [];
arrEx[1000] = 1;
console.log(`array length`, arrEx.length);
