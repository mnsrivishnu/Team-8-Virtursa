"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
class Developer {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log(`Developer -> ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
    }
}
class Manager {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log(`Manager -> ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
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
