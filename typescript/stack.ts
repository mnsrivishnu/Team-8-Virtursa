
class Stack {
    private items: number[] = [];

    // Add an element to the stack
    push(value: number): void {
        this.items.push(value);
    }

    // Remove and return the top element
    pop(): number | undefined {
        return this.items.pop();
    }

    // Display the stack
    display(): void {
        console.log("Stack:", this.items);
    }
}

// Create a stack object
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("After pushing elements:");
stack.display();

console.log("Popped element:", stack.pop());

console.log("After popping:");
stack.display();