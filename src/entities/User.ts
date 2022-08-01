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

    @Column({nullable: true})
    alias: string

    @Column({nullable: true})
    gender: string

    @Column({nullable: true})
    phone: string

    @Column({nullable: true})
    address: string

    @Column({nullable: true})
    comments: string

    @Column({nullable: true})
    profilePicture: string
}
