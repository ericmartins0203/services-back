import { Request, Response } from "express"

import HTTP_STATUS from "../enums/HTTP_STATUS.enum"
import UserService from "../services/user.service"

const userService = new UserService()

class UserController {
    public static async create (request: Request, response: Response) {
        const { body } = request
        try {
            const user = await userService.create(body)

            response.status(HTTP_STATUS.CREATED).json(user)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json('e')
        }
    }

    public static async get (request: Request, response: Response) {
        const { id } = request.params
        try {
            const user = await userService.get(id)

            response.status(HTTP_STATUS.OK).json(user)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public static async list (request: Request, response: Response) {
        try {
            const users = await userService.list()

            response.status(HTTP_STATUS.OK).json(users)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public static async update (request: Request, response: Response) {
        const { id } = request.params
        const { body } = request
        try {
            const users = await userService.update(id, body)

            response.status(HTTP_STATUS.OK).json(users)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public static async delete (request: Request, response: Response) {
        const { id } = request.params
        try {
            await userService.delete(id)

            response.status(HTTP_STATUS.NO_CONTENT).json()
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(e)
        }
    }
}

export default UserController