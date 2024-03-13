const square = (n) => {
    if(localStorage.getItem(n)){
        console.log("found in array")
        return localStorage.getItem(n)
    }
    let result = 0;
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j< n ; j++){
            result++;
        }
    }
    localStorage.setItem(n,result)
    console.log("set in localStorage ",n," ",result )
    return result;
}

console.log(square(30000))