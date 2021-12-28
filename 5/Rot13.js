const rot13 = (data) => {
  let answer = "";
  for (const d of data) {
    let caps = false;
    if (/[A-Za-z]/.test(d)) {
      if (/[A-Z]/.test(d)) {
        caps = true;
      }
      let value = d.toLowerCase().charCodeAt() + 13;
      value = value > 122 ? ((value-97) % 26) + 97 : value;
      answer += caps
        ? String.fromCharCode(value).toUpperCase()
        : String.fromCharCode(value);
    } else {
      answer += d;
    }
  }
  return answer;
};

console.log(rot13("test"))
console.log(rot13("Test"))