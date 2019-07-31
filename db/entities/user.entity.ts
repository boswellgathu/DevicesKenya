import { CreateDateColumn, UpdateDateColumn, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'uuid', nullable: false})
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

    @CreateDateColumn()
    dateCreated: string;

    @UpdateDateColumn()
    dateModified: string;

    @Column('date')
    dateClosed: string;
}
