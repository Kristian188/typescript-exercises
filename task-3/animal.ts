export class Animal {
    private name: string;
    private age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public get Age () : number {
        return this.age;
    }

    public set Age (age: number) {
        if(age < 0) {
            throw new Error("Age can't be negative");
        }
        this.age = age;
    }

    public get Name () : string {
        return this.name;
    }

    public set Name (name: string) {
        if(name === "") {
            throw new Error("Name can't be empty");
        }
        this.name = name;
    }

    public makeSound() : string {
        return "This animal makes a sound";
    }

    public getInfo() : string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}