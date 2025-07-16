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

// Exercise 3:

/*
Create a function truncate(str, maxlength) that checks
the length of the str and, if it exceeds maxlength – replaces the end of str 
with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:
truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"
truncate("Hi everyone!", 20) == "Hi everyone!"

*/

function truncate(str, maxLength) {
  return str.length < maxLength ? str : str.substring(0, 20) + "...";
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));

// Exercise 4:

/*
We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the
numeric value from such string and return it.

The example:
alert( extractCurrencyValue('$120') === 120 ); // true

*/

function extractCurrencyValue(str) {
  console.log("str", str.slice(1));

  return parseInt(str.slice(1));
}
console.log(extractCurrencyValue("$120"));
