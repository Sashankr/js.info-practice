// what is the final values of a,b,c

// debugger;
// let a = 1,
//   b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// what are the values of a and x after code below?

// debugger;
// let a = 2;
// let x = 1 + (a *= 2); //5

// q3. What are the result of these expressions

"" + 1 + 0; // 10
// addition with 1 converts 1 to string "1"+0 => "1"+"0"->"10"

"" - 1 + 0; // 0 -1 + 0 = -1
true + false; // 1 + 0 = 1
6 / "3"; // 6/3 = 2
"2" * "3"; // 2*3 = 6
4 + 5 + "px"; // 9 + "px"; "9"+"px" 9px
"$" + 4 + 5; // "$" +"4" + 5 -> "$4"+"5" -> $45
"4" - 2; // 4 - 2 -> 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9   5"
// the addition with string converts 5 to string and concatenates it.

"  -9  " - 5; // "9" - 5; -9 - 5 -> -14
null + 1; // 0 + 1 -> 1
// null becomes 0 after numeric conversion

undefined + 1; // NaN
// undefined becomes NaN after numeric conversion.

" \t \n" - 2; // "" - 2 -> 0 -2 -> -2

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
// fix sum here
alert(+a + +b); // 12
