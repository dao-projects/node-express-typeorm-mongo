import {Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column} from "typeorm";

@Entity()
export class User {

    // @PrimaryGeneratedColumn()
    // id: number;

    @ObjectIdColumn()
    id!: string;

    @ObjectIdColumn({name: 'id'})
    _id!: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    age: number;
}
