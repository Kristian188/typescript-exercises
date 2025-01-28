export abstract class Shape {
    abstract area(): number;

    printArea(): void {
        console.log(`Area: ${this.area()}`);
    }

}