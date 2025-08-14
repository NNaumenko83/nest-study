import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { In, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { ActorEntity } from 'src/actor/entities/actor.entity';
import { MoviePosterEntity } from './entities/poster.entity';



@Injectable()
export class MovieService {
    constructor(@InjectRepository(MovieEntity) private readonly movieRepository: Repository<MovieEntity>,
        @InjectRepository(ActorEntity) private readonly actorRepository: Repository<ActorEntity>,
        @InjectRepository(MoviePosterEntity) private readonly posterRepository: Repository<MoviePosterEntity>
    ) { }

    findAll(): Promise<MovieEntity[]> {
        return this.movieRepository.find();
    }

    async create(dto: MovieDto): Promise<MovieEntity> {
        const { actorIds, releaseYear, title, imageUrl } = dto
        const actors = await this.actorRepository.find({
            where: { id: In(actorIds) }
        });

        if (!actors || !actors.length) {
            throw new NotFoundException("Actors not found");
        }

        let poster: MoviePosterEntity | null = null;

        if (imageUrl) {
            poster = this.posterRepository.create({ url: imageUrl });
            await this.posterRepository.save(poster);

        }

        const movie = this.movieRepository.create({ title, releaseYear, actors, poster });

        return this.movieRepository.save(movie);
    }

    async update(id: string, dto: MovieDto): Promise<MovieEntity> {
        const movie = await this.findById(id);
        Object.assign(movie, dto);
        return this.movieRepository.save(movie);
    }

    async findById(id: string): Promise<MovieEntity> {
        const movie = await this.movieRepository.findOne({ where: { id }, relations: ['actors'] },);
        if (!movie) {
            throw new NotFoundException("Movie not found");
        }
        return movie;
    }

    async delete(id: string): Promise<string> {
        const movie = await this.findById(id);
        if (!movie) {
            throw new NotFoundException("Movie not found");
        }
        await this.movieRepository.remove(movie);

        return "Movie deleted successfully";
    }
}
