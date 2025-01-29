export interface IStorage<T> {
    addItem(item: T) : void;
    getAllItems() : T[];


}