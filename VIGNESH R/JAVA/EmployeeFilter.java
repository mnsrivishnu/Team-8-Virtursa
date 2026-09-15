import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

class Employee {
    private int id;
    private String name;
    private int age;
    private double salary;

    public Employee(int id, String name, int age, double salary) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public int getAge() {
        return age;
    }

    public double getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        return "ID: " + id +
                ", Name: " + name +
                ", Age: " + age +
                ", Salary: " + salary;
    }
}

public class EmployeeFilter {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        List<Employee> employees = new ArrayList<>();

        System.out.print("Enter number of employees: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.println("\nEnter details for Employee " + (i + 1));

            System.out.print("ID: ");
            int id = sc.nextInt();

            sc.nextLine();

            System.out.print("Name: ");
            String name = sc.nextLine();

            System.out.print("Age: ");
            int age = sc.nextInt();

            System.out.print("Salary: ");
            double salary = sc.nextDouble();

            employees.add(new Employee(id, name, age, salary));
        }

        System.out.print("\nEnter minimum age: ");
        int minAge = sc.nextInt();

        System.out.print("Enter minimum salary: ");
        double minSalary = sc.nextDouble();

        List<Employee> filteredEmployees = employees.stream()
                .filter(emp -> emp.getAge() >= minAge &&
                               emp.getSalary() >= minSalary)
                .collect(Collectors.toList());

        System.out.println("\nFiltered Employees:");
        for(Employee emp : filteredEmployees) 
        {
            System.out.println(emp);
        }
            
    }
}