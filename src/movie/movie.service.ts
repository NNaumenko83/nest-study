import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    getAllMovies(): string[] {
        return ['Movie 1', 'Movie 2', 'Movie 3'];
    }
}
