
import { Optional } from "@nestjs/common";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsString()
    @MinLength(5)
    @MaxLength(200)
    description: string;

    @Optional()
    isDone?: boolean;
}