import java.util.Scanner;

class Animal {
    void eat() {
        System.out.println("Animal is eating.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking.");
    }
}

public class SingleInheritance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        

        Dog dog = new Dog();

        dog.eat();
        dog.bark();

        scanner.close();
    }
}