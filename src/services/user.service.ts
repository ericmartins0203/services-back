import { Repository } from "typeorm"

import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

class UserService {
    userRepository: Repository<User>

    constructor () {
        this.userRepository = AppDataSource.getRepository(User)
    }

    private async isCPFInDatabase (cpf: string) {
        const userFound = await this.userRepository.findOneOrFail({ where: { cpf } })

        return !!userFound
    }

    async get (id: string) : Promise<User> {
        const user = await this.userRepository.findOneOrFail({ where: { id } })

        return user
    }

    list () {
        return this.userRepository.find()
    }

    async create (body: User) : Promise<User> {
        if (await this.isCPFInDatabase(body.cpf)) {
            throw new Error("CPF already exists")
        }
        return this.userRepository.save(body)
    }

    async update (id: string, body: User) : Promise<User> {
        const user = await this.userRepository.findOneOrFail({where:{id}})

        if (body.cpf) {
            if (await this.isCPFInDatabase(body.cpf)) {
                throw new Error("CPF already exists")
            }
        }

        return this.userRepository.save({ ...user, ...body })
    }

    async delete (id: string) : Promise<void> {
        await this.userRepository.delete({id})
    }
}

export default UserService