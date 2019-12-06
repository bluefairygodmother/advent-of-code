"use strict";

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
// const input = fs.readFileSync('./test.txt').toString();
const wires = input.split('\n');
const wire1 = wires[0].split(',');
const wire2 = wires[1].split(',');
let grid = [[0,0]];
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
        if (!grid.includes([currentX, currentY])) {
            grid.push([currentX, currentY]);
        }
        distance--;
    }
}

currentX = 0;
currentY = 0;

let gridStrings = [];
for (let x = 0; x < grid.length; x++) {
    gridStrings[x] = JSON.stringify(grid[x]);
}

let manhattanDistance = null;
for (let j = 0; j < wire2.length; j++) {
    let path = wire2[j];
    let direction = path.charAt(0);
    let distance = parseInt(path.slice(1, path.length));
    while (distance > 0) {
        findDirection(direction);

        let pointA = JSON.stringify([currentX, currentY]);
        let intersection = gridStrings.some(function(pointB){
          return pointA === pointB;
        });

        if (intersection) {
            let currentManhattanDistance = Math.abs(currentX) + Math.abs(currentY);
            if (!manhattanDistance || manhattanDistance > currentManhattanDistance) {
                manhattanDistance = currentManhattanDistance;
            }
        }
        distance--;
    }
}

console.log(manhattanDistance);