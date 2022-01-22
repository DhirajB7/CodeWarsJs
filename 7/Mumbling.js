const accum = (s) =>[...s].map((v,i) => v.toUpperCase()+v.repeat(i).toLowerCase()).join("-")

console.log(accum("ZpglnRxqenU"));