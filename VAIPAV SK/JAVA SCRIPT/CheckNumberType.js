function checkNumberType(num) {
    return Number.isInteger(num) ? "Integer" : "Floating-point number";
}

const input = prompt("Enter a number:");
const num = Number(input);

if (!isNaN(num)) {
    const result = checkNumberType(num);
    alert(`The number is a ${result}.`);
} else {
    alert("That doesn't look like a valid number.");
}