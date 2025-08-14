import { ReviewEntity } from "src/review/entities/review.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @OneToMany(() => ReviewEntity, review => review.movie, { cascade: true })
    reviews: ReviewEntity[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}