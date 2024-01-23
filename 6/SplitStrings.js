const solution = (str = "") => {
  const answer = [];

  if (str.length % 2 == 1) {
    str = str + "_";
  }

  for (let i = 0; i < str.length; i = i + 2) {
    answer.push(str.substring(i, i + 2));
  }

  return answer;
};

console.log(solution("abc"));
console.log(solution("abcde"));
console.log(solution("abcdef"));
