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
    const size = Number(await getInput("Enter the array size: "));
    const numbers = [];

    for (let i = 0; i < size; i++) {
        const value = Number(
            await getInput(`Enter element ${i + 1}: `)
        );

        numbers.push(value);
    }

    const largest = Math.max(...numbers);

    console.log("Array:", numbers);
    console.log("Largest element:", largest);

    rl.close();
}

main();