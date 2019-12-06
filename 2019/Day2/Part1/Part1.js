"use strict";

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
// const input = fs.readFileSync('./test.txt').toString();
const program = input.split(',');

program[1] = 12;
program[2] = 2;

let i = 0;

while (program[i] != 99) {
    let iterator = program[i];
    if ( ![1,2,99].includes(parseInt(iterator)) ) {
        console.log(`Invalid program code. Returned ${iterator}`);
    }

    let inputA = program[program[i + 1]];
    let inputB = program[program[i + 2]];
    let outputPlacement = program[i + 3];

    if (iterator == 1) {
        let sum = parseInt(inputA) + parseInt(inputB);
        program[outputPlacement] = sum;
    }

    if (iterator == 2) {
        let product = parseInt(inputA) * parseInt(inputB);
        program[outputPlacement] = product;
    }

    i += 4;
}

if (program[i] == 99) {
    console.log(program[0]);
}
