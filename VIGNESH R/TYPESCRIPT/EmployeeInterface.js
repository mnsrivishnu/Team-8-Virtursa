"use strict";
class Developer {
    id;
    name;
    salary;
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
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log(`Manager -> ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
    }
}
const developer = new Developer(101, "Vignesh", 40000);
const manager = new Manager(102, "Rahul", 60000);
developer.displayDetails();
manager.displayDetails();
