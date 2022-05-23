// Multiples of 3 and 5 numbers

console.log(sum(10));

function sum(limit) {
  let count = 0;
  for (let num = 1; num <= limit; num++)
    if (num % 3 === 0 || num % 5 === 0) count += num;
  return count;
}
