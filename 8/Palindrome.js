const isPalindrome = (x = "") => {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
};

console.log(isPalindrome("madamm"));
