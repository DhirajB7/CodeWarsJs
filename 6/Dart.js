const scoreThrows = (radii = []) => {
  let answer = 0;

  for(const a of radii){
    if(a>10){
        answer+=0;
    }else if(a>=5&&a<=10){
        answer+=5;
    }else{
        answer+=10;
    }
  }
  if (radii.length > 0 && radii.every((a) => a < 5)) {
    answer += 100;
  }

  return answer;
};

console.log(scoreThrows([1,5,11]));
console.log(scoreThrows([]));