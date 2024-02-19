// optimize
function findX(n) {
  let x = 0;
  for (let k = 0; k < n * 2; k++) {
    let i = Math.floor(k / 2); 
    let j = k % (2 * n);       
    x += i + j;
  }
  return x;
}

console.log(findX(2))