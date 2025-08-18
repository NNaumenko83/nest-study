import { Body, Controller, Post } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { Actor } from 'generated/prisma';


@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) { }


  @Post()
  async createActor(@Body() dto: CreateActorDto): Promise<Actor> {
    return this.actorService.createActor(dto);
  }
}
