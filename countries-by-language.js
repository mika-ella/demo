let country = ["Philippines", "Korea", "Japan", "USA"];
let language = ["Filipino", "Hangul", "Nihongo", "English"];
let pairArray = [];

for (let i = 0; i < country.length; i++) {
  pairArray.push([country[i], language[i]]);
}

console.log(pairArray);