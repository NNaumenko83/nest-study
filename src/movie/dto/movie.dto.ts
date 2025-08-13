import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class MovieDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1888) // The first movie was made in 1888
    @Max(new Date().getFullYear()) // Current year
    releaseYear: number;
}
