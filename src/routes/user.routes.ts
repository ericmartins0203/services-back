import express from 'express'

import UserController from '../controllers/user.controller'
import { validateShape } from '../middlewares/validationMiddleware.middleware'
import {userSchema, updateSchema} from '../shape/user.shapes'

const userRouter = express.Router()

userRouter.post('/user', validateShape(userSchema), UserController.create)
userRouter.get('/user', UserController.list)
userRouter.get('/user/:id', UserController.get)
userRouter.patch('/user/:id', validateShape(updateSchema), UserController.update)
userRouter.delete('/user/:id', UserController.delete)


export default userRouter