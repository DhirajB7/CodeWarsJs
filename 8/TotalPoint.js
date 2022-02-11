const points = (arr) => {
  let total = 0;
  for (const data of arr) {
    const a = Number(data.split(":")[0]);
    const b = Number(data.split(":")[1]);

    a > b ? (total += 3) : a === b ? (total += 1) : (total += 0);
  }
  return total;
};
