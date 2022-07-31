import { Repository } from "typeorm"

import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

class UserService {
    userRepository: Repository<User>

    constructor () {
        this.userRepository = AppDataSource.getRepository(User)
    }

    private async isCPFInDatabase (cpf: string) {
        const userFound = await this.userRepository.findOne({ where: { cpf } })

        return !!userFound
    }

    async create (body: User) : Promise<User> {
        const alreadyExist = await this.isCPFInDatabase(body.cpf)

        if (alreadyExist) {
            throw new Error("CPF já existe")
        }
        return this.userRepository.save(body)
    }

    async get (id: string) : Promise<User|string> {
        const user = await this.userRepository.findOne({ where: { id } })

        if(user){
            return user
        }
        throw new Error("Id não encontrado")
    }

    list () {
        return this.userRepository.find()
    }

    async update (id: string, body: User) : Promise<User> {
        const user = await this.userRepository.findOne({where:{id}})

        if(!user){
            throw new Error("Id não encontrado")
        }

        if (body.cpf) {
            if (await this.isCPFInDatabase(body.cpf)) {
                throw new Error("CPF já existe")
            }
        }

        return this.userRepository.save({ ...user, ...body })
    }

    async delete (id: string) : Promise<void> {
        await this.userRepository.delete({id})
    }
}

export default UserService