const solution = (str) => {
  let answer = "";

  for (const data of str.split("")) {
    if (/[A-Z]/.test(data)) {
      answer += " " + data;
    } else {
      answer += data;
    }
  }

  return answer;
};

console.log(solution("camelCasing"))
console.log(solution("identifier"));
console.log(solution(""));
