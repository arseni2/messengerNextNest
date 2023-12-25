import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: false })
    isActive: boolean;

    @Column()
    email: string

    @Column()
    hashCode: string

    @Column()
    password: string
}