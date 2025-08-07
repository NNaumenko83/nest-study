import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}