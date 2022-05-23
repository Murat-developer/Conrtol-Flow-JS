// Break and Continue

let number2 = 1;

while (number2 <= 6) {
  if (number2 === 3) break;

  console.log(number2);
  number2++;
}
let number = 1;

while (number <= 7) {
  if (number % 2 !== 0) {
    number++;
    continue;
  }
  console.log(number);
  number++;
}
