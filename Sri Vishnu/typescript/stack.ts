
import * as readline from "readline";

class Stack {
    private items: number[] = [];
    private top: number = -1;

    constructor(private capacity: number) {}

    push(value: number): void {
        if (this.top === this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }

        this.items.push(value);
        this.top++;
        console.log("Element pushed successfully.");
    }

    pop(): void {
        if (this.top === -1) {
            console.log("Stack Underflow");
            return;
        }

        const removed = this.items.pop();
        this.top--;

        console.log("Popped element:", removed);
    }

    display(): void {
        if (this.top === -1) {
            console.log("Stack is empty.");
            return;
        }

        console.log("Stack elements:", this.items);
    }
}

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
    const capacity = Number(await ask("Enter stack capacity: "));

    if (!Number.isInteger(capacity) || capacity <= 0) {
        console.log("Please enter a positive integer.");
        rl.close();
        return;
    }

    const stack = new Stack(capacity);

    while (true) {
        console.log("\n1. Push");
        console.log("2. Pop");
        console.log("3. Display");
        console.log("4. Exit");

        const choice = Number(await ask("Enter your choice: "));

        if (choice === 1) {
            const value = Number(await ask("Enter element: "));

            if (!Number.isFinite(value)) {
                console.log("Please enter a valid number.");
            } else {
                stack.push(value);
            }
        } else if (choice === 2) {
            stack.pop();
        } else if (choice === 3) {
            stack.display();
        } else if (choice === 4) {
            console.log("Program exited.");
            break;
        } else {
            console.log("Invalid choice.");
        }
    }

    rl.close();
}

main();