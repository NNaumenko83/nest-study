import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {


    createTask(dto: CreateTaskDto) {
        return { id: Date.now(), title, description };
    }

    getAllTasks() {
        return [
            { id: 1, title: 'Task One', description: 'This is task one' },
            { id: 2, title: 'Task Two', description: 'This is task two' },
        ];
    }
}
