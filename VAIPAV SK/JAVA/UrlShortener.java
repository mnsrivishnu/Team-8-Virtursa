import java.util.HashMap;
import java.util.Scanner;

public class UrlShortener {

    static HashMap<String, String> urlMap = new HashMap<>();
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        int choice = 0;

        while (choice != 4) {
            System.out.println("\n1. Add URL");
            System.out.println("2. Find Original URL");
            System.out.println("3. Display URLs");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");

            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Enter short URL: ");
                    String shortUrl = sc.nextLine();

                    System.out.print("Enter original URL: ");
                    String originalUrl = sc.nextLine();

                    urlMap.put(shortUrl, originalUrl);
                    System.out.println("Got it, saved!");
                    break;

                case 2:
                    System.out.print("Enter short URL: ");
                    String lookup = sc.nextLine();

                    if (urlMap.containsKey(lookup)) {
                        System.out.println("Original URL: " + urlMap.get(lookup));
                    } else {
                        System.out.println("Hmm, couldn't find that short URL.");
                    }
                    break;

                case 3:
                    if (urlMap.isEmpty()) {
                        System.out.println("Nothing saved yet.");
                    } else {
                        System.out.println("\nStored URLs:");
                        for (String key : urlMap.keySet()) {
                            System.out.println(key + " -> " + urlMap.get(key));
                        }
                    }
                    break;

                case 4:
                    System.out.println("Program ended.");
                    break;

                default:
                    System.out.println("Invalid choice.");
            }
        }

        sc.close();
    }
}