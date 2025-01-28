export abstract class Shape {
    abstract area(): number;

    printArea(): string {
        return `Area: ${this.area().toFixed(2)}`;
    }

}