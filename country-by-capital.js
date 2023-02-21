let countries = [
    {name: 'Philippines', capital: 'Manila'},
    {name: 'Denmark', capital: 'Copenhagen'}
];
let getCountryByCapital = (countryCapital) => {
    let selectedCountry = countries.find((country) => country.capital === countryCapital);

    return selectedCountry;
}
console.log(getCountryByCapital('Manila'));