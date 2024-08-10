#! /usr/bin/env node

import inquirer from 'inquirer'

let randomNumber = Math.floor(Math.random() * 9 + 1)
let userName = await inquirer.prompt({
    name: "user",
    type: "input",
    message: "What is your name?",
})
let guessNumber = await inquirer.prompt([
    {
        message: "Enter Number 1-to-10 Try Your Luck",
        type: "number",
        name: "guessNumber"
    }
])
if (guessNumber.guessNumber === randomNumber) {
    console.log(`\n Congratulation ${userName.user} Your Guess Right, You Are Winner! ;) \n`);
} else if (guessNumber.guessNumber > randomNumber) {
    console.log(`\nSorry ${userName.user} Guess NUmber Is bigger! Please try again :( \n  ${randomNumber} < The Random Number\n`);
}
else if (guessNumber.guessNumber < randomNumber) {
    console.log(`\nSorry ${userName.user} Guess Number is Lower! Please Try Again :(  \n ${randomNumber}  < The Random Number\n`);
} else {
    console.log(`\n Not Any Number Define!, you should Choose a number\n`);
}

