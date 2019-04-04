var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: ['html', 'javascript', 'css', 'c++', 'node', 'jquery'],
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

var i = 0;
  skillsLength = person.skills.length - 1;
for(; i <= skillsLength; i += 1){
    console.log(person.skills[i]);
}

for( i = 0; i <= skillsLength; i += 1){
      if( person.skills[i].startsWith('j') === true){
        continue;
      }
      console.log(person.skills[i]);
  }

console.log(' ');

var friendsName = 'Prietenii mei se numesc ';

for(i = 0; i < person.friends.length; i += 1){
    friendsName += ' ' + person.friends[i].name + ' ' + person.friends[i].surname;
    if(i === person.friends.length - 1 ){
       friendsName += '.';
    } else {
        friendsName += ',';
    }
  }
for(i = 0; i < person.friends.length; i += 1){
var  friendsAge = person.friends[i].age;
var  friendsBirth = 2019 - person.friends[i].age;
  console.log('Intre ' + person.name + ' si ' + person.friends[i].name + ' este o diferenta de ' + ( person.age -  person.friends[i].age) + ' ani ');
}

for(i = person.skills.length - 1; i >= 0; i -= 1){
var personSkills = person.skills[i];

  console.log(' Skills scrise in ordine inversa sunt: ' + person.skills[i]);
}

for(i = 0; i < person.friends.length; i += 1){
  var  friendsName = person.friends[i].name;
  var  friendsSurname = person.friends[i].surname;

  console.log('Prietenii mei se numesc: ' + person.friends[0].name + ',' + person.friends[1].name + ',' + person.friends[2].name);
}

for(i = 0; i < person.friends.length; i += 1){
  var  friendsAge = person.friends[i].age;
  console.log('Suma varstelor prietenilor mei este de: ' + (person.friends[0].age + person.friends[1].age + person.friends[2].age));
}
