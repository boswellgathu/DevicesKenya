import { Router } from 'express'
import createUser from './user.controller'

const UserRouter = Router()

UserRouter.get('/user', createUser)

export default UserRouter
