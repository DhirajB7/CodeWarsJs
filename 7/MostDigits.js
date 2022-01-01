const findLongest = (arr) =>{
    const lenArr = arr.map(a=> String(Math.abs(a)).length)
    const max = Math.max(...lenArr)
    return arr[lenArr.indexOf(max)]
}

console.log(findLongest([-10,1,0,1,10]))