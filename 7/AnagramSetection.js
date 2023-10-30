const isAnagram = (test = "", original = "") => {
  const value1 = test
    .toLowerCase()
    .split("")
    .map((a) => a.charCodeAt())
    .reduce((a, b) => a + b);
  const value2 = original
    .toLowerCase()
    .split("")
    .map((a) => a.charCodeAt())
    .reduce((a, b) => a + b);

  return value1 === value2;
};
