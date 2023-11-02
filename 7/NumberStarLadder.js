const pattern = (n) => {

    let answer = ""

    for(let i = 0 ; i<n;i++){
        answer+= `1${"*".repeat(i)}${i===0?"":i+1}${i===n-1?"":"\n"}`
    }


    return answer
}


console.log(pattern(3))
console.log(pattern(10))