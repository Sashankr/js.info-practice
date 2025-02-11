console.log(1 || false); // or returns the first truthy expression and ignores the rest

console.log(0 || undefined || null); // if it doesn't find any truty values it returns last value

console.log(1 && null && undefined); // AND on the other hand returns the first falsey value and ignores the rest.
