const highAndLow = (data) => {
    const arr = data.split(" ")
    arr.sort((a,b) => a-b)
    return `${arr[arr.length - 1]} ${arr[0]}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))