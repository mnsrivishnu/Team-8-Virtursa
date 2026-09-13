// largest.ts

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getNumber(message: string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(message, (answer: string) => {
            resolve(Number(answer));
        });
    });
}

async function main(): Promise<void> {
    const num1: number = await getNumber("Enter first number: ");
    const num2: number = await getNumber("Enter second number: ");
    const num3: number = await getNumber("Enter third number: ");

    const largest: number = Math.max(num1, num2, num3);

    console.log("The largest number is:", largest);

    rl.close();
}

main();