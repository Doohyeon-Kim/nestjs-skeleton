import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    user_id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    nickname: string;


    @Column({type: 'timestamp'})
    created_at: Date;

    @Column({type: 'timestamp'})
    updated_at: Date;

    @Column({type: 'timestamp'})
    deleted_at: Date;
}
