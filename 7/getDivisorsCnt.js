const getDivisorsCnt = (n) => {
  let count = 0;
  const sqrt = Math.sqrt(n);
  if (n % sqrt == 0) {
    count++;
  }
  for (let i = 0; i < sqrt; i++) {
    if (n % i == 0) count += 2;
  }
  return count;
};

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
console.log(getDivisorsCnt());
