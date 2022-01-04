const arr = ["a", "e", "i", "o", "u"];
const encode = (str) => {
  let answer = "";
  for (const d of str) {
    if (/[aeiou]/.test(d)) {
      answer += String(arr.indexOf(d) + 1);
    } else {
      answer += d;
    }
  }

  return answer;
};

const decode = (str) => {
  let answer = "";
  for (const d of str) {
    if (/[1-5]/.test(d)) {
      answer += arr[d - 1];
    } else {
      answer += d;
    }
  }
  return answer;
};

console.log(decode(encode("How are you today?")));
