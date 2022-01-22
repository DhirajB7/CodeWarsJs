const findOdd = (arr) => {
  const mp = new Map();

  for (const a of arr) {
    mp.has(a) ? mp.set(a, mp.get(a) + 1) : mp.set(a, 1);
  }

  for(const [k,v] of mp){
      if(v%2===1){
          return k;
      }
  }
};

console.log(findOdd());