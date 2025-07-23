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
