
const prompt = require("prompt-sync")();

interface Employee {
    id: number;
    name: string;
    salary: number;

    displayDetails(): void;
}

class Developer implements Employee {
    constructor(
        public id: number,
        public name: string,
        public salary: number
    ) {}

    displayDetails(): void {
        console.log(
            `Developer -> ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`
        );
    }
}

class Manager implements Employee {
    constructor(
        public id: number,
        public name: string,
        public salary: number
    ) {}

    displayDetails(): void {
        console.log(
            `Manager -> ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`
        );
    }
}

console.log("Enter Developer Details");
const devId = Number(prompt("ID: "));
const devName = prompt("Name: ");
const devSalary = Number(prompt("Salary: "));

console.log("\nEnter Manager Details");
const mgrId = Number(prompt("ID: "));
const mgrName = prompt("Name: ");
const mgrSalary = Number(prompt("Salary: "));

const developer = new Developer(devId, devName, devSalary);
const manager = new Manager(mgrId, mgrName, mgrSalary);

console.log("\nEmployee Details:");
developer.displayDetails();
manager.displayDetails();

export {};