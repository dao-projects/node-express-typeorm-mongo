import {Entity,ObjectIdColumn, Column} from "typeorm";

@Entity()
export class Dev {
    
	@ObjectIdColumn()
	id!: string;

	@ObjectIdColumn({ name: 'id' })
	_id!: string;

    @Column()
    codePath: string;

    @Column()
    author: string;

    @Column()
    name: string;

    @Column()
    descript: string;

    @Column()
    depurl: string;

    @Column()
    testurl: string;

    @Column()
    devurl: string;

    @Column()
    gitPath: string;

    @Column()
    isPublished: boolean

    @Column()
    type: Number

}