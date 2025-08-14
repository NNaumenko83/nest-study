import { MovieEntity } from 'src/movie/entities/movie.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm';

@Entity('actors')
export class ActorEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @ManyToMany(() => MovieEntity, movie => movie.actors)
    @JoinTable({
        name: 'movies_actors',
        joinColumn: {
            name: 'actor_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'movie_id',
            referencedColumnName: 'id'
        }
    })
    movies: MovieEntity[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

}