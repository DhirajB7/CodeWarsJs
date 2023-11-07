const comp = (array1=[], array2=[])=>{

    if(!array1 || !array2 || array1.length!==array2.length){
        return false
    }
   
    let flag = true

    const mapA = new Map()

    for(const a of array1){
        if(mapA.has(a*a)){
            mapA.set(a*a,mapA.get(a*a)+1)
        }else{
            mapA.set(a*a,1)
        }
    }

    const mapB = new Map()

    for(const b of array2){
        if(mapB.has(b)){
            mapB.set(b,mapB.get(b)+1)
        }else{
            mapB.set(b,1)
        }
    }

    for (const c of mapA.keys()) {
        
        if(mapA.get(c)===mapB.get(c)){
            flag = flag && true
        }else{
            flag = flag && false
            break
        }
    }

    return flag 

  }

  let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
  console.log(comp(a1,a2))