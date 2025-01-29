import { IAdvancedStorage } from "./IAdvancedStorage";

export class Storage<T> implements IAdvancedStorage<T> {
    private items: T[] = [];

    addItem(item: T) : void {
        this.items.push(item);

    }

    getAllItems() : T[] {
        return this.items;
    }

    removeItem(item: T) : void {
       this.items = this.items.filter(i => i !== item)
    }


}