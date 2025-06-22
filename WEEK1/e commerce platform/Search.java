public class Search{

    // Linear Search: No need to sort
    public static Products linearSearch(Products[] products, String name) {
        for (Products product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search: Array must be sorted by productName
    public static Products binarySearch(Products[] products, String name) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left +right ) / 2;
            int comparison = name.compareToIgnoreCase(products[mid].productName);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return null;
    }
}
