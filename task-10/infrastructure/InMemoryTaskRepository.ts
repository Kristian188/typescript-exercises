import { Task } from "../domain/Task"; 
import { ITaskRepository } from "../domain/ITaskRepository";
export class InMemoryTaskRepository implements ITaskRepository {
    private tasks: Task[] = [];

    add(task: Task): void {
        this.tasks.push(task);
    }

    update(task: Task): void {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
            this.tasks[index] = task;
        }
    }

    delete(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    getById(id: string): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    getAll(): Task[] {
        return this.tasks;
    }
}
