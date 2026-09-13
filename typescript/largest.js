// largest.ts
import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("First number: ", (a) => {
    rl.question("Second number: ", (b) => {
        rl.question("Third number: ", (c) => {
            const num1 = Number(a);
            const num2 = Number(b);
            const num3 = Number(c);
            const largest = Math.max(num1, num2, num3);
            console.log("The largest number is:", largest);
            rl.close();
        });
    });
});
