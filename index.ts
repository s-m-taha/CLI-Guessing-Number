#!/usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 10 + 1);
console.log("Guess The Number 1 to 10");
const answer = await inquirer.prompt([
    {
        name: "guessNumber",
        message: "Please Guess The Number between 1-10 :",
        type: "number",
    },
]);
if (answer.guessNumber === randomNum) {
    console.log("Congratulations Your Guess Is Right");
}
else {
    console.log("Oop! Your Guess Is Wrong");
}
;