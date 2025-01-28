import { Shape } from './shape';

export class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    public get Width(): number {
        return this.width;
    }
    public get Height(): number {
        return this.height;
    }

    public area(): number {
        return this.width * this.height;
    }

    public displayArea(): string {
        return `Rectangle ${super.displayArea()}`;
    }


    

}