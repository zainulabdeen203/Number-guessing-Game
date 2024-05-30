#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log("conratulations! you guessed the right number");
}
else {
    console.log("You guessed the wrong number");
}
