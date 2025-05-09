const findDifference = (a = [], b = []) =>
  Math.abs(a.reduce((c, d) => c * d) - b.reduce((c, d) => c * d));

console.log(findDifference([3, 2, 5], [1, 4, 4]));
