import { Building } from "./building";

class Cinema extends Building {

    private people: number;

    public constructor(location: string, people: number) {
        super(location);
        this.people = people;
    }

    public get People(): number {
        return this.people;
    }


    public peopleCount(): number {
        return this.people;

    }
}

const cinema = new Cinema('Main street 18', 100);
console.log(`The cinema at "${cinema.Location}" has ${cinema.People} people in it`);