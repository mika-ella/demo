
const countryList = ['philippines', 'china', 'australia', 'russia', 'japan'];
let foundCountry = false;

for (let i = 0; i < countryList.length; i++) {
    if (countryList[i].includes('p')) {
        console.log(`${countryList[i]}`);
        foundCountry = true;
        break;
    }
}

if (!foundCountry) {
    console.log("False");
}else{
    console.log("True");
}
