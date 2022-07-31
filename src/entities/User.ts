import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string

    @CreateDateColumn()
    createDate: string

    @UpdateDateColumn()
    updateDate: string

    @Column()
    name: string

    @Column({unique: true})
    cpf: string

    @Column()
    alias: string

    @Column()
    gender: string

    @Column()
    phone: string

    @Column()
    address: string

    @Column()
    comments: string

    @Column()
    profilePicture: string
}
