const uniqueInOrder = (iterable) => {
  if (!Array.isArray(iterable)) {
    iterable = iterable.split("");
  }

  if (iterable.length === 0) {
    return [];
  } else {
    const answer = [iterable[0]];

    let currentIndex = 0;

    for (let i = 1; i < iterable.length; i++) {
      if (iterable[i] !== answer[currentIndex]) {
        answer.push(iterable[i]);
        currentIndex++;
      }
    }

    return answer;
  }
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
