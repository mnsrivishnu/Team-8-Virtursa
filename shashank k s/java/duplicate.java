import java.util.*;

public class RemoveDuplicates {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        int[] numbers = new int[size];

        
        System.out.println("Enter " + size + " elements:");
        for (int i = 0; i < size; i++) {
            numbers[i] = scanner.nextInt();
        }

                Set<Integer> uniqueNumbers = new LinkedHashSet<>();

        for (int number : numbers) {
            uniqueNumbers.add(number);
        }

                System.out.println("Array after removing duplicates:");
        System.out.println(uniqueNumbers);

        scanner.close();
    }
}
