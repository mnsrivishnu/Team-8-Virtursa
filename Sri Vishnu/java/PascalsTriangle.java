import java.util.Scanner;

public class PascalsTriangle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of rows: ");
        int n = scanner.nextInt();

        if (n <= 0) {
            System.out.println("Please enter a positive number.");
        } else {
            for (int i = 0; i < n; i++) {
                int value = 1;

                for (int space = 0; space < n - i; space++) {
                    System.out.print(" ");
                }

                for (int j = 0; j <= i; j++) {
                    System.out.print(value + " ");

                    value = value * (i - j) / (j + 1);
                }

                System.out.println();
            }
        }

        scanner.close();
    }
}