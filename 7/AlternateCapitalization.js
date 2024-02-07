const capitalize = (s="")=> [s.split("").map((a,i)=>i%2===1?a.toLowerCase():a.toUpperCase()).join(""),s.split("").map((a,i)=>i%2===0?a.toLowerCase():a.toUpperCase()).join("")]

console.log(capitalize("abcde"))