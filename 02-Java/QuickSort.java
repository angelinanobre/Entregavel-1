import java.util.Arrays;

public class QuickSort {
    public static void quicksort(int[] arr, int inicio, int fim) {
        if (inicio < fim) {
            int pivoIndice = particionar(arr, inicio, fim);
            quicksort(arr, inicio, pivoIndice - 1);
            quicksort(arr, pivoIndice + 1, fim);
        }
    }

    private static int particionar(int[] arr, int inicio, int fim) {
        int pivo = arr[fim];
        int i = inicio - 1;

        for (int j = inicio; j < fim; j++) {
            if (arr[j] < pivo) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[fim];
        arr[fim] = temp;

        return i + 1;
    }

    public static void main(String[] args) {
        int[] dados = {10, 7, 8, 9, 1, 5};
        quicksort(dados, 0, dados.length - 1);
        System.out.println(Arrays.toString(dados)); // [1, 5, 7, 8, 9, 10]
    }
}
