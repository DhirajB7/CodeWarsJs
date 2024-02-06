const revrot = (str = "", sz = -1) => {
    if (sz <= 0 || sz > str.length) {
      return "";
    } else {
      const answer = [];
      for (let i = 0; i < str.length; i = i + sz) {
        const subarray = str.substring(i, i + sz);
        if (subarray.length === sz) {
          const value = subarray
            .split("")
            .map((a) => Math.pow(Number(a), 3))
            .reduce((a, b) => a + b);
          if (value % 2 === 0) {
            answer.push(subarray.split("").reverse().join(''));
          } else {
            const [first, ...rest] = subarray.split("");
            answer.push([...rest, first].join(''));
          }
        } else {
          answer.push[subarray];
        }
      }
      return answer.join("");
    }
  };

// console.log(revrot("123456987654", 6));
console.log(revrot("563000655734469485",4))