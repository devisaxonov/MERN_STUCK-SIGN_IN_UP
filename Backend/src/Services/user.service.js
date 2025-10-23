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

        const verifyToken = crypto.randomBytes(32).toString('hex');

        const newUser = await User.create({
            name,
            email,
            password: hashedPass,
            verificationToken:verifyToken
        });
        
        const verifyLink = `${process.env.CLIENT_URL}/verify/${verifyToken}`;

        const verifyContent = `
        <h2>Verify Email Request</h2>
        <p>Click the link below to verify your email</p>
        <a href='${verifyLink} target="_blank"'>${verifyLink}</a>
        <p>This link will expire in 1 hour</p>
        `

        await sendEmail(newUser.email, "Verify Email Request", verifyContent);

        return {
            message: `User registered successfully!
            Verification link sended`
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

    async ResetPassword({token,password}) {
        
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordDate:{$gt: Date.now()}
        })

        if (!user) throw new CustomError("Invalid or expired token", 401);

        user.password = await bcrypt.hash(password, 12);
        user.resetPasswordToken = undefined;
        user.resetPasswordDate = undefined;

        await user.save();

        return {
            message: "Password reset successfully!",
            user
        }
    }

    async verifyEmail(token) {    
        const user = await User.findOne({ verificationToken: token.split(' ')[0]});

        if (!user) throw new CustomError("Invalid token", 401);

        if (user.isVerified) return {
            message: "Email already verified!"
        }

        user.isVerified = true;
        await user.save()
        return {
            message:"Your email verified successfully!"
        }
    }
}

export default UserService;