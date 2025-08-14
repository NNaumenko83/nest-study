import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';


@Injectable()
export class MovieService {
    constructor(@InjectRepository(MovieEntity) private readonly movieRepository: Repository<MovieEntity>) { }

    findAll(): Promise<MovieEntity[]> {
        return this.movieRepository.find();
    }

    create(dto: MovieDto): Promise<MovieEntity> {
        const movie = this.movieRepository.create(dto);
        return this.movieRepository.save(movie);
    }

    async update(id: string, dto: MovieDto): Promise<MovieEntity> {
        const movie = await this.findById(id);
        Object.assign(movie, dto);
        return this.movieRepository.save(movie);
    }

    async findById(id: string): Promise<MovieEntity> {
        const movie = await this.movieRepository.findOne({ where: { id } });
        if (!movie) {
            throw new HttpException("Movie not found", HttpStatus.NOT_FOUND);
        }
        return movie;
    }

    async delete(id: string): Promise<string> {
        const movie = await this.findById(id);
        if (!movie) {
            throw new HttpException("Movie not found", HttpStatus.NOT_FOUND);
        }
        await this.movieRepository.remove(movie);

        return "Movie deleted successfully";
    }
}
