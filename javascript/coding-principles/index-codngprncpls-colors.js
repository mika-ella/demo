
// 5. Pat
// With applying DRY PRINCIPLE
let favoriteColors = [{
    name: 'Mika',
    favoriteColor: 'black'
  }, {
    name: 'Carlo',
    favoriteColor: 'maroon'
  }, {
    name: 'Marvin',
    favoriteColor: 'white'
  }, {
    name: 'Marvin',
    favoriteColor: 'blue'
  }];

  const result = favoriteColors.map(objects => 
    {
        console.log(`${objects.name} favorite color is ${objects.favoriteColor}.`);
    }
    );
