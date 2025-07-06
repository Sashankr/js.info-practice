// Constructor Functions

/* 
    Constructor functions are just like regular functions but the name starts with a capital letter
    and when it's called it must be called with a new keyword.
*/

function Person(name) {
  this.name = name;
}

const sashank = new Person("Sashank");
console.log(sashank);

// Internally inside a constructor function this is assigned to an empty object and
// all properties defined in constructor are assigned to this and returned.

/*
 We can also create a constructor function that executes only once
 this can be done using function expression, this is used so that we can encapsulate the 
 process of how an object is being created.
*/

const user = new (function () {
  this.name = "Sashank";
})();
console.log(user);

// IMPORTANT : The main use of a constructor function is to create reusable function that creates objects
// with the same blueprint.

// Returning from a constructor
// 1. If we return an object from constructor the object is returned instead.
// 2. If a primitive value or empty return is used, then that is ignored.

function Animal(name) {
  this.name = name;
  return { name: "Tommy", breed: "Alsasian" };
}

const tommy = new Animal("Tommy");
console.log(tommy); // { name: "Tommy", breed: "Alsasian" } object return accepted

function Bird(name) {
  this.name = name;
  return;
}

const sparrow = new Bird("sparrow");
console.log(sparrow); // {name : 'sparrow'} return ignored

// Methods inside constructor. This makes creation of objects even more powerful by adding methods.

function CreateUser(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Hello ${name}`);
  };
}

const user1 = new CreateUser("John");
user1.sayHi();
