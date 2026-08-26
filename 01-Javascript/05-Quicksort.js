function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivo = arr[arr.length - 1];
  const menores = [];
  const maiores = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivo) {
      menores.push(arr[i]);
    } else {
      maiores.push(arr[i]);
    }
  }

  return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

// Teste
console.log(quicksort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]