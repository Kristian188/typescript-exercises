import { Task } from "./Task"
import { ITaskRepository } from "./ITaskRepository"

export class TaskService {
    private taskRepository: ITaskRepository;
    constructor(taskRepository: ITaskRepository) {
        this.taskRepository = taskRepository;
    }

    public get TaskRepository(): ITaskRepository {
        return this.taskRepository
    }
    public set TaskRepository(value: ITaskRepository) {
        this.taskRepository = value;
    }
    
    createTask(title: string, description: string, dueDate: Date) : Task {
        const task = new Task(
            Math.random().toString(36).substring(7),
            title,
            description,
            dueDate
        );

        this.taskRepository.add(task)
        return task;
    }
    markTaskAsCompleted(id: string): Task | undefined {
        const task = this.taskRepository.getById(id);
        if (task) {
            task.isCompleted = true;
            this.taskRepository.update(task);
            return task;
        }
        return undefined;
    }

}