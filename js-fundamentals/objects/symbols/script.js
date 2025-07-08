const id = Symbol("id");
// alert(id);
console.log(id.toString());
console.log(id.description);

const user = {
  name: "Joe",
  [id]: 123,
};

console.log("symbol id", user[id]);

for (let key in user) {
  console.log(user[key]); // only prints Joe
}

console.log(Object.keys(user)); // only logs ['name']
