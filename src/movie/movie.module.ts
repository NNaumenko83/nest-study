import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { ActorEntity } from 'src/actor/entities/actor.entity';
import { MoviePosterEntity } from './entities/poster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, ActorEntity, MoviePosterEntity])], // Import TypeOrmModule with entities if needed
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService], // Exporting MovieService for use in other modules
})

export class MovieModule { }
