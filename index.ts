#! /usr/bin/env node

import inquirer from 'inquirer'

let randomNumber = Math.floor(Math.random() * 9 + 1)
let condition = true;

while (condition) {
    let guessNumber = await inquirer.prompt([
        {
            message: "Enter Number 1-to-10 Try Your Luck",
            type: "number",
            name: "guessNumber"
        }
    ])

    if (guessNumber.guessNumber === randomNumber) {
        console.log("\n Congratulation Your Guess Right, You Are Winner! ;) \n");
    } else if (guessNumber.guessNumber > randomNumber) {
        console.log("\nSorry Your Guess NUmber Is bigger! Please try again :( ", randomNumber, " < The Random Number\n");
    }
    else if (guessNumber.guessNumber < randomNumber) {
        console.log("\nSorry Your Guess Number is Lower! Please Try Again :( ", randomNumber, " < The Random Number\n");
    } else {
        console.log("\nNot Any Number Define!, First You Choose a number\n");
    }

    let GameOver = await inquirer.prompt([
        {
            message: "Do You Want To Play Again?",
            type: "confirm",
            name: "playAgain",
            default: true,
        }
    ])
    condition = GameOver.playAgain
}


