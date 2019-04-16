var car = {
    make: 'Alfa-Romeo',
    color: 'red',
    wheels: 4,
    speed: 240,
    accelerate: function() {
        this.speed++;   
    },
    decelerate: function() {
        this.speed--;
    },
};

console.log('Masina era marca ' +  car.make + ' si se deplaseaza cu ' +  car.speed + ' km/h')
console.log('')
car.speed = car.speed - 5;
console.log('Viteza noua este ' + car.speed + ' km/h')
console.log('')
