"use strict";
/*
In Javascript, Primitives have methods like objects but how do primitives have methods they are not objects right?
We learned that primitives are only used to store a single value, then how are these methods accessible on them?
This is because each primitive has its own object wrapper which is wrapped around it and destroyed once its executed
This was designed so that primitives are lightweight and don't consume too much memory
There are 7 primitives, and their Object Wrapper:
1. string : String
2. boolean : Boolean
3. number : Number
4. bigint : BigInt
5. symbol : Symbol
6. null : N/A
7. undefined : N/A

Only null and undefined don't have any methods or object wrapper 
*/

const str = "hello";
console.log(str.toUpperCase());

console.log(str.startsWith("h"));

const str2 = "Bye";
str2.value = 10;

console.log(str2.value); // undefined in non strict mode, error in strict mode.

/* So what happens in the above example is
line 1 : the string is stored in variable, the wrapper object String is created.
line 2 : the value property with value 10 is added to String object. 
line 3 : but here since the wrapper object is deleted immediately, the value property reference is also lost.

*/
