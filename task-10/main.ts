import { taskService } from "./composition-root"; 

const newTask = taskService.createTask("do homework", "practice typescript", new Date());

console.log("Task created:", newTask);

const updatedTask = taskService.markTaskAsCompleted(newTask.id);
if (updatedTask) {
    console.log("Task updated as Completed:", updatedTask);
} else {
    console.log("Task not found");
}
