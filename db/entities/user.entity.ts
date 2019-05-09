import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('uuid')
    userHandle: string;

    @Column()
    username: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    isActive: boolean;

    @Column()
    photoUrl: string;

    @Column('date')
    dateCreated: string;

    @Column('date')
    dateModified: string;

    @Column('date')
    dateClosed: string;
}
