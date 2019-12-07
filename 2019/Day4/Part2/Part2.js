"use strict";

const input = '183564-657474';
const range = input.split('-');
const rangeStart = parseInt(range[0]);
const rangeEnd = parseInt(range[1]);
let numberValidPasswords = 0;

function evaluatePassword(potentialPassword) {
    let password = potentialPassword.toString();
    let validDoubles = [];
    let potentialDouble = null;
    let numRepetitions = 0;

    for (let i = 1; i < password.length; i++) { 
        let prevChar = password.charAt(i - 1);
        let curChar = password.charAt(i);
        if (prevChar > curChar) {
            return false;
        }

        if (prevChar == curChar) {
            if (numRepetitions >= 2) {
                numRepetitions++;
                validDoubles = validDoubles.filter(char => char !== curChar);
            }
            if (numRepetitions == 0) {
                numRepetitions = 2;
                validDoubles.push(curChar);
            }
        } else {
            numRepetitions = 0;
        }
    }
    return validDoubles.length > 0;  
}

for (let i = rangeStart; i < rangeEnd; i++) {
    if (evaluatePassword(i)) {
        numberValidPasswords++;
    }
}

console.log(numberValidPasswords);
