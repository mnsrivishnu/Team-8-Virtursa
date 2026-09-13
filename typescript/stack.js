"use strict";
class Stack {
    items = [];
    // Add an element to the stack
    push(value) {
        this.items.push(value);
    }
    // Remove and return the top element
    pop() {
        return this.items.pop();
    }
    // Display the stack
    display() {
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
