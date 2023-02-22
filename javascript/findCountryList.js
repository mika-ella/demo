const countryList = ['philippines', 'china', 'australia', 'russia', 'japan'];

const longestCountry = countryList.find(word =>
  word.length === Math.max(...countryList.map(country => country.length))
);

console.log(longestCountry);