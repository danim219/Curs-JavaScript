var person = {
  getName: function () {
    return 'Dani Mincu';
  },
    getAge: function () {
    return 17;
  }
};

function accessor(methodSuffix) {
    var methodName = 'get' + methodSuffix;
    return person[methodName]();
}
console.log(accessor('Name'));

console.log('---------------')

console.log(accessor('Age'));

console.log('---------------')
var tYear = new Date().getFullYear();
console.log(tYear - accessor('Age'));

console.log('---------------')

var tYear = new Date().getFullYear();
console.log('Ma numesc ' + (accessor('Name')) + ' si m am nascut in ' + (tYear - accessor('Age')) + '.' );
