const solve = (s = "") =>
  s.split("").filter((a) => a.match(/[A-Z]/)).length >
  s.split("").filter((a) => a.match(/[a-z]/)).length
    ? s.toUpperCase()
    : s.toLowerCase();

console.log(1, solve("DHIraj"));
console.log(2, solve(""));
