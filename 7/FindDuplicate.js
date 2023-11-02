const findDup = (arr=[]) => {

    const setData = new Set()

    let answer;

    for (const a of arr) {
        if(setData.has(a)){
            answer = a;
            break
        }else{
            setData.add(a)
        }
    }
    return answer
}

console.log(findDup([1,3,2,5,4,5,7,6]))