const longestConsec = (strarr = [], k) => {
  if (!strarr || strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  } else {
    let longestWord = "";
    for (let i = 0; i < strarr.length; i++) {
      const word = strarr.slice(i, i + k).join("");
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
};

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
  "abigailtheta"
);
