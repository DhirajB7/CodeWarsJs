const number = (data) =>{
    let answer = 0;
    data.map(a=> {
        answer+=a[0]
        answer-=a[1]
    })
    return answer
}

console.log(number())