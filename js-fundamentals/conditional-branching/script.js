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
