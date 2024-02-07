const multiplicationTable = (n) => {
    const answer = []
    for(let i = 1 ; i <= n; i++){
        answer.push([...Array(n)].map((_,a)=>((a+1)*i)))
    }
    return answer
}

console.log(multiplicationTable(3))
