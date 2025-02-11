"use strict";

const res = prompt(`What's the "official" name of Javascript?`);
if (res === "ECMAScript" || res === "ecmascript") {
  alert("Right!");
} else {
  alert(`You don't know "ECMAScript"!`);
}

const numberVal = prompt("Enter an integer number");
if (numberVal > 0) {
  alert(`1`);
} else if (numberVal < 0) {
  alert(-1);
} else {
  alert(0);
}

// rewrite using ? operator

// let result;

// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

// let result = a + b < 4 ? "Below" : "Over";

// nested tenery usage

// let message;

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

let login = "Employee";

let message =
  login == "Employee"
    ? "Hello"
    : login === "Director"
    ? "Greetings"
    : login === ""
    ? "No Login"
    : "";

console.log("msg", message);
