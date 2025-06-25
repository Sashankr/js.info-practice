let user = {
  name: "John",
};

const admin = user;
user = null;
console.log(admin.name);
