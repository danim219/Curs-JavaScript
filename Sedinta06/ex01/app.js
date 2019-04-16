var car = {
        make: 'Alfa-Romeo Giulia',
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
    stop: function() {
        speed = 0;
    },
    setSpeed: function (s) {
        if ( s > car.topSpeed){
        car.speed = car.topSpeed;
    }
        if ( s < car.topReverseSpeed){
        car.speed = car.topReverseSpeed;
        }
    }
};

console.log('Masina era marca ' +  car.make + ' si se deplaseaza cu ' + car.speed + ' km/h.');
console.log('');

var i = 0;
for(;i < 5 ; i++ ){ 
    car.decelerate();
} 
console.log('Viteza noua este ' + car.speed + ' km/h.');
console.log('');

