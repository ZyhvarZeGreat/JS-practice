import java.util.Scanner;

class testArray {

  private static final Scanner SC = new Scanner(System.in);

  public static double standardDeviation() {

    return 0.0;
  }

  ///// BUBBLE SORT SUPPOSEDLY///////
  public static int max(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }

    System.out.println(arr[arr.length - 1]);
    return arr[arr.length - 1];
  }

  public static int multiplicationTable() {

    // DECLARE THE VARIABLES
    int Size;
    int n;
    int result = 1;
    // // REQUEST THE USER TO INPUT THE NUMBER TO BE MULTIPLIED
    // System.out.println("Input the number to multiply to");
    // n = SC.nextInt();
    // // REQUEST THE USER TO INPUT THE NUMBER OF ELEMENTS IN AN ARRAY
    // System.out.println("Input the number of Elements in the array:");
    // Size = SC.nextInt();
    // // REQUEST THE USER TO INPUT THE ELEMENTS IN THE ARRAY
    // System.out.print("Please Enter the" + " " + Size + " " + "Elements in
    // array:");

    // // SETTING THE ELEMENTS IN THE ARRAY TO THE USER INPUT
    // int[] a = new int[Size];

    // LOOPING THROUGH THE ARRAY AND MULTIPLYING BY THE INDEX OF THE ARRAY
    for (int i = 1; i < 10; i++) {
      // a[i] = SC.nextInt();

      // System.out.println(n + " x " + a[i] + " = " + a[i] * n);
      for (int j = i; j < 10; j++) {
        result = i * j;
        System.out.print(i + "x" + j + " = " + result);
        System.out.println("\n");
      }
      System.out.print(" ----- ITERATION " + i + " -----");
    }

    return 0;
  }

  public static void main(String[] args) {
    // int[] arr = { 1, 2, 101, 10, 24, 99 };

    // int maxValue = max(arr);
    // System.out.print("max Value = " + maxValue);

    multiplicationTable();
    // int Size;
    // int i;

    // System.out.print("Enter the number of elements of the array:");
    // Size = SC.nextInt();

    // double[] a = new double[Size];
    // System.out.print("Please Enter" + " " + Size + " " + "Elements of an
    // array:");

    // double Sum = 0;
    // double Product = 1;
    // double Mean = 0;
    // double standardDeviation = 0;
    // for (i = 0; i < Size; i++) {

    // a[i] = SC.nextInt();
    // double arraySum = a[i] + a[i];
    // double arrayProduct = a[i] * a[i];

    // Sum += arraySum;
    // Product *= arrayProduct;
    // Mean = Sum / Size;
    // }

    // for (double num : a) {
    // double meanDeviation = num - Mean;
    // standardDeviation += Math.pow(meanDeviation, 2);
    // System.out.println(standardDeviation + " Everybody hates Java");
    // System.out.println(meanDeviation);
    // }
    // standardDeviation = Math.sqrt(standardDeviation / Size);

    // System.out.println(" Product of the array = " + Product + '\n');
    // System.out.println(" Sum of the array = " + Sum + '\n');
    // System.out.println(" Mean of the array = " + Mean + '\n');
    // System.out.println(" SD of the array = " + standardDeviation + '\n');
    // /////////////////////////////////////////////////////////////////////////////
    // double cubeSum = 0;
    // double cubeProduct = 1;
    // for (i = 0; i < Size; i++) {
    // a[i] = SC.nextInt();
    // double arrayCube = a[i] * a[i] * a[i];
    // System.out.print(" " + arrayCube + " ");

    // cubeSum += arrayCube;
    // cubeProduct = arrayCube * arrayCube;

    // }
    // System.out.print("\n");
    // System.out.print(cubeSum);
    // System.out.print("\n");
    // System.out.print(cubeProduct);

    // }
    // }

  }
}