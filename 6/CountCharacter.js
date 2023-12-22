const count = (string = "") => {
  const obj = {};
  string.split("").forEach((a) => {
    obj[a] = a in obj ?  obj[a] + 1 : 1;
  });
  return obj;
};

console.log(count("abba"));
