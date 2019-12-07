"use strict";

const input = '183564-657474';
const range = input.split('-');
const rangeStart = parseInt(range[0]);
const rangeEnd = parseInt(range[1]);
let hasDouble = false;
let numberValidPasswords = 0;

function evaluatePassword(potentialPassword) {
    let password = potentialPassword.toString();
    for (let i = 1; i < password.length; i++) { 
        if (password.charAt(i - 1) > password.charAt(i)) {
            return false;
        }
        if (password.charAt(i - 1) == password.charAt(i)) {
            hasDouble = true;
        }  
    }
    return hasDouble;  
}

for (let i = rangeStart; i < rangeEnd; i++) {
    hasDouble = false;
    if (evaluatePassword(i)) {
        numberValidPasswords++;
    }
}

console.log(numberValidPasswords);
