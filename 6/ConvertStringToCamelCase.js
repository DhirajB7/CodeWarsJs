const toCamelCase = (str = "") => {
  const strArr = str.split(/[_-]/g);
  let answer = strArr[0];
  strArr.shift();
  for (const key of strArr) {
    answer += key[0].toUpperCase() + key.substring(1, key.length).toLowerCase();
  }
  return answer;
};

console.log(toCamelCase("My-name_Is-Dhiraj"));
