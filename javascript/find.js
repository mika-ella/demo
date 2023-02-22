const countryList = ['philippines', 'china', 'australia', 'russia', 'japan' ];

const longestCountryName = countryList.find((element) => {
    return element.length === Math.max(...countryList.map(el => el.length));
});

if (longestCountryName) {
    console.log(`The country with longest name: ${longestCountryName}`);
  } else {
    console.log('The element was not found.');
  }