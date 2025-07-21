// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // 4

// Exercise 2

/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.

Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. 
Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

function removeMiddleElement(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 1, "Classics");

  return arr;
}

let music = ["Jazz", "Blues"];
console.log("music", music);
music.push("Rock-n-Roll");
console.log("music", music);
music = removeMiddleElement(music);
console.log("music", music);
music.shift();
console.log("music", music);

music.unshift("Rap", "Reggae");
console.log("music", music);

// Exercise 3
// What is the result? Why?

let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2](); // ['a','b',[Function (anonymous)]]
