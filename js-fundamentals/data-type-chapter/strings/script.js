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
