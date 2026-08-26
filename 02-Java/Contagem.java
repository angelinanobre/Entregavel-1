public class ContagemInteiros {
    public static int contarInteirosEntrePrimeiroEN(double[] conjunto, double n) {
        if (conjunto.length == 0) return 0;

        double primeiro = conjunto[0];
        double min = Math.min(primeiro, n);
        double max = Math.max(primeiro, n);

        int contador = 0;

        for (double valor : conjunto) {
            // Checa se o valor não tem parte decimal (é inteiro) e se está no intervalo
            boolean ehInteiro = (valor == Math.floor(valor));
            if (ehInteiro && valor >= min && valor <= max) {
                contador++;
            }
        }

        return contador;
    }

    public static void main(String[] args) {
        double[] dados = {3.0, 1.5, 7.0, 4.0, 10.0, 8.0, 2.0};
        // Primeiro elemento = 3.0, N = 8.0. Intervalo: [3.0, 8.0]
        System.out.println(contarInteirosEntrePrimeiroEN(dados, 8.0)); // 4 (valores válidos: 3.0, 7.0, 4.0, 8.0)
    }
}