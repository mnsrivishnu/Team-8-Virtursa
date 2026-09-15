"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
const input = prompt("Enter array elements separated by spaces: ");
const arr = input.split(" ").map(Number);
const target = Number(prompt("Enter element to count: "));
let count = 0;
for (let element of arr) {
    if (element === target) {
        count++;
    }
}
console.log(`Occurrence of ${target}: ${count}`);
