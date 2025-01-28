import { Animal } from './animal';

export class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    
    public get Breed(): string{
        return this.breed;
    }

    makeSound(): string{
        
        return super.makeSound() + " - " + "Bark!";
    }


    getInfo(): string{
        return `${super.getInfo()}, Breed: ${this.breed}`;
    }

}
