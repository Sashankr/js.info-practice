// const oneBillion = 1000000000;
// const oneBillion = 1_000_000_000; // to make it more readable we can use underscore to separate them.
const oneBillion = 1e9;
console.log(oneBillion);
const sevenBillion300million = 7.3e9;
console.log(sevenBillion300million);

let mcs = 0.000001; // 1 microsecond is 1 millionth of a second.
// we can represent by e- notation
mcs = 1e-6;
console.log(mcs);

const num1 = `0xFF`; // 255 in hexadecinal.
const num2 = `0b11111111`; // 255 in binary.
const num3 = `0o377`; // 255 in octal.

// toString method: converts number to string with optional base value

const n4 = 124415;
n4.toString(16); // hexa
n4.toString(2); // binary
n4.toString(36); // max character support

// directly using toString on number

console.log((1234).toString(16));

// Math methods

const numz = 12.51221;
console.log(Math.floor(numz));
console.log(Math.ceil(numz));
console.log(Math.round(numz));
console.log(Math.trunc(numz));
console.log(numz.toFixed(2));

// Imprecise Calculations

const sum = 0.1 + 0.2;
console.log(0.3 == sum); // false, because in memory numbers are stored in binary, result is 0.30000000000000004

// to fix this we use toFixed(2); method

console.log(0.3 == +sum.toFixed(2)); // true
