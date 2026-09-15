function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
    console.log(`Value: ${value}`);
}

const input = prompt("Enter a value:");

if (input !== null && input.trim() !== "") {
    const num = Number(input);
    display(isNaN(num) ? input : num);
}