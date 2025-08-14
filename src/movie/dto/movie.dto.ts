import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, Max, Min } from "class-validator";

export class MovieDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1888) // The first movie was made in 1888
    @Max(new Date().getFullYear()) // Current year
    releaseYear: number;

    @IsArray()
    @IsUUID("4", { each: true })
    actorIds: string[];

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @IsUrl()
    imageUrl: string;
}
