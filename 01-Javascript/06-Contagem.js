function contarInteirosEntrePrimeiroEN(conjunto, n) {
  if (conjunto.length === 0) return 0;
  
  const primeiro = conjunto[0];
  
  // Define os limites independentemente de qual valor é maior
  const min = Math.min(primeiro, n);
  const max = Math.max(primeiro, n);
  
  let contador = 0;

  for (let i = 0; i < conjunto.length; i++) {
    const valor = conjunto[i];
    
    // Verifica se o valor é um número inteiro e se está dentro do intervalo [min, max]
    if (Number.isInteger(valor) && valor >= min && valor <= max) {
      contador++;
    }
  }

  return contador;
}

// Teste
const dados = [3, 1.5, 7, 4, 10, 8, 2];
// Primeiro elemento = 3, N = 8. Intervalo: [3, 8]
console.log(contarInteirosEntrePrimeiroEN(dados, 8)); // 4 (inteiros válidos: 3, 7, 4, 8)