console.log('Displays Country Code from countries')

let countries = [
    {
    name: 'Philippines',
    },
    {
    name: 'Spain',
    }
];

countries.forEach(countryCode => {
    return console.log(countryCode.country_code)
});

const findCountryCode = (code) => {
    const countyCodePH = countries.filter(country => country.country_code === code)
    console.log(countyCodePH);
}

findCountryCode('+63');