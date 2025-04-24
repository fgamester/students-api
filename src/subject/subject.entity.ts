import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 300, nullable: true })
    description: string;

    @Column({ default: true })
    active: boolean;
}