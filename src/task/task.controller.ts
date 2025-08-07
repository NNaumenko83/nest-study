import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './dto/task.dto';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';



@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  getTasks(): Array<{ id: number; title: string; description: string; completed: boolean }> {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param("id") id: string): { id: number; title: string; description: string; completed: boolean } | undefined {
    return this.taskService.getTaskById(+id);
  }

  @Post()
  createTask(@Body() createDTO: CreateTaskDTO): TaskDTO {
    return this.taskService.createTask(createDTO.title, createDTO.description);
  }

  @Put(':id')
  updateTask(@Param("id") id: string, @Body() dto: UpdateTaskDTO) {
    return this.taskService.updateTask(+id, dto);
  }
} 
