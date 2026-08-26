function mdc(a, b) {
  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

// Teste
console.log(mdc(24, 36)); // 12