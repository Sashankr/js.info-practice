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

// Exercises
// 1. Is it possible to create functions A and B so that new A() == new B()?
/*
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
*/
const obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true

/*

2. Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/

function Calculator() {
  this.read = function () {
    this.a = Number(prompt("Enter value of a"));
    this.b = Number(prompt("Enter value of b"));
  };
  this.sum = function () {
    console.log(`The sum is ${this.a + this.b}`);
  };
  this.mul = function () {
    console.log(`The product is ${this.a * this.b}`);
  };
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();

function Accumilator(initalValue) {
  this.value = initalValue;
  this.read = function () {
    this.value += Number(prompt("Enter value to add"));
  };
}

const acc = new Accumilator(1);
acc.read();
acc.read();
acc.read();
console.log(acc.value); // 19
