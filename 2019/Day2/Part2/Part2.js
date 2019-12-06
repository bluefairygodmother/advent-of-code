"use strict";

const fs = require('fs');
var _ = require('lodash');
const input = fs.readFileSync('./input.txt').toString();
// const input = fs.readFileSync('./test.txt').toString();
const memory = input.split(',');

let noun = memory[1];
let verb = memory[2];

for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
        memory[1] = noun;
        memory[2] = verb;
        let memoryCopy = _.cloneDeep(memory);
        let output = gravityAssist(memoryCopy);
        if (output == 19690720) {
            console.log(`Noun: ${noun}, Verb: ${verb}, Output: ${output}`);
            console.log(100*noun+verb);
        }
    }
}

function gravityAssist(memCopy) {
    let i = 0;
    while (memCopy[i] != 99) {
        let opcode = memCopy[i];
        if ( ![1,2,99].includes(parseInt(opcode)) ) {
            console.log(`Invalid code. Returned ${opcode}`);
        }
    
        let parameterA = memCopy[memCopy[i + 1]];
        let parameterB = memCopy[memCopy[i + 2]];
        let outputPlacement = memCopy[i + 3];
    
        if (opcode == 1) {
            let sum = parseInt(parameterA) + parseInt(parameterB);
            memCopy[outputPlacement] = sum;
        }
    
        if (opcode == 2) {
            let product = parseInt(parameterA) * parseInt(parameterB);
            memCopy[outputPlacement] = product;
        }
    
        i += 4;
    }
    
    if (memCopy[i] == 99) {
        return memCopy[0];
    }
}

