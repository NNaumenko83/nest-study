import { Body, Controller, Delete, Get, Ip, Param, Post, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieEntity } from './entities/movie.entity';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {
  }

  @Get()
  getAllMovies(): Promise<MovieEntity[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  findMovieById(@Param('id') id: string): Promise<MovieEntity> {
    return this.movieService.findById(+id);
  }

  @Post()
  createMovie(@Body() dto: MovieDto): Promise<MovieEntity> {
    return this.movieService.create(dto);
  }

  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() dto: MovieDto): Promise<MovieEntity> {
    return this.movieService.update(+id, dto);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string): Promise<string> {
    return this.movieService.delete(+id);
  }
}
