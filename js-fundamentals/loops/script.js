// let i = 0;

// while (i < 3) {
//   console.log(i);
//   i++;
// }

// console.log("----");

// let j = 0;

// do {
//   console.log(j);
//   j++;
// } while (j < 5);
// console.log("----");

// for (let i = 0; i < 10; i++) {
//   if (i % 2) continue;
//   console.log(i);
// }

//q1. What is the last value alerted by this code? Why?

// let i = 3;

// while (i) {
//   alert(i--); // 1
// }

// /* explaination :
//   iter 1 - 3
//   iter 2 - 2
//   iter 3 - 1
//   this is because i-- returns the old value but decrements the value
// */

// q2. Which values does the while loop show?
// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?

let i = 0;
while (++i < 5) alert(i); // 1,2,3,4 this is because ++i immediately returns updated value

let j = 0;
while (j++ < 5) alert(j); // 1,2,3,4,5 this is because the value is incremented but after increment old value is returned
// so for above loop, 5++ < 5 is true, because, after 5++ the value that is returned is 4.
