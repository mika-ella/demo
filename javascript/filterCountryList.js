// filter (red) - filter out country in countryList that includes 'i' and 'a' characters 
// and with more than 5 characters using filter method. Result (array).

const countryList = ['philippines', 'china', 'australia', 'russia', 'japan' ];

const filteredList = countryList.filter(country => country.includes('i') && country.includes('a') && country.length > 5);

console.log(filteredList);