const prompt = require("prompt-sync")();

const input = prompt("Enter words separated by spaces: ");

const words = input.split(" ");

const groupedWords = new Map();

for (let word of words) {

    let firstChar = word[0];

    if (groupedWords.has(firstChar)) {
        groupedWords.get(firstChar).push(word);
    } else {
        groupedWords.set(firstChar, [word]);
    }
}

for (let [key, value] of groupedWords) {
    console.log(key + " -> " + value);
}