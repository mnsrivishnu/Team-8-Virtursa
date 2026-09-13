
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function main(): Promise<void> {
    const n = Number(await ask("Enter the number of elements: "));

    if (!Number.isInteger(n) || n <= 0) {
        console.log("Please enter a positive integer.");
        rl.close();
        return;
    }

    const numbers: number[] = [];

    for (let i = 0; i < n; i++) {
        const value = Number(
            await ask(`Enter element ${i + 1}: `)
        );

        if (!Number.isFinite(value)) {
            console.log("Invalid number. Try again.");
            i--;
            continue;
        }

        numbers.push(value);
    }

    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    const average = sum / numbers.length;

    console.log("Array elements:", numbers);
    console.log("Sum:", sum);
    console.log("Average:", average);

    rl.close();
}

main();