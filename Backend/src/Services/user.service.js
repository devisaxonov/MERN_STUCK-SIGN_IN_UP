import User from "../Models/User.js";
import crypto from 'crypto'
import bcrypt from "bcryptjs";
import CustomError from "../utils/custom.error.js";
import generateJwt from "../utils/jwt.generate.js";
import sendEmail from "../utils/sendEmail.js";

class UserService {
    constructor() { 
        
    }

    async UserRegister({ name, email, password }) {
        const findEmail = await User.findOne({ email })
        if (findEmail) throw new CustomError('Email already exists!',409);

        const hashedPass = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            name, email, password: hashedPass,
        });
        
        return {
            message:"User registered successfully!"
        }
        
    }

    async userLogin({email,password}) {
        const findEmail = await User.findOne({ email });
        if (!findEmail) throw new CustomError('Email or Password incorrect!', 404);

        const isMatch = await bcrypt.compare(password, findEmail.password);

        if (!isMatch) throw new CustomError('Email or Password incorrect!', 404);
        
        const token = generateJwt({ email: findEmail.email, id: findEmail._id })
        
        return {
            message: "User enter successfully!",
            token
        }
        
    }

    async userForgetPassword({email}) {
        const user = await User.findOne({ email });
        if (!user) throw new CustomError('User not found', 404);

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordDate = Date.now() + 3600000;

        await user.save();

        const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

        const emailContent = `
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password</p>
        <a href='${resetLink} target="_blank"'>${resetLink}</a>
        <p>This link will expire in 1 hour</p>
        `

        await sendEmail(user.email, "Password Reset Request", emailContent);

        return {
            message: 'Password reset email sended!'
        }
    }
}

export default UserService;