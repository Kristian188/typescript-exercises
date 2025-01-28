export abstract class Building {
    private location: string;
    
    public constructor(location: string) {
        this.location = location;
    }
    
    public get Location(): string {
        return this.location;
    }
    
    abstract peopleCount(): number; 

}