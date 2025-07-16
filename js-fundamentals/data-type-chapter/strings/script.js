// Strings : Represent texual data in UTF-16 format.

// Types of quotes

console.log("Hello"); // double
console.log("Hello"); // single
const name = "Sashank";
console.log(`Hello ${name}`);
console.log(`Guests list:
    1. John
    2. Jacob
    3. Sam
    4. Sarah
    `);

// special characters

console.log("Hello I'm Sashank \nI code");

const str = "Hello";
console.log(str[0]); // H
console.log(str.at(-1)); // o

for (let char of str) {
  console.log(char);
}
