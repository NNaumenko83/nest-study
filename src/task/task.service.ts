import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTaskDTO } from './dto/update-task.dto';


@Injectable()
export class TaskService {
    private tasks = [
        {
            id: 1,
            title: 'Task 1',
            description: 'Description for Task 1',
            completed: false,
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'Description for Task 2',
            completed: false,
        },
    ];

    getAllTasks(): Array<{ id: number; title: string; description: string; completed: boolean }> {
        return this.tasks;
    }

    getTaskById(id: number): { id: number; title: string; description: string; completed: boolean } | undefined {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        return task;
    }

    createTask(title: string, description: string): { id: number; title: string; description: string; completed: boolean } {
        const newTask = {
            id: this.tasks.length + 1,
            title,
            description,
            completed: false,
        };
        this.tasks.push(newTask);
        return newTask;
    }

    updateTask(id: number, dto: UpdateTaskDTO) {
        const { completed, title, description } = dto;
        const task = this.getTaskById(id);
        if (task) {
            task.title = title;
            task.description = description;
            task.completed = completed;
        }
        return task;
    }

}
