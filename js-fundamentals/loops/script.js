let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

console.log("----");

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);
console.log("----");

for (let i = 0; i < 10; i++) {
  if (i % 2) continue;
  console.log(i);
}
