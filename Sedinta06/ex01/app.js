var car = {
    make: 'Alfa-Romeo',
    color: 'red',
    wheels: 4,
    speed: 120,
    topSpeed: 280,
    topReverseSpeed: -70,
    accelerate: function() {
        this.speed++;   
    },
    decelerate: function() {
        this.speed--;
    },
};

console.log('Masina era marca ' +  car.make + ' si se deplaseaza cu ' + car.speed + ' km/h.')
console.log('')
spd = car.speed - 5;
console.log('Viteza noua este ' + spd + ' km/h.')
console.log('')
