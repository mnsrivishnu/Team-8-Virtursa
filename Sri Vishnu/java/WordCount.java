import java.util.Scanner;

public class WordCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().trim();

        int wordCount;

        if (sentence.isEmpty()) {
            wordCount = 0;
        } else {
            String[] words = sentence.split("\\s+");
            wordCount = words.length;
        }

        System.out.println("Number of words: " + wordCount);

        scanner.close();
    }
}