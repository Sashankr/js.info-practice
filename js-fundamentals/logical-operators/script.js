console.log(1 || false); // or returns the first truthy expression and ignores the rest

console.log(0 || undefined || null); // if it doesn't find any truty values it returns last value

console.log(1 && null && undefined); // AND on the other hand returns the first falsey value and ignores the rest.

console.log(!false); // NOT operator converts to boolean and reverses the value
console.log(!!null); // this is shorthand way of converting falsey values to boolean.
console.log(Boolean(null));
