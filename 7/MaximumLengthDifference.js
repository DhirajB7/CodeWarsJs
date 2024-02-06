const mxdiflg = (a1 = [], a2 = []) => {
  if ((a1 && a1.length === 0) || (a2 && a2.length === 0)) {
    return -1;
  } else {
    const [maxA1, minA1] = returnMaxMinOfArray(a1);
    const [maxA2, minA2] = returnMaxMinOfArray(a2);
    return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
  }
};

const returnMaxMinOfArray = (arr = []) => {
const arrInNums = [...arr.map(a=>a.length)]
  let max = Math.max(...arrInNums);
  let min = Math.min(...arrInNums);
  return [max, min];
};

console.log(
  mxdiflg(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);
