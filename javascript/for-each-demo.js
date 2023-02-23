const countries = ['PHILIPPINES', 'CHINA', 'AUSTRALIA', 'RUSSIA', 'JAPAN' ];

/*countries.forEach(function (country, index, array){
    array[index] = country.toLowerCase();

});
console.log(countries);*/

const countriesLower =[];

countries.forEach( country => {
    countriesLower.push(country.toLowerCase())
})
console.log(countriesLower);