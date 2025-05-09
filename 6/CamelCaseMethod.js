String.prototype.camelCase = function () {
  let flag = true;
  let answer = "";
  for (let i = 0; i < this.length; i++) {
    let alphabet = this[i];
    if (flag) {
      alphabet = alphabet.toUpperCase();
      flag = false;
    } else {
      alphabet = alphabet.toLowerCase();
    }
    if (alphabet === " ") {
      flag = true;
      continue;
    }
    answer += alphabet;
  }
  return answer;
};

console.log("test case".camelCase());
