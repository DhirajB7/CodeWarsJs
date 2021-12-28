const XO = (str) => {
    let str1 = str
    return str.replace(/[^o]/ig,"").length===str1.replace(/[^x]/ig,"").length
}

console.log(XO('xo'))
console.log(XO("xxOo"))
console.log(XO("xxxm"))
console.log(XO("Oo"))
console.log(XO("ooom"))