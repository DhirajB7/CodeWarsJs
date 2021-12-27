const getCount = (data) => data.replace(/[^aeiou]/g,"").length

console.log(getCount("abracadabra"))