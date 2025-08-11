import { Body, Controller, Get, Ip, Post } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {
  }

  @Get("all")
  getAllMovies(): string[] {
    return this.movieService.getAllMovies();
  }

  @Get("test")
  getTest(@Ip() ip: string): string {
    return `Test successful from IP: ${ip}`;
  }

  @Post("create")
  createMovie(@Body() body: { title: string; year: number }): object {
    return body;
  }

  @Post("create-test")
  createMovieTest(@Body("ti-tle") movie: string): string {
    return `Movie '${movie}' created successfully!`;
  }
}
