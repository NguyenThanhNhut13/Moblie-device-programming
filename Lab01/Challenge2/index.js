// Test data 1
let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;

let BMIMark1 = massMark1 / heightMark1 ** 2;
let BMIJohn1 = massJohn1 / heightJohn1 ** 2;

console.log("Test data 1:");
if (BMIMark1 > BMIJohn1) {
    console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})!`);
} else {
    console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})!`);
}

// Test data 2
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

let BMIMark2 = massMark2 / heightMark2 ** 2;
let BMIJohn2 = massJohn2 / heightJohn2 ** 2;

console.log("Test data 2:");
if (BMIMark2 > BMIJohn2) {
    console.log(`Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2})!`);
} else {
    console.log(`John's BMI (${BMIJohn2}) is higher than Mark's (${BMIMark2})!`);
}


