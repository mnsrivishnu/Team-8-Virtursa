
import java.util.Scanner;

public class third {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {

            int number = 1;

            for (int space = 0; space < n - i; space++) {
                System.out.print(" ");
            }

            for (int j = 0; j <= i; j++) {

                System.out.print(number + " ");

                number = number * (i - j) / (j + 1);
            }

            System.out.println();
        }

        sc.close();
    }
}