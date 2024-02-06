const descendingOrder = (n) => Number(String(n).split('').map(a=>Number(a)).sort((a,b)=>b-a).join(''))

console.log(descendingOrder(123456789))