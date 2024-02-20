function fibonacci(n, obj = {}) {
  if (n in obj) {
    return obj[n];
  }
  if (n < 2) return 1;

  obj[n] = fibonacci(n - 1, obj) + fibonacci(n - 2, obj);

  return obj[n];
}
