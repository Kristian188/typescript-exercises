import { Animal } from './animal';
import { Dog } from './dog';

const animal = new Animal("J", 7);
console.log(animal.getInfo());
console.log(animal.makeSound());

const dog = new Dog("Rex", 5, "German Shepherd");
console.log(dog.getInfo());
console.log(dog.makeSound());