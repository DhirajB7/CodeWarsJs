const arrayDiff = (a, b) => a.filter((c) => !b.includes(c));



console.log(arrayDiff([1,2,2,2,3],[2]))