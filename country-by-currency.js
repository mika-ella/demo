const countries = [
    { name: "United States", currency: "US dollar", code: "USD" },
    { name: "United Kingdom", currency: "British pound", code: "GBP" },
    { name: "Canada", currency: "Canadian dollar", code: "CAD" },
    { name: "Australia", currency: "Australian dollar", code: "AUD" },
    { name: "Germany", currency: "Euro", code: "EUR" },
    { name: "Japan", currency: "Japanese yen", code: "JPY" }
  ];
  
  for (let i = 0; i < countries.length; i++) {
    console.log(`${countries[i].name} :: ${countries[i].currency} (${countries[i].code}).`);
  }
  