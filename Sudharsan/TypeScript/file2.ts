class Student {
    name: string;
    age: number;
    course: string;

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
    }

    study(): void {
        console.log(this.name + " is studying " + this.course);
    }
}

// Create an object
let student1 = new Student("Sudharsan", 21, "Computer Science");

// Call methods
student1.displayDetails();
student1.study();
