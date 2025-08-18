import { Body, Controller, Delete, Get, Ip, Param, Post, Put } from '@nestjs/common';
import { MovieService } from './movie.service';

import { MovieDto } from './dto/movie.dto';
import { Movie } from 'generated/prisma';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {
  }

  @Get()
  getAllMovies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  findMovieById(@Param('id') id: string): Promise<Movie> {
    return this.movieService.findById(id);
  }

  @Post()
  createMovie(@Body() dto: MovieDto): Promise<Movie> {
    return this.movieService.create(dto);
  }

  // @Put(':id')
  // updateMovie(@Param('id') id: string, @Body() dto: MovieDto): Promise<MovieEntity> {
  //   return this.movieService.update(id, dto);
  // }

  // @Delete(':id')
  // deleteMovie(@Param('id') id: string): Promise<string> {
  //   return this.movieService.delete(id);
  // }
}
