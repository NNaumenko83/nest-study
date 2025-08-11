import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class UpdateTaskDTO {
    @IsString({ message: 'Title must be a string!!!!!!' })
    @IsNotEmpty()
    @Length(3, 50)
    title: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 200)
    @IsOptional()
    @IsString({ message: 'Description must be a string!!!!!!' })
    description: string;

    @IsNotEmpty()
    @IsBoolean()
    completed: boolean;

}