function fibonacci(n) {
  if (n <= 1) return [0];
  
  const sequencia = [0, 1];
  
  for (let i = 2; i < n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }
  
  return sequencia;
}

// Teste
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]