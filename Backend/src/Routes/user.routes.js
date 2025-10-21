import { Router } from 'express'
import UserController from '../Controllers/user.controller.js'
import { validate } from '../Middleware/validate.middleware.js'
import { UserReg } from '../utils/joi/register.validation.js'
import { UserLogin } from '../utils/joi/login.validate.js'

const UserRoute = Router()
const userController = new UserController()

UserRoute.post('/user/register', validate(UserReg), (req, res) => userController.UserRegister(req, res))
UserRoute.post('/user/login', validate(UserLogin), (req, res) => userController.UserLogin(req, res))


export default UserRoute;