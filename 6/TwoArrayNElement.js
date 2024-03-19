function twoArraysNthElement(array1 = [], array2 = [], n) {
  let index1 = 0;
  let index2 = 0;
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    let value1 = index1 < array1.length ? array1[index1] : Infinity;
    let value2 = index2 < array2.length ? array2[index2] : Infinity;

    if (value1 < value2) {
      answer = value1;
      index1++;
    } else {
      answer = value2;
      index2++;
    }
  }

  return answer;
}

console.log(twoArraysNthElement([1, 3, 4], [2, 6, 8], 5));
