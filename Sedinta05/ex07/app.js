var dateBuilder = [
  function (){
    return '2019';
  },
  function (){
    return 'Aprilie';
  },
  function (){
    return '11';
  }
];
console.log(dateBuilder);

dateBuilder[3] = function () {
  return 'Joi';
};

console.log(dateBuilder);

console.log('Anul curent este: ' + dateBuilder[0]());
console.log('--------------------------')
console.log('Suntem in luna: ' + dateBuilder[1]() + ', anul: ' + dateBuilder[0]());
console.log('--------------------------')
console.log('Astazi este ' + dateBuilder[2]())
