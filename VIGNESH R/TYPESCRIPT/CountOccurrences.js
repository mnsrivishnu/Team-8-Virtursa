"use strict";
const arr = [10, 20, 30, 20, 40, 20];
const target = 20;
let count = 0;
for (let element of arr) {
    if (element === target) {
        count++;
    }
}
console.log(`Occurrence of ${target}: ${count}`);
