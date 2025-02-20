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
