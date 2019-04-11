var person = {
  name: 'Dani',
  surname: 'Mincu',
  age: 17,
  petOwner:false,
  skills: {
    html: true,
    css: false,
    javaScript: true
  },
  friends:{
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 19
    },
    steven: {
    name: 'Steven',
    surname: 'Stevenson',
    age: 23
  },
  carol: {
    name: 'Carol',
    surname:'Carolson',
    age:19
  }
  }
};
console.log(person.friends.larry);
console.log(person.skills.javaScript);
console.log(person.friends.larry.name + ' are ' + person.friends.carol.age + ' ani');
console.log('Larry a fost nascut in anul ' + (2019 - person.friends.larry.age));
console.log(person.friends.larry.name + ' este cu ' + (person.friends.steven.age - person.friends.carol.age) + ' ani mai mic ' + ' decat ' + person.friends.carol.name );
console.log('Prietenul meu ' + person.friends.steven.name + person.friends.steven.surname + ' si are ' + person.friends.steven.age );
console.log('Prietenii mei sunt ' + person.friends.larry.name + person.friends.steven.name +person.friends.carol.name);
