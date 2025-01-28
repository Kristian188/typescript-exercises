import { Vehicle } from './vehicle';

class Car implements Vehicle {
    public color: string;
    constructor(color: string) {
        this.color = color;
    }
    public move(): string {
        return 'vroom';
        
    }
}

const car = new Car('red');
console.log(`The ${car.color} car goes ${car.move()}`);

