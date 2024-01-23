const maxDiff = (list = []) => Math.max(...list) - Math.min(...list) || 0;

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]));
