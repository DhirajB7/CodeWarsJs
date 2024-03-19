const sortByLength = (array = []) => array.sort((a, b) => a.length - b.length);

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
