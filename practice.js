// Even adn Odd

showNumbers(6);

function showNumbers(limit) {
  for (let num = 1; num <= limit; num++) {
    const info = num % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(num, info);
  }
}
