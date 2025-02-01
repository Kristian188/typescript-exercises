import { TaskService } from "../domain/TaskService";
import { InMemoryTaskRepository } from "../infrastructure/InMemoryTaskRepository";

const taskRepository = new InMemoryTaskRepository();
export const taskService = new TaskService(taskRepository);

