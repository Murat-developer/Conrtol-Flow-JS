// Show Stars

showStars(6);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let sum = '';
    for (let star = 1; star <= row; star++) sum += '*';
    console.log(row, sum);
  }
}
