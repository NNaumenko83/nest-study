import { Body, Controller, Get, Ip, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieEntity } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {
  }

  @Get()
  getAllMovies(): Promise<MovieEntity[]> {
    return this.movieService.findAll();
  }

  @Post()
  createMovie(@Body() dto: CreateMovieDto): Promise<MovieEntity> {
    return this.movieService.create(dto);
  }
}
