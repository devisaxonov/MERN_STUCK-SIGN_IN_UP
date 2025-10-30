import { Router } from 'express'
import UserController from '../Controllers/user.controller.js'
import { validate } from '../Middleware/validate.middleware.js'
import { UserReg } from '../utils/joi/register.validation.js'
import { UserLogin } from '../utils/joi/login.validate.js'
import { validateForgetPass } from '../utils/joi/forgetpass.validate.js'
import resetPassValidate from '../utils/joi/resetpass.validate.js'
import authMiddleware from '../Middleware/auth.middleware.js'

const UserRoute = Router()
const userController = new UserController()

UserRoute.post('/user/register', validate(UserReg), (req, res) => userController.UserRegister(req, res))
UserRoute.post('/user/login', validate(UserLogin), (req, res) => userController.UserLogin(req, res))
UserRoute.post('/user/forget/password', validate(validateForgetPass), (req, res) => userController.UserForgetPass(req, res))
UserRoute.post('/user/reset-password/:token', validate(resetPassValidate), (req, res) => userController.UserResetPassword(req, res))
UserRoute.get('/user/verify/:token', (req, res) => userController.verifyEmail(req, res));
UserRoute.get('/user/log-out', authMiddleware, (req, res) => userController.UserLogOut(req, res));

export default UserRoute;