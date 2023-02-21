const regionNames = new Intl.DisplayNames(
    ['en'], {type: 'region'}
  );
  
  console.log(regionNames.of('US')); // 👉️ "United States"
  console.log(regionNames.of('GB')); // 👉️ "United kingdom"
  console.log(regionNames.of('DE')); // 👉️ "Germany"
  console.log(regionNames.of('AU')); // 👉️ "Australia"
  console.log(regionNames.of('PH')); // 👉️ "Philippines"
  console.log(regionNames.of('BD')); // 👉️ "Bangladesh"
  