function diamond(n) {
  if (n > 0 && n % 2 === 1) {
    let answer = "";
    for (let i = 1; i < n; i = i + 2) {
      answer += `${" ".repeat((n-i)/2)}${"*".repeat(i)}\n`;
    }

    for (let i = n; i >= 1; i = i - 2) {
        answer += `${" ".repeat((n-i)/2)}${"*".repeat(i)}\n`;
    }
    return answer;
  } else {
    return null;
  }
}

console.log(diamond(9));
