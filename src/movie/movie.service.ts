import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { MovieDto } from './dto/movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie, MoviePoster } from 'generated/prisma';

@Injectable()
export class MovieService {
    constructor(private readonly prisma: PrismaService) { }

    findAll(): Promise<Movie[]> {
        return this.prisma.movie.findMany(
            { where: { isAvailable: true } }
        );
    }

    async create(dto: MovieDto): Promise<Movie> {
        const { actorIds, releaseYear, title, imageUrl } = dto
        const actors = await this.prisma.actor.findMany({
            where: { id: { in: actorIds } }
        });

        if (!actors || !actors.length) {
            throw new NotFoundException("Actors not found");
        }

        const movie = this.prisma.movie.create(
            {
                data: {
                    title,
                    releaseYear,
                    actors: {
                        connect: actors.map(actor => ({ id: actor.id }))
                    },
                    poster: imageUrl ? { create: { url: imageUrl } } : undefined
                }
            }
        );

        return movie;


    }

    // async update(id: string, dto: MovieDto): Promise<MovieEntity> {
    //     const movie = await this.findById(id);
    //     Object.assign(movie, dto);
    //     return this.movieRepository.save(movie);
    // }

    async findById(id: string): Promise<Movie> {
        const movie = await this.prisma.movie.findUnique({ where: { id }, include: { actors: true } });
        if (!movie) {
            throw new NotFoundException("Movie not found");
        }
        return movie;
    }

    // async delete(id: string): Promise<string> {
    //     const movie = await this.findById(id);
    //     if (!movie) {
    //         throw new NotFoundException("Movie not found");
    //     }
    //     await this.movieRepository.remove(movie);

    //     return "Movie deleted successfully";
    // }
}
