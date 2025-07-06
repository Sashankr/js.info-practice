let user = {
  name: "John",
};

const admin = user;
user = null;
console.log(admin.name);
// Since admin is still reachable it's not garbage collected

function marry(man, women) {
  man.wife = women;
  women.husband = man;
  return {
    father: man,
    mother: women,
  };
}

const couple = marry({ name: "John" }, { name: "Ann" });
console.log(couple);
delete couple.father;
delete couple.mother.husband;

console.log(couple);
