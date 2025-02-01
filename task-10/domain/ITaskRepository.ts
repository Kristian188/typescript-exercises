import { Task } from "./Task"

export interface ITaskRepository {
    add(task: Task) : void;
    update(task: Task) : void;
    delete(id: string) : void;
    getById(id: string): Task | undefined;
    getAll(): Task[];


}