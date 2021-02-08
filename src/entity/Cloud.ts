import {Entity, PrimaryGeneratedColumn,ObjectIdColumn, Column} from "typeorm";

@Entity()
export class Cloud {

	@ObjectIdColumn()
	id!: string;

	@ObjectIdColumn({ name: 'id' })
	_id!: string;

    @Column()
    funName: string;

    @Column()
    funDesc: string;

    @Column()
    funBody: string;

    @Column()
    funStatus: number;

    @Column()
    funType: number;

}
