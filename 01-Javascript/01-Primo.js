function numPrimo(n) {
  if (n <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Teste
console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false