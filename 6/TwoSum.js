const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.lastIndexOf(target - numbers[i]) >= 0) {
      return [i, numbers.lastIndexOf(target - numbers[i])];
    }
  }
};

console.log(twoSum([1,2,3], 4));

