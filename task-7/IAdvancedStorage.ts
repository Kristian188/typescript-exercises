import { IStorage } from "./IStorage";

export interface IAdvancedStorage<T> extends IStorage<T> {
    removeItem(item: T): void;
}