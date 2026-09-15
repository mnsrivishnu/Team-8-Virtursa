function checkEvenOrOdd(num: number): string {
    return num % 2 === 0 ? "Even" : "Odd";
}

const input = prompt("Enter a number:");

if (input !== null && input.trim() !== "") {
    const num = Number(input);

    if (!isNaN(num)) {
        console.log(`The number is ${checkEvenOrOdd(num)}.`);
    } else {
        console.log("Please enter a valid number.");
    }
}