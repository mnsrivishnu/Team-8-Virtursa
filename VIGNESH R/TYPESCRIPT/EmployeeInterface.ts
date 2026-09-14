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

const developer = new Developer(101, "Vignesh", 40000);
const manager = new Manager(102, "Rahul", 60000);

developer.displayDetails();
manager.displayDetails();
export {};