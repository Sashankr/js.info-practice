const user = {
  name: "john",
  savings: 1000,
  [Symbol.toPrimitive](hint) {
    console.log(hint);
    return hint === "string" ? `{user : ${this.name}}` : this.savings;
  },
};

console.log(user); //string `{user : "john"}`
console.log(+user); //number // 1000
console.log(user + 100); // default // 1500

// Now lets see an example where Symbol.toPrimitive is not available.

const dev = {
  name: "Sashank",
  exp: 4,
  // hint is string
  toString() {
    return `{name: "${this.name}"}`;
  },
  // hint number
  valueOf() {
    return this.exp;
  },
};
console.log("to string, value of");

alert(dev); // toString
console.log("2", +dev); // valuOf 4
console.log("3", dev + 1); // valueOf 5
