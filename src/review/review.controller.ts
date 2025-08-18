import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from 'generated/prisma';


@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {
  }

  @Post()
  createReview(@Body() dto: CreateReviewDto): Promise<Review> {
    return this.reviewService.createReview(dto);
  }
}
