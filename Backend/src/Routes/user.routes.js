import { Router } from 'express'
import UserController from '../Controllers/user.controller.js'

const UserRoute = Router()
const userController = new UserController()

