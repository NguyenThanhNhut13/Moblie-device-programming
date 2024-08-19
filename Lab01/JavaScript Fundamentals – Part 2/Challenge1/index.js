function calcAverage(arr) {
    let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
// Data 1
let dolphinsScore = [44, 23, 71];
let koalasScore = [65, 54, 49];

let dolphinsAverage = calcAverage(dolphinsScore);
let koalasAverage = calcAverage(koalasScore);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(dolphinsAverage, koalasAverage);

// Data 2
let dolphinsScore2 = [85, 54, 41];
let koalasScore2 = [23, 34, 27];

let dolphinsAverage2 = calcAverage(dolphinsScore2);
let koalasAverage2 = calcAverage(koalasScore2);

checkWinner(dolphinsAverage2, koalasAverage2);
