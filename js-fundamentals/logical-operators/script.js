console.log(1 || false); // or returns the first truthy expression and ignores the rest

console.log(0 || undefined || null); // if it doesn't find any truty values it returns last value

console.log(1 && null && undefined); // AND on the other hand returns the first falsey value and ignores the rest.

console.log(!false); // NOT operator converts to boolean and reverses the value
console.log(!!null); // this is shorthand way of converting falsey values to boolean.
console.log(Boolean(null));

// Tasks

// q1. What is the code below going to output?
alert(null || 2 || undefined); // 2

// q2. What is the result of AND'ed alerts?
alert(alert(1) && alert(2)); // 1 and undefined

// in the above code first alert(1) executes and returns undefined
// since undefined && alert(2) prints undefined
// alert(undefined); so undefined is printed.

// q3. Result of following:
alert(null || (2 && 3) || 4); // 3

/*
q4. Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.
*/
let age = 14;
if (age >= 14 && age <= 90) {
  console.log("in range");
}

/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
*/
// with NOT
// if (!age >= 14 && !age <= 90) {
//   console.log("out of range");
// }

// without NOT
if (age <= 14 || age >= 90) {
  console.log("out of range");
}

// q5. Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert("first"); // true, first is executed. Boolean(-1) -> true
if (-1 && 0) alert("second"); // false, wont' execute.
if (null || (-1 && 1)) alert("third"); // third

/* q6. 

Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”


*/

const userinput = prompt("Enter User type");
if (userinput === "Admin") {
  const password = prompt("Enter Password");
  if (password === "TheMaster") {
    alert("Welcome");
  } else if (!!password && password !== "TheMaster") {
    alert("Wrong password");
  } else {
    alert("Cancelled");
  }
} else if (!!userinput && userinput !== "Admin") {
  alert(`I don't know you`);
} else {
  alert("Cancelled");
}
