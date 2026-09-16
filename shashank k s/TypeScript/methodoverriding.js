import * as readline from "readline";


class Animal {
    constructor(protected name: string) {}

    // Method that can be overridden
    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {

    // Overriding the parent method
    makeSound(): void {
        console.log(`${this.name} says: Woof Woof!`);
    }
}

class Cat extends Animal {

    // Overriding the parent method
    makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.question(
    "Enter animal name: ",
    (animalName: string) => {

        readlineInterface.question(
            "Enter animal type (dog/cat): ",
            (animalType: string) => {

                let animal: Animal;

                
                if (animalType.toLowerCase() === "dog") {
                    animal = new Dog(animalName);
                } else if (animalType.toLowerCase() === "cat") {
                    animal = new Cat(animalName);
                } else {
                    animal = new Animal(animalName);
                }

                                animal.makeSound();

                readlineInterface.close();
            }
        );
    }
);
