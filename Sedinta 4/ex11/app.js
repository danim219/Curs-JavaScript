var person = {
  name: 'Dani',
  surname: 'Mincu',
  age: 30,
  perOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    },
  }
};

console.log(Object.keys(person));
console.log(Object.keys(person.skills));

console.log('                      ');

var prop = 'Stiu ';
Object.keys(person.skills).forEach(function (skill){
    prop += skill + ' ';
});
console.log (prop);

console.log('                      ');

var myF = 'Prietenii mei sunt: '
Object.keys(person.friends).forEach(function (name, index, array){
  myF += person.friends[name].name + ' ';
  if (array.length - 2 === index){
    myF += 'si ';
  }
  });
  console.log (myF);

  console.log('                      ');
var myFr =''
Object.keys(person.friends).forEach(function (friend){
  if(person.age > person.friends[friend].age){
    console.log ('Dani este mai mare decat ' + person.friends[friend].name)
  }
  else if (person.age < person.friends[friend].age){
    console.log ('Dani este mai mic decat ' + person.friends[friend].name)
  }
  else if (person.age === person.friends[friend].age){
    console.log ('Dani are aceeasi varsta ca ' + person.friends[friend].name)
  }
   //console.log(person.age, person.friends[friend].age);

});
  console.log (myFr);
