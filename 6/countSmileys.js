const countSmileys = (arr = []) => {
  const eyes = [":", ";"];
  const nose = ["-", "~"];
  const mouth = [")", "D"];

  return arr.filter((a = "") => {
    const smileArr = a.split("");
    return (
      (smileArr.length == 2 &&
        eyes.includes(smileArr[0]) &&
        mouth.includes(smileArr[1])) ||
      (smileArr.length == 3 &&
        eyes.includes(smileArr[0]) &&
        nose.includes(smileArr[1]) &&
        mouth.includes(smileArr[2]))
    );
  }).length;
};

console.log(countSmileys([]));
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
