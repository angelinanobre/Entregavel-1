public class Mdc {
    public static int Mdc(int a, int b) {
        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }
        return a;
    }

    public static void main(String[] args) {
        System.out.println(Mdc(24, 36)); // 12
    }
}
