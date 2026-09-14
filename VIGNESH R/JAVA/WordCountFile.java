import java.io.*;
import java.util.Scanner;

public class WordCountFile {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter input file name: ");
        String inputFile = scanner.nextLine();

        System.out.print("Enter output file name: ");
        String outputFile = scanner.nextLine();

        int wordCount = 0;

        try (
            BufferedReader reader = new BufferedReader(new FileReader(inputFile));
            BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))
        ) {

            String line;

            while ((line = reader.readLine()) != null) {

                if (!line.trim().isEmpty()) {
                    String[] words = line.trim().split("\\s+");
                    wordCount += words.length;
                }
            }

            writer.write("Total Word Count: " + wordCount);

            System.out.println("Word count successfully written to " + outputFile);

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        scanner.close();
    }
}