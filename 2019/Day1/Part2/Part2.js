"use strict";

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
const modules = input.split('\n');

function fuelRequirements(mass) {
    return Math.floor( mass / 3 ) - 2;
}

let fuelSum = 0;
modules.forEach(module => {
    let fuelReq = fuelRequirements(module);
    while (fuelReq > 0) {
        fuelSum += fuelReq;
        fuelReq = fuelRequirements(fuelReq);
    }
}); 

console.log(fuelSum);
