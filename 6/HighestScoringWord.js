const high = (x) => {
  const mp = new Map();

  for (let i = 97; i <= 122; i++) {
    mp.set(String.fromCharCode(i), i - 96);
  }

  let great = 0;
  let greatWord = "";

  for (const data of x.split(" ")) {
    let sum = 0;
    for (const d of data.split("")) {
      sum += mp.get(d);
    }

    if (sum > great) {
      great = sum;
      greatWord = data;
    }
  }

  return greatWord;
};

console.log(high("fghjklkjhgf ghjklkjhgf ghjkllkjgf ghjkl"));
