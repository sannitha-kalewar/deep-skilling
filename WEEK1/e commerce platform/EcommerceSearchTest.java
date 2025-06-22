import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearchTest {
    public static void main(String[] args) {
        Products[] products = {
            new Products(1, "MacBook", "Electronics"),
            new Products(2, "Kurta", "Clothing"),
            new Products(3, "Mobile", "Electronics"),
            new Products(4, "Watch", "Accessories"),
            new Products(5, "Ring", "Accessories")
        };

        // Linear Search
        System.out.println(" Linear Search for 'Mobile':");
        Products foundLinearSearch = Search.linearSearch(products, "Mobile");
        System.out.println(foundLinearSearch != null ? foundLinearSearch : "Product not found.");

        // Sort the array for binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        //  Binary Search
        System.out.println("\n Binary Search for 'Mobile':");
        Products foundBinarySearch = Search.binarySearch(products, "Mobile");
        System.out.println(foundBinarySearch != null ? foundBinarySearch : "Product not found.");
    }
}
