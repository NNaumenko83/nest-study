import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskDTO } from './dto/task.dto';
import { CreateTaskDTO } from './dto/create-task.dto';


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

    getTaskById(id: number): TaskDTO {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        return task;
    }

    createTask(dto: CreateTaskDTO): TaskDTO {
        const { title, description, priority, tags } = dto;
        const newTask = {
            id: this.tasks.length + 1,
            title,
            description,
            priority,
            tags,
            completed: false,
        };
        this.tasks.push(newTask);
        return newTask;
    }

    updateTask(id: number, dto: UpdateTaskDTO) {
        const { completed, title, description, } = dto;
        const task = this.getTaskById(id);

        task.title = title;
        task.description = description;
        task.completed = completed;

        return task;
    }

    updatePatchTask(id: number, dto: Partial<UpdateTaskDTO>) {
        const task = this.getTaskById(id);

        Object.assign(task, dto);

        return task;
    }

    deleteTask(id: number) {
        const task = this.getTaskById(id);
        this.tasks = this.tasks.filter(task => task.id !== id);
        return task
    }

}
