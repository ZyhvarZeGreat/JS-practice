import java.util.Scanner;

public class multiplicationTable {

    public static final Scanner SC = new Scanner(System.in);

    public static int multiplyTo() {
        System.out.print("Input The Number You Want To Multiply to");
        int n = SC.nextInt();
        for (int i = 1; i <= n; i++) {
            System.out.println(i + " |");
            for (int j = 1; j <= n; j++) {
                System.out.print(i * j + " ");
            }
            System.out.println();
        }

        return 0;
    }

    public static void main(String[] args) {

        System.out.println("Multiplication Table \n");
        System.out.println("| 1 2 3 4 5 6 7 8 9 10 11 12");
        System.out.println("----------------------------");
        multiplyTo();
    }
}
