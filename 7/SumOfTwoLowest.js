const sumTwoSmallestNumbers = (data) => {
  data.sort((a, b) => a - b);
  return data[0] + data[1]
};

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
