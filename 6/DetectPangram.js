const isPangram = (str) => {

  const mp = new Map();

  for (let i = 97; i <= 122; i++) {
    mp.set(String.fromCharCode(i), 0);
  }

  for (const data of str.toLowerCase().replace(/[^a-z]/g,"")) {
    mp.set(data, mp.get(data) + 1);
  }

  return [...mp.values()].every((a) => a > 0);
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
