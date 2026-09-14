import java.util.ArrayList;
import java.util.List;
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

        List<Employee> employees = new ArrayList<>();

        employees.add(new Employee(101, "Vignesh", 22, 30000));
        employees.add(new Employee(102, "Rahul", 28, 45000));
        employees.add(new Employee(103, "Priya", 25, 55000));
        employees.add(new Employee(104, "Karthik", 30, 60000));

        int minAge = 25;
        double minSalary = 50000;

        List<Employee> filteredEmployees = employees.stream()
                .filter(emp -> emp.getAge() >= minAge &&
                               emp.getSalary() >= minSalary)
                .collect(Collectors.toList());

        System.out.println("Filtered Employees:");
        filteredEmployees.forEach(System.out::println);
    }
}