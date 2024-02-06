const expandedForm = (n) => {
   const nString = String(n)
    const arr = []
    for(let i = nString.length - 1; i>=0;i--){
        arr.unshift(Number(nString[i]+"0".repeat(nString.length - 1 - i)))
    }
    return arr.filter(a=>a>0).join(' + ')
}

console.log(expandedForm(10101))