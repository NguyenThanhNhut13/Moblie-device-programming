function calcTip (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test function
console.log(calcTip(100));

// 2. Create an array 'bills' containing the test data below
const bills = [125, 555, 44];

// 3. Create arrays 'tips' containing the tip value for each bill
const tips = bills.map(calcTip);
console.log('Tip: ' + tips);

// 4. Create arrays 'total' containing the total value for each bill
const total = bills.map((bill, index) => bill + tips[index]);
console.log('Total: ' + total);

