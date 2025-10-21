import UserService from "../Services/user.service.js";

class UserController {
    constructor() {
        this.userService = new UserService()
    }

    async UserRegister(req, res) {
        try {
            const token = await this.userService.UserRegister(req.body);
            res.status(201).json(token)
        } catch (error) {
            res.send({message:error.message})
        }
    }

    async UserLogin(req,res) {
        try {
            const data = await this.userService.userLogin(req.body);

            res.cookie('token', data.token, {
                httpOnly: true,
                secure: false,
                samesite:true
            })
            res.status(200).json({
                message:data.message
            })
        } catch (error) {
            res.send({ message: error.message });
        }
    }

        
    
}

export default UserController;