// q1. is else required

/*
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:
*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}

// Will the function work differently if else is removed?

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
// no difference

// q2. Rewrite the function using '?' or '||'

/*
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

1. Using a question mark operator ?
2. Using OR ||

*/
// with ? operator

function checkAge3(age) {
  age > 18 ? true : confirm("Did parents allow you?");
}

checkAge3(15);

// with OR ||

function checkAge3(age) {
  age > 18 || confirm("Did parents allow you?");
}

checkAge3(15);
