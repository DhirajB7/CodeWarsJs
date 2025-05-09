//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

const sumDigPow = (a, b) => {
  const answer = [];

  for (let i = a; i <= b; i++) {
    if (logic(String(i))) {
      answer.push(i);
    }
  }

  return answer;
};

const logic = (str = "") => {
  const strArr = str.split("");
  let logicAnswer = 0;
  for (let i = 1; i <= strArr.length; i++) {
    logicAnswer += Math.pow(Number(strArr[i - 1]), i);
  }
  return Number(str) === logicAnswer;
};

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
