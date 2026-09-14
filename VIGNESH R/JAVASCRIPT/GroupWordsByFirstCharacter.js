const words = ["apple", "ant", "banana", "ball", "cat", "car"];

const groupedWords = new Map();

for (const word of words) {
    const firstChar = word[0];

    if (!groupedWords.has(firstChar)) {
        groupedWords.set(firstChar, []);
    }

    groupedWords.get(firstChar).push(word);
}

for (const [key, value] of groupedWords) {
    console.log(key + ":", value);
}