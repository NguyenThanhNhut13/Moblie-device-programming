function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Create an array 'bills' 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays for tips and totals
const tips = [];
const totals = [];

// Loop through the 'bills' array and calculate the tip and total for each bill
for (x of bills) {
  const tip = calcTip(x);
  tips.push(tip);
  totals.push(x + tip);
}

console.log(`Bills: ${bills} \nTips: ${tips} \nTotals: ${totals}`);

// Calculate the average of the 'totals' array

function calcAverage(arr) {
  let sum = 0;
  for (x of arr) {
    sum += x;
  }
  return sum / arr.length;
}

console.log(`Average: ${calcAverage(totals)}`);