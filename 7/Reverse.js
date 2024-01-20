const reverse = (array = []) => {
  const answer = [];
  for (const a of array) {
    answer.unshift(a);
  }
  return answer;
};

console.log(reverse([1, 2, 3, 4, 5]));
