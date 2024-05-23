#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright.white("Weclome to Guest Verficication"));
let myLoop = true;
let invitedGuest = ["ali", "alisbha", "sara", "imran", "bilal", "kinza", "haiqa", "bisma", "ahmed", "abdulBari", "saeed"];
while (myLoop) {
    let userInput = await inquirer.prompt([{
            name: "username",
            type: "input",
            message: "Enter your name."
        }
    ]);
    let guestName = userInput.username;
    let lowerCase = guestName.toUpperCase();
    if (invitedGuest.includes(guestName)) {
        console.log(chalk.yellow `Welcome ${guestName} to Dine!`);
        myLoop = false;
    }
    else {
        console.log(chalk.red `\nSorry ${guestName} you're not in today guest list !\n`);
        let askAgain = await inquirer.prompt([{
                name: "othername",
                type: "confirm",
                message: "Do you have another name you go by ? , if so we can check again!",
                default: false
            }]);
        if (askAgain.othername === false) {
            myLoop = false;
            console.log(`\n Sorry you are not in guest list. Please contact to event manager`);
        }
    }
}
