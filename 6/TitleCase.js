const titleCase = (title = "", minorWords = "") => {
  if (title) {
    const [firstWord, ...restArray] = title.split(" ");
    const minorWordsArray = minorWords.split(" ").map((a) => a.toLowerCase());
    return [
      titleCaseWord(firstWord),
      ...restArray.map((a) => {
        if (minorWordsArray.includes(a.toLowerCase())) {
          return a.toLowerCase();
        } else {
          return titleCaseWord(a);
        }
      }),
    ].join(" ");
  } else {
    return "";
  }
};

const titleCaseWord = (word = "") => {
  return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
};

console.log(titleCase("a clash of KINGS", "a an the of")); // should return: 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // should return: 'The Wind in the Willows'
console.log(titleCase("the quick brown fox")); // should return: 'The Quick Brown Fox'
