const sumOfDifferences = (arr=[]) => {
    if(arr && arr.length>1){
     arr.sort((a,b)=>b-a)
     let total = 0;
     for(let i = 0 ; i < arr.length -1 ;i++){
        total=total + arr[i]-arr[i+1]
     }
     return total;
    }else{
        return 0;
    }
}

console.log(sumOfDifferences([2,1,10]))