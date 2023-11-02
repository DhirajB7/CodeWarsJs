const isPangram = (string="")=>{
    const newString = string.toLowerCase().replace(/[^A-Za-z]/g,"")
    const setOfAlpha = new Set(newString.split(''))
    return setOfAlpha.size===26
}