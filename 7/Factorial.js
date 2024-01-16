function factorial(n) {
  if (n >= 0 && n < 12) {
    if (n == 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  } else {
    throw new RangeError("");
  }
}

console.log(factorial(23));
