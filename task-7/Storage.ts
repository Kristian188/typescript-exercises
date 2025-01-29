import { IAdvancedStorage } from "./IAdvancedStorage";

class Storage<T> implements IAdvancedStorage<T> {
    private items: T[] = [];

    addItem(item: T) : void {
        this.items.push(item);

    }

    getAllItems() : T[] {
        return this.items;
    }

    removeItem(item: T) : void {
        this.items.filter(i => i !== item)
    }


}

const num = new Storage<number>;

num.addItem(2)

console.log(num.getAllItems)