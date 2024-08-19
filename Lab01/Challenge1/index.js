// Test data 1
let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;

let BMIMark1 = massMark1 / heightMark1 ** 2;
let BMIJohn1 = massJohn1 / heightJohn1 ** 2;

let markHigherBMI1 = BMIMark1 > BMIJohn1;

// Test data 2
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

let BMIMark2 = massMark2 / heightMark2 ** 2;
let BMIJohn2 = massJohn2 / heightJohn2 ** 2;

let markHigherBMI2 = BMIMark2 > BMIJohn2;

document.getElementById('challenge-1a').innerHTML =
'Mark\'s BMI: ' + BMIMark1 + '<br>' +
'John\'s BMI: ' + BMIJohn1 + '<br>' +
'Is Mark\'s BMI higher than John\'s? ' + markHigherBMI1;


document.getElementById('challenge-1b').innerHTML = 
'Mark\'s BMI: ' + BMIMark2 + '<br>' +
'John\'s BMI: ' + BMIJohn2 + '<br>' +
'Is Mark\'s BMI higher than John\'s? ' + markHigherBMI2;