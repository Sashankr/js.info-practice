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
