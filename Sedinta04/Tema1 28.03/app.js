var person = {
  firstName: 'Dani',
  lastName: 'Mincu',
  birthYear: 2002,
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2,
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};

var i = 0;
for(i = 0; i < person.pets.length; i++){
  console.log('Suma anilor animalelor este de ' + (person.pets[i].age + person.pets[i + 1].age + person.pets[i + 2].age + person.pets[i + 3].age) + ' ani.');
if(i = person.pets[i + 3].name ) break
}


var i = 0;
var ownerAge = 2019 - person.birthYear
for(i = 0; i < person.pets.length; i++){
  console.log('Intre ' + person.firstName + ' si ' + person.pets[i].name + ' este o diferenta de ' + ( ownerAge - person.pets[i].age) + ' ani ');
}
