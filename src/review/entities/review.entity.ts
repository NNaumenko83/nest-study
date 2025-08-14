import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { MovieEntity } from '../../movie/entities/movie.entity';

@Entity("reviews")
export class ReviewEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text')
    text: string;

    @Column({ name: "rating", type: "decimal", precision: 3, scale: 1, default: 0.0 })
    rating: number;

    @Column({ name: "movie_id", type: "uuid", })
    movieId: string

    @ManyToOne(() => MovieEntity, movie => movie.reviews, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "movie_id" })
    movie: MovieEntity;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

}   