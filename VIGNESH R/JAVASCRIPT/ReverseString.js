const prompt = require("prompt-sync")();

const str = prompt("Enter a string: ");

const reversedString = str
    .split("")
    .reverse()
    .join("");

console.log("Original String:", str);
console.log("Reversed String:", reversedString);