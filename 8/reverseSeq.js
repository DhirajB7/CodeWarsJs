const reverseSeq = (n) => [...Array(n).keys()].map((a) => a + 1).reverse();

console.log(reverseSeq(5));
