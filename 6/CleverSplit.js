const cleverSplit = (s = "") => {
  const answer = [];
  let word = "";
  let bracketOpen = false;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === " " && !bracketOpen) {
      answer.push(word);
      word = "";
    } else {
      word += s.charAt(i);

      if(s.charAt(i)==="["){
        bracketOpen=true
      }

      if(s.charAt(i)==="]"){
        bracketOpen=false
      }
    }
  }

  return [...answer,word];
};

console.log(cleverSplit("Buy a !car [!red green !white] [cheap or !new]"));
