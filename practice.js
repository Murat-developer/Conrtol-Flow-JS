// Demerit Points

checkSpeed(100);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('OK');
    return;
  }

  const point = Math.floor((speed - speedLimit) / kmPerPoint);
  if (point >= 12) console.log('Leicense Suspended');
  else {
    console.log('Point', point);
  }
}
