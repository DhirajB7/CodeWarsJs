const findRoutes = (routes = []) => {
  let mp = new Map();
  routes.forEach((a) => mp.set(a[0], a[1]));
  for (let i = 0; i < routes.length; i++) {
    let start = routes[i][0];
    let answer = routes[i][0] + ", ";
    let number = routes.length;

    while (number > 0) {
      if (mp.has(start)) {
        answer += mp.get(start) + (number === 1 ? "" : ", ");
        start = mp.get(start);
        number--;
      } else {
        break;
      }
    }

    if (number > 0) {
      continue;
    } else {
      return answer;
    }
  }
};

console.log(
  findRoutes([
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["UAE", "JPN"],
  ])
);

console.log(
  findRoutes([
    ["MNL", "TAG"],
    ["CEB", "TAC"],
    ["TAG", "CEB"],
    ["TAC", "BOR"],
  ])
);

console.log(
  findRoutes([
    ["UK", "GER"],
    ["GER", "BEL"],
    ["BEL", "CAN"],
  ])
);

console.log(
  findRoutes([
    ["Chicago", "Winnipeg"],
    ["Halifax", "Montreal"],
    ["Montreal", "Toronto"],
    ["Toronto", "Chicago"],
    ["Winnipeg", "Seattle"],
  ])
);
/*
console.log(
  findRoutes([
    ["Agra", "Tokyo"],
    ["Seoul", "Ljubljana"],
    ["Ljubljana", "Wroclaw"],
    ["Wroclaw", "Nashville"],
    ["Nashville", "Amsterdam"],
    ["Amsterdam", "Hull"],
    ["Hull", "Vancouver"],
    ["Vancouver", "Agra"],
    ["Tokyo", "Manila"],
  ])
);

console.log(
  findRoutes([
    ["Calgary", "Fargo"],
    ["Spokane", "Toronto"],
    ["Winnipeg", "Montreal"],
    ["Toronto", "Calgary"],
    ["Fargo", "Winnipeg"],
  ])
);

console.log(
  findRoutes([
    ["BRA", "KSA"],
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["KSA", "UAE"],
    ["UAE", "JPN"],
  ])
);

console.log(findRoutes([["HQ", "SH"]]));

console.log(
  findRoutes([
    ["San Policarpo", "Oras"],
    ["Balangiga", "Lawaan"],
    ["Borongan", "Maydolong"],
    ["Jipapad", "Maslog"],
    ["Balangkayan", "Llorente"],
    ["Mercedes", "Guiuan"],
    ["Taft", "Sulat"],
    ["Sulat", "San Julian"],
    ["Arteche", "San Policarpo"],
    ["Oras", "Dolores"],
    ["Dolores", "Can-avid"],
    ["Can-avid", "Taft"],
    ["San Julian", "Borongan"],
    ["Maydolong", "Balangkayan"],
    ["Llorente", "Hernani"],
    ["Hernani", "General MacArthur"],
    ["General MacArthur", "Giporlos"],
    ["Giporlos", "Balangiga"],
    ["Lawaan", "Salcedo"],
    ["Salcedo", "Mercedes"],
    ["Maslog", "Arteche"],
  ])
);
*/
