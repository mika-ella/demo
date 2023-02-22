const countryList = ['philippines', 'china', 'australia', 'russia', 'japan' ];
const countryListUpperCase = ['PHILIPPINES', 'CHINA', 'AUSTRALIA', 'RUSSIA', 'JAPAN' ];

function Result(array) {
    const uppercasedList = array.map(array => array.toUpperCase()); 
    return uppercasedList;
}
console.log(Result(countryList));