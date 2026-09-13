const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(message) {
    return new Promise((resolve) => {
        rl.question(message, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    const sentence = await getInput("Enter a sentence: ");

    const words = sentence.trim().split(/\s+/);

    const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const result = capitalizedWords.join(" ");

    console.log("Capitalized sentence:", result);

    rl.close();
}

main();