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

    async UserForgetPass(req,res) {
        try {
            const data = await this.userService.userForgetPassword(req.body);
            res.send(data)
        } catch (error) {
            res.send({message:error.message})
        }
    }

    async UserResetPassword(req, res) {
        try {
            const token = req.params.token;
            const password = req.body.password;
            
            const data = await this.userService.ResetPassword({ token, password });

            res.status(200).json({ ...data });
        } catch (error) {
            res.send({message:error.message})
        }
    }

    async verifyEmail(req, res) {
        try {
            const token = req.params.token;
            const data = await this.userService.verifyEmail(token)
            
            res.send(data)
        } catch (error) {
            res.send({message:error.message})
        }
    }

        
    
}

export default UserController;