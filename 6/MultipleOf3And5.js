const solution = (number) => number <= 0 ? 0 : [...new Set([...Array(number)].map((_,i)=>i).filter(i => i%3===0 || i%5===0))].reduce((a,b)=>a+b)

console.log(solution(10))