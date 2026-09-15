const prompt = require("prompt-sync")();

const input = prompt("Enter array elements separated by spaces: ");
const arr: number[] = input.split(" ").map(Number);

const target: number = Number(
    prompt("Enter element to count: ")
);

let count = 0;

for (let element of arr) {
    if (element === target) {
        count++;
    }
}

console.log(`Occurrence of ${target}: ${count}`);

export {};