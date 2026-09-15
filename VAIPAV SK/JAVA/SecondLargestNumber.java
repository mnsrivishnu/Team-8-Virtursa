import java.util.Scanner;

public class SecondLargestNumber {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("How many numbers do you want to enter? ");
        int n = sc.nextInt();

        if (n < 2) {
            System.out.println("Need at least 2 numbers to find a second largest.");
            sc.close();
            return;
        }

        int[] nums = new int[n];
        System.out.println("Okay, enter the numbers one by one:");
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }

        sc.close();

        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;

        for (int num : nums) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num != max) {
                secondMax = num;
            }
        }

        if (secondMax == Integer.MIN_VALUE) {
            System.out.println("Couldn't find a second largest (maybe all values were the same?)");
        } else {
            System.out.println("Largest: " + max);
            System.out.println("Second largest: " + secondMax);
        }
    }
}