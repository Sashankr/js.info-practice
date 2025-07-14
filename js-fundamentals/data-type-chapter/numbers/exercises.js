// 1. Sum Numbers from visitor
// Create a script that prompts the visitor to enter two numbers and then shows their sum.
// P.S. There is a gotcha with types.

// const input1 = prompt("Enter first number");
// const input2 = prompt("Enter second number");
// alert(`Sum : ${+input1} + ${+input2} = ${+<input1></input1> + +input2}`);

// 2. Why 6.35.toFixed(1)  == 6.3?
// Acc to docs both Math.round and toFixed round to nearest number 0-4 : lead down and 5-9 lead up
// 6.35 is an endless binary, and is stored with a precision loss.

console.log((6.35).toFixed(20));
// if we want to get 6.35 on rounding we can multiply by 10 first

console.log(Math.round(6.35 * 10) / 10);

// 3. Repeat until input is a number

/*
Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
*/

function promptInput() {
  const value = prompt("Enter a valid number");
  if (isFinite(value) || value.length === 0 || value === null) {
    console.log(+value);
  } else {
    promptInput();
  }
}

promptInput();

// 4. An occational infinite loop.
// This infinite loop never ends why?
/*
let i = 0;
while (i != 10) {
  i += 0.2;
}
*/
// because decimal addition is impricise and doesn't add up properly, avoid equality checks when using decimals.

/*
5. 
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
*/

function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5));

/*
6. Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
Any number from the interval min..max must appear with the same probability.

*/

function randomInteger(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

console.log(randomInteger(1, 5));
