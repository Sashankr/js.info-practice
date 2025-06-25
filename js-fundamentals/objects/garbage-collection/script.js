let user = {
  name: "John",
};

const admin = user;
user = null;
console.log(admin.name);
// Since admin is still reachable it's not garbage collected
