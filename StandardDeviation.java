public class StandardDeviation {

    public static int arrayOperations(double n) {

        // FIND THE MEAN OF NUMBERS TILL N
        double sum = 0.0;
        double mean = 0.0;
        for (int i = 0; i < n; i++) {
            sum += i;
            mean = sum / n;
        }

        // REFACTORED THE CODE TO PRINT A TEMPLATE STRING OF THE OPERATIONS PERFORMED
        System.out.print(
                " The sum of all integers to " + n + " is" + " " + sum + " while " + "The Average "
                        + "is" + " " + mean);
        return 0;
    }

    public static void main(String args[]) {
        double count = 101.0;
        // for (int n = 1; n < count; n++) {
        // System.out.println(arrayOperations(n));
        // }

        arrayOperations(count);
    }

}
