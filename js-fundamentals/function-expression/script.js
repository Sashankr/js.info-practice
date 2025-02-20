const hello = function () {
  console.log("hello");
};

hello();

// callback functions

function answer(question, ok, cancel) {
  if (confirm(question)) {
    ok();
  } else {
    cancel();
  }
}

function displayOk() {
  console.log("ok");
}

function displayCancel() {
  console.log("cancel");
}

answer("are you sure?", displayOk, displayCancel);

// convert the following function expressions with arrow functions

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
