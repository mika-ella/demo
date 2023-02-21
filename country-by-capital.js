const regionCapital = new Intl.DisplayNames(
    ['en'], {type: 'region'}
  );
  
  console.log(regionCapital.of('Manila is Capital of Philippines')); 
  console.log(regionCapital.of('Bangkok is Capital of Thailand')); 
  console.log(regionCapital.of('Bogota is Capital of Colombia')); 
  console.log(regionCapital.of('Seoul is Capital of Korea')); 
  