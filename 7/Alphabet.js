const alphabet = (ns=[]) => {
    ns = ns.sort((a,b)=>a-b)
    const a = ns.shift()
    const b = ns.shift()
    ns.splice(ns.indexOf(a*b),1)
    const c = ns.shift()
    ns.splice(ns.indexOf(b*c),1)
    return ns.shift()
}



console.log(alphabet([2,3,4,1,12,6,2,4]))
console.log(alphabet([2,6,7,3,14,35,15,5]))
console.log( alphabet([20,10,6,5,4,3,2,12]));
console.log( alphabet([2,6,18,3,6,7,42,14]));
console.log( alphabet([7,96,8,240,12,140,20,56]));
console.log( alphabet([20,30,6,7,4,42,28,5]));
