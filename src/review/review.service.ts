import { Injectable } from '@nestjs/common';
import { MovieService } from 'src/movie/movie.service';

import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {

    // constructor(
    //     private readonly movieService: MovieService,
    //     @InjectRepository(ReviewEntity)
    //     private readonly reviewRepository: Repository<ReviewEntity>) {
    // }

    // async createReview(dto: CreateReviewDto): Promise<ReviewEntity> {
    //     const { text, rating, movieId } = dto;
    //     const movie = await this.movieService.findById(movieId);

    //     const review = this.reviewRepository.create({
    //         text,
    //         rating,
    //         movie
    //     });
    //     return this.reviewRepository.save(review);
    // }

}
