// Data 1 
let dolphinsScore = [96, 108, 89];
let koalasScore = [88, 91, 110];

let dolphinsAverage = (dolphinsScore[0] + dolphinsScore[1] + dolphinsScore[2]) / 3;
let koalasAverage = (koalasScore[0] + koalasScore[1] + koalasScore[2]) / 3;

console.log("Data 1:");
if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage}!`);
} else if (koalasAverage > dolphinsAverage) {
    console.log(`Koalas win with an average score of ${koalasAverage}!`);
} else {
    console.log("It's a draw!");
}

// Bonus 1
let dolphinsScoreBonus1 = [97, 112, 101];
let koalasScoreBonus1 = [109, 95, 123];

let dolphinsAverageBonus1 = (dolphinsScoreBonus1[0] + dolphinsScoreBonus1[1] + dolphinsScoreBonus1[2]) / 3;
let koalasAverageBonus1 = (koalasScoreBonus1[0] + koalasScoreBonus1[1] + koalasScoreBonus1[2]) / 3;

console.log("Bonus 1:");
if (dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAverageBonus1}!`);
} else if (koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAverageBonus1}!`);
} else if (dolphinsAverageBonus1 === koalasAverageBonus1 && dolphinsAverageBonus1 >= 100 && koalasAverageBonus1 >= 100) {
    console.log("It's a draw!");
} else {
    console.log("No one wins the bonus round!");
}

// Bonus 2
let dolphinsScoreBonus2 = [97, 112, 101];
let koalasScoreBonus2 = [109, 95, 106];

let dolphinsAverageBonus2 = (dolphinsScoreBonus2[0] + dolphinsScoreBonus2[1] + dolphinsScoreBonus2[2]) / 3;
let koalasAverageBonus2 = (koalasScoreBonus2[0] + koalasScoreBonus2[1] + koalasScoreBonus2[2]) / 3;

console.log("Bonus 2:");
if (dolphinsAverageBonus2 > koalasAverageBonus2 && dolphinsAverageBonus2 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAverageBonus2}!`);
} else if (koalasAverageBonus2 > dolphinsAverageBonus2 && koalasAverageBonus2 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAverageBonus2}!`);
} else if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
    console.log("It's a draw!");
} else {
    console.log("No one wins the bonus round!");
}
