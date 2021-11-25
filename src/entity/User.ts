import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectID;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    language: string;
    @Column()
    deletedAt: Date;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    deviceType: string;
    @Column()
    deviceToken: string;
    @Column()
    avatar: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

}
