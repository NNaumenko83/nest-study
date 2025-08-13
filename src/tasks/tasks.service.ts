import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>,
    ) { }

    createTask(dto: CreateTaskDto): Promise<TaskEntity> {
        const task = this.taskRepository.create(dto);
        return this.taskRepository.save(task);
    }

    getAllTasks(): Promise<TaskEntity[]> {
        return this.taskRepository.find();
    }
}
