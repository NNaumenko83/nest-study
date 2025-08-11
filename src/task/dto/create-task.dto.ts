import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export enum TaskTag {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home',
}

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;


    @IsInt({ message: 'Priority must be a number' })
    @IsOptional()
    @IsPositive({ message: 'Priority must be a positive number' })
    priority: number;

    @IsArray({ message: 'Tags must be an array' })
    @IsOptional()
    @IsEnum(TaskTag, { each: true, message: 'Tags must be valid task tags' })
    tags: TaskTag[];
}