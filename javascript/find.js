const countryList = ['philippines', 'china', 'australia', 'russia', 'japan' ];

const longestCountryName = countryList.find((countryName) => {
    return countryName.length === Math.max(...countryList.map(country => country.length));
});

if (longestCountryName) {
    console.log(`The country with longest name: ${longestCountryName}`);
  } else {
    console.log('The element was not found.');
  }