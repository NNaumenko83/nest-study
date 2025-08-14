import { Injectable } from '@nestjs/common';
import { MovieService } from 'src/movie/movie.service';
import { ReviewEntity } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewService {

    constructor(
        private movieService: MovieService,
        @InjectRepository(ReviewEntity)
        private readonly reviewRepository: Repository<ReviewEntity>) {

    }

}
