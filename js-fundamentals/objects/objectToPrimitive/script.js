const user = {
  name: "john",
  savings: 1000,
  [Symbol.toPrimitive](hint) {
    alert(hint);
    return hint === "string" ? `{user : ${this.name}}` : this.savings;
  },
};

alert(user); //string `{user : "john"}`
alert(+user); //number // 1000
alert(user + 100); // default // 1500
