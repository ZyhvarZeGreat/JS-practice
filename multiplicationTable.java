public class multiplicationTable {

    public static int multiplyTo(int n) {

        for (int i = 1; i <= n; i++) {
            System.out.println("The Multiplication table of " + i);
            for (int j = 1; j <= n; j++) {
                System.out.println(i + " x  " + j + " = " + i * j);
                System.out.println("\n");
            }

        }

        return 0;
    }

    public static void main(String[] args) {
        multiplyTo(10);
    }
}
