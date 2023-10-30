const m1 = new Map();
m1.set('a',1)
m1.set('b',2)
m1.set('c',3)


const m2 = new Map();
m2.set('a',1)
m2.set('b',2)
m2.set('c',3)


console.log("m1",m1,[...m1.entries()])
console.log("m2",m2,[...m2.entries()])
console.log([...m1.entries()]==[...m2.entries()])
