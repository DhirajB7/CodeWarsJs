const isSquare = (n) => n >=0 ? !String(Math.sqrt(n)).includes(".") : false

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(2))
console.log(isSquare(9))
console.log(isSquare(16))
console.log(isSquare(25))
console.log(isSquare(26))