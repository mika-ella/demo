const capitals= {
    "USA" : "Washington D.C", 
    "Philippines" : "Manila",
    "Japan" : "Tokyo", 
    
};
function getCapital (country) {
    return capitals[country];
}
const country = "USA";
const capital = getCapital (country);
console.log (`The capital of ${country} is ${capital}`);