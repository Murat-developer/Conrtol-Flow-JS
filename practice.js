// Grade
const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(input) {
  const average = calculateAverage(input);
  if (average < 70) return 'A';
  if (average < 80) return 'B';
  return 'C';
}
// Single Responsibility Principle
function calculateAverage(number) {
  let count = 0;
  for (let value of number) count += value;
  return count / number.length;
}
