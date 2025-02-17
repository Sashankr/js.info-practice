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

// let i = 0;
// while (++i < 5) alert(i); // 1,2,3,4 this is because ++i immediately returns updated value

// let j = 0;
// while (j++ < 5) alert(j); // 1,2,3,4,5 this is because the value is incremented but after increment old value is returned
// so for above loop, 5++ < 5 is true, because, after 5++ the value that is returned is 4.

// q3. Which values get shown by the "for" loop?

// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?

// postfix
// for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

// prefix
// for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

// both result in same output because the increment value is not being used anywhere

// q4. Use the for loop to output even numbers from 2 to 10.

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// q5. replace for with while

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

/*
q6. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.


*/

while (true) {
  const input = prompt("Enter a number greater than 100");
  if (input > 100) {
    break;
  }
}
