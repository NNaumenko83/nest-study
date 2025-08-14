import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({

  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService], // Exporting MovieService for use in other modules
})

export class MovieModule { }
