import { IsInt, IsNotEmpty, IsNumber, IsString, IsUUID, Max, Min } from "class-validator";

export class CreateReviewDto {
    @IsString()
    text: string;

    @IsNumber()
    @Min(0) // Minimum rating is 0
    @Max(10) // Maximum rating is 10
    rating: number;

    @IsUUID("4")
    movieId: string;
}
