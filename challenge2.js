function checkSpeed(speed) {
  if (speed <= 70) {
    console.log("ok");
  } else {
    const demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {
      console.log("License suspended")
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

checkSpeed(60);