const encryptThis = (text="") => {
    const arr = text.split(" ")
    const answer=[]
    for (let i = 0; i < arr.length ; i++) {
        const word = arr[i].split("")
        const firstChar = word.shift().charCodeAt()
        const second = word.shift()
        const last = word.pop()
        console.log(word)
        answer.push([firstChar,last,...word,second].join(''))
    }
    return answer.join(" ")
}

// console.log(encryptThis('A'))
console.log(encryptThis('A wise old owl lived in an oak'))