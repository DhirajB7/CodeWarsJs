const hungryFoxes = (farm = "") => {
  let answer = "";

  const isFoxPresent = farm
    .replace(/\[[CF\.]+\]/g, "")
    .split("")
    .some((a) => a === "F");

  const cagedArray = farm
    .split("[")
    .filter((a) => a.includes("]"))
    .map((a) => {
      const index = a.indexOf("]");
      return a.substring(0, index);
    });

    let mp = new Map()

    for(const key of cagedArray){
        const value = /[F]+/.test(key) ? key.replace(/[^F]/g,".") : key
        mp.set(key,value)
    }

  let operationFlag = true;

  let cagedString = ""
  for (const a of farm.split("")) {
    if (a === "[") {
      operationFlag = false;
      answer += a;
    } else if (a === "]") {
      operationFlag = true;
      answer+=mp.get(cagedString)
      answer += a;
      cagedString=""
    } else {
      if (operationFlag) {
        answer += isFoxPresent ? (a === "F" ? "F" : ".") : a;
      } else {
        cagedString+=a
      }
    }
  }

  return answer;
};

console.log(hungryFoxes("CCC[CCC]FCC[CCCFFC]CFFFF[CCCCCCFFC]FFFF"));
console.log(hungryFoxes("CCC[CCC]F..[CCCFFC].FFFF[CCCCCCFFC]FFFF"));
console.log(hungryFoxes("CCC[CCC]CCC[CCCFFC]CCCCC[CCCCCCFFC]CCCC"));
console.log(hungryFoxes("...[CCC].C.[CCCFFC]....[CCCCCCFFC]..F"));
