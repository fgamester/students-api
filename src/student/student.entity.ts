import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    first_name: string;

    @Column({ length: 30 })
    last_name: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 300, nullable: true })
    description: string

    @Column({ length: 20, nullable: true })
    phone_number: string;

    @Column({ length: 300, nullable: true })
    address: string;

    @Column({ default: true })
    active: boolean;
}