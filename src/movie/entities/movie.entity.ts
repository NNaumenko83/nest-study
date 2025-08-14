import { ActorEntity } from "src/actor/entities/actor.entity";
import { ReviewEntity } from "src/review/entities/review.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'movies' })
export class MovieEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    releaseYear: number;

    @Column({ name: "rating", type: "decimal", precision: 3, scale: 1, default: 0.0 })
    rating: number;

    @Column({ name: "is_public", default: false })
    isPublic: boolean;

    @ManyToMany(() => ActorEntity, actor => actor.movies)
    @JoinTable({
        name: "movies_actors",
        joinColumn: {
            name: "movie_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "actor_id",
            referencedColumnName: "id"

        }
    })
    actors: ActorEntity[];

    @OneToMany(() => ReviewEntity, review => review.movie, { cascade: true })
    reviews: ReviewEntity[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}