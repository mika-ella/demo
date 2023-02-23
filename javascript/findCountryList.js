const countryList = ['philippines', 'china', 'australia', 'russia', 'japan'];

const longestCountry = countryList.find(country =>
  country.length === Math.max(...countryList.map(country => country.length))
);

console.log(longestCountry);