function somatorio(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

// Teste
console.log(somatorio([5, 10, 15, 20])); // 50