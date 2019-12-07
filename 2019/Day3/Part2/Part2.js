"use strict";

const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString();
const wires = input.split('\n');
const wire1 = wires[0].split(',');
const wire2 = wires[1].split(',');
let wire1path = ['(0, 0)'];
let wire2path = ['(0, 0)'];
let currentX = 0;
let currentY = 0;

function findDirection(direction) {
    switch(direction) {
        case 'R':
            currentX += 1;
            break;
        case 'L':
            currentX -= 1;
            break;
        case 'U':
            currentY += 1;
            break;
        case 'D':
            currentY -= 1;
            break;
    }
}

for (let i = 0; i < wire1.length; i++) {
    let path = wire1[i];
    let direction = path.charAt(0);
    let distance = parseInt(path.slice(1, path.length));
    while (distance > 0) {
        findDirection(direction);
        wire1path.push(`(${currentX}, ${currentY})`);
        distance--;
    }
}

currentX = 0;
currentY = 0;


let combinedSteps = null;
for (let j = 0; j < wire2.length; j++) {
    let path = wire2[j];
    let direction = path.charAt(0);
    let distance = parseInt(path.slice(1, path.length));
    while (distance > 0) {
        findDirection(direction);

        let pointA = `(${currentX}, ${currentY})`;
        wire2path.push(pointA);        

        let intersection = wire1path.some(function(pointB){
          return pointA === pointB;
        });

        if (intersection) {
            let wire1FirstPoint = wire1path.findIndex(function(el) {
                return el == pointA;
            });
            let wire2FirstPoint = wire2path.findIndex(function(el) {
                return el == pointA;
            });

            let currentCombinedSteps = Math.abs(wire1FirstPoint) + Math.abs(wire2FirstPoint);
            
            if (!combinedSteps || combinedSteps > currentCombinedSteps) {
                combinedSteps = currentCombinedSteps;
            }
        }
        distance--;
    }
}

console.log(combinedSteps);