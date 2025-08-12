import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';


@Injectable()
export class MovieService {
    constructor(@InjectRepository(MovieEntity) private readonly movieRepository: Repository<MovieEntity>) { }


    findAll(): Promise<MovieEntity[]> {
        return this.movieRepository.find({
            where: {
                isPublic: true, // Only fetch public movies
            },
            order: {
                releaseYear: 'DESC', // Order by release year in descending order
            },
        });
    }

    create(dto: CreateMovieDto): Promise<MovieEntity> {
        const movie = this.movieRepository.create(dto);
        return this.movieRepository.save(movie);
    }

}
