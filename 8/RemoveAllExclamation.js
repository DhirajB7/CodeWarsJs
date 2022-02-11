const remove = (data) => data.replace(/[!]+/g,'')+"!"

console.log(remove("Hi!"))
console.log(remove("Hi!!!"))
console.log(remove("!Hi"))
console.log(remove("!Hi!"))
console.log(remove("Hi! Hi!"))
console.log(remove("Hi"))