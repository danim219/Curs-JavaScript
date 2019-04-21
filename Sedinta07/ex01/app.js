class Car {
    constructor(
        make,
        color,
        wheels,
        speed,
        topSpeed = 160,
        topReverseSpeed = -50,
    ) {
        this.make = make;
        this.color = color;
        this.wheels = wheels;
        this.speed = speed;
        this.topSpeed = topSpeed;
        this.topReverseSpeed = topReverseSpeed;
    }

    accelerate() {
        this.speed++;
    }

    decelerate() {
        this.speed--;
    }
    stop() {
        this.speed = 0;
        console.lof(this.speed);
    }
    setSpeed() {
        if ( this.speed > this.topSpeed){
        this.speed = this.topSpeed;
    },
        if ( this.speed < this.topReverseSpeed){
        this.speed = this.topReverseSpeed;
        }
}

var audi = new Car('Audi', 'black', 4, 50);

var opel = new Car2('Opel', 'red', 4, 3);


