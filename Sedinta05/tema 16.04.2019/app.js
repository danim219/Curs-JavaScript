function calculateArea(L, l, h) {
  if(arguments.length === 1){
    return Math.pow(L, 2)
  } else if (arguments.length === 2) {
    return L * l;
  } else {
    return L * l * h;
  }
}

console.log('Suprafata unui patrat este de: ' + calculateArea(2));
console.log('Suprafata unui dreptunghi etse de: ' +  calculateArea(2, 3));
console.log('Volumul unui paralelipiped este de: ' + calculateArea(2, 3, 4));
