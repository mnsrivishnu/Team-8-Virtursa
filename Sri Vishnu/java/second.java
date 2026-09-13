
import java.util.Scanner;

public class second {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine().trim();

        int wordCount = 0;

        if (!sentence.isEmpty()) {
            String[] words = sentence.split("\\s+");
            wordCount = words.length;
        }

        System.out.println("Number of words: " + wordCount);

        sc.close();
    }
}