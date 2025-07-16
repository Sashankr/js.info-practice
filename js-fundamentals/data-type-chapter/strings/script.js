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

console.log(str.toLowerCase());
console.log(str.toUpperCase());

const str1 = "Hello you, there how are you";
console.log(str1.indexOf("you")); //6
console.log(str1.indexOf("you", 10)); //start search from ou, there how are you?
console.log(str1.lastIndexOf("you")); //25

// we can also loop and find all occurences of the word.

let pos = 0;
let target = "you";

while (true) {
  let foundPos = str1.indexOf(target, pos);
  if (foundPos === -1) break;
  console.log(`found ${target} at `, foundPos);

  pos = foundPos + 1;
}

const str3 = `Hello there how are you`;
console.log({
  slice: str3.slice(0, 2),
  "slic no end index": str3.slice(2),
  substr: str3.substr(2, 5),
  substring: str3.substring(2, 6),
});

const char = "Z";
console.log(char.codePointAt(0)); //90
console.log("a".codePointAt(0)); //97

console.log("a" > "Z"); // true, because code of a is greater

const string1 = "apple";
const string2 = "orange";

console.log("res", string1.localeCompare(string2));
// -1 returned if st1 < str2, 0 if eequal, 1 if str1 greater

// Exercises:

/*
Write a function ucFirst(str)
that returns the string str with the uppercased first character, for instance:
ucFirst("john") == "John";


*/

function ucFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

console.log("Upper case first letter func", ucFirst("john"));

// Exercise 2 :

/*
Write a function checkSpam(str) that returns true if str 
contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

*/

function checkSpam(str) {
  const spamExists =
    str.toLowerCase().indexOf("viagra") !== -1 ||
    str.toLowerCase().indexOf("xxx") !== -1;
  if (spamExists) {
    console.log(str);
  }
  return spamExists;
}

console.log(checkSpam("buy ViAgRA now"));

console.log(checkSpam("free xxxxx"));

console.log(checkSpam("innocent rabbit"));
