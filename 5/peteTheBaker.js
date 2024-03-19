const cakes = (recipe = {}, available = {}) => {
  const recipeMap = new Map();

  for (const key of Object.keys(recipe)) {
    recipeMap.set(key, recipe[key]);
  }

  const availableMap = new Map();

  for (const key of Object.keys(available)) {
    availableMap.set(key, available[key]);
  }

  const recipis = [...recipeMap.keys()];

  const avliablityCheck = recipis.every((a) => availableMap.has(a));

  if (avliablityCheck) {
    return Math.floor(
      Math.min(...recipis.map((a) => availableMap.get(a) / recipeMap.get(a)))
    );
  } else {
    return 0;
  }
};

console.log(
  "problem 1 : ",
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  "problem 2 : ",
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
