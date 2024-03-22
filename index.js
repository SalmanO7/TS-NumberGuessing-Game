#! /usr/bin/env node
import inquirer from 'inquirer';
let randomNumber = Math.floor(Math.random() * 9 + 1);
let guessNumber = await inquirer.prompt([
    {
        message: "Enter Number 1-to-10 Try Your Luck",
        type: "number",
        name: "guessNumber"
    }
]);
console.log(guessNumber);
if (guessNumber.guessNumber === randomNumber) {
    console.log("\n Congratulation You Are Winner! ;) \n");
}
else if (guessNumber.guessNumber > randomNumber) {
    console.log("Sorry Your Guess NUmber Is bigger! Please try again :( ", randomNumber, " < The Random Number");
}
else if (guessNumber.guessNumber < randomNumber) {
    console.log("Sorry Your Guess Number is Lower! Please Try Again :( ", randomNumber, " < The Random Number");
}
else {
    console.log("Not Any Number Define!, First You Choose a number");
}
