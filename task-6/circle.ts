import {Shape} from './shape';

export class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public get Radius(): number {
        return this.radius;
    }

    public area(): number {
        return Math.PI * this.radius * this.radius;
    }
    
    public displayArea(): string {
        return `Circle ${super.displayArea()}`;
    }


}