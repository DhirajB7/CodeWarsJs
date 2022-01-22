const getSum = (a, b) => {
  let answer = 0;

  let start = a;
  let end = b;

  if (a > b) {
    start = b;
    end = a;
  }

  for (let i = start; i <= end; i++) {
    answer += i;
  }

  return answer;
};

console.log(getSum(0, -1));
