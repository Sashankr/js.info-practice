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
// this happends because array is an object and we can add properties like this to it.

// Exercise 4

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

const userInputs = [];
while (true) {
  let input = prompt("Enter a number to add") || "";

  if (input === null || input === "" || !isFinite(input)) {
    break;
  } else {
    userInputs.push(+input);
  }
}
let sum = 0;
for (let num of userInputs) {
  sum += num;
}
console.log(`sum: ${sum}`);

// Exercise 5

/*
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:
getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)

If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0

Please try to think of a fast solution: O(n2) or even O(n) if you can.

*/

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
