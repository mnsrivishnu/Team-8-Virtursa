class Calculator {
   
    add(...numbers) {
        
        if (numbers.length === 0) {
            return 0;
        }
        
        let sum = 0;

        for (const number of numbers) {
            sum += number;
        }

        return sum;
    }
}

const calculator = new Calculator();


const input = prompt(
    "Enter numbers separated by spaces:"
);

if (input !== null && input.trim() !== "") {

    
    const numbers = input
        .trim()
        .split(/\s+/)
        .map(Number);

    
    const result = calculator.add(...numbers);

    console.log("Numbers:", numbers);
    console.log("Sum:", result);
}
