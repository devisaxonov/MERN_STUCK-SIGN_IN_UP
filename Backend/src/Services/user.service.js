import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import CustomError from "../utils/custom.error.js";
import generateJwt from "../utils/jwt.generate.js";

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
}

export default UserService;