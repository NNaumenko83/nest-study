import { IsInt, IsNotEmpty, IsString, IsUUID, Max, Min } from "class-validator";

export class ReviewDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1) // Minimum rating is 1
    @Max(10) // Maximum rating is 10
    rating: number;

    @IsUUID("4")
    movieId: string;

}
