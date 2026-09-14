"use strict";
let number = 17;
let isPrime = true;
if (number <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(number + " is a Prime Number");
}
else {
    console.log(number + " is Not a Prime Number");
}
