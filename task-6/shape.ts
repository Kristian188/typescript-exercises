export abstract class Shape {
    abstract area(): number;

    public displayArea(): string {
        return `Area: ${this.area().toFixed(2)}`;
    }

}