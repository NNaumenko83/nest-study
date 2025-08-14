import { ActorEntity } from "src/actor/entities/actor.entity";
import { ReviewEntity } from "src/review/entities/review.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MovieEntity } from "./movie.entity";

@Entity({ name: 'movie_posters' })
export class MoviePosterEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 500 })
    url: string;

    @OneToOne(() => MovieEntity, movie => movie.poster)
    @JoinColumn({ name: "movie_id" })
    movie: MovieEntity | null;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}