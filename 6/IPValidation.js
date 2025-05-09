function isValidIP(str = "") {
  const regex =
    /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

  return regex.test(str);
}

isValidIP("123.44.56.78");
// console.log(isValidIP("123.44.56.-78"));
// console.log(isValidIP("123.44.56.778"));
// console.log(isValidIP("123.44.56.78.77"));
// console.log(isValidIP("123.44.056.78"));
// console.log(isValidIP("123. 44.56.78"));
