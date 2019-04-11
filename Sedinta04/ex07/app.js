var friends = [{
    name:'Dani',
    surname:'Mincu',
    friends: {}
}, {
    name:'Larry',
    surname:'Larryson',
    friends:{}
}, {
    name:'Steven',
    surname:'Stevenson',
    friends:{}
}, {
    name:'Carol',
    surname:'Carolson',
    friends:{}
}, {
    name:'Andra',
    surname:'Andrason',
    friends:{}
}];
var i = 0;
for(i = 0; i < friends.length; i++){
  console.log(friends[i].surname);
}
console.log('***********')

for(i = 0; i< friends.length; i++){
  console.log(friends[i].surname + ' ' +  friends[i].name);
  if (friends[i].name === 'Steven')  {
    break;
  }}
console.log('***********')

for(i = 0; i< friends.length; i++){
  if (friends[i].name.length + friends[i].surname.length >= 13)
    console.log(friends[i].surname + ' ' +  friends[i].name);


}
