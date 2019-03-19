var person = {
  name: 'Dani',
  surname: 'Mincu',
  age: 17,
  petOwner: false,
  skills: ['html', 'JS'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age: 31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }]
};

console.log(person.friends);

console.log('Ma numesc ' + person.name + ' si stiu html si css.');
console.log('Sunt ' + person.name + ' si acum invat JS');
console.log('Am 3 prieteni: ' + ' person.friends.name')
