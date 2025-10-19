import {Schema,model} from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default:false
    },
    verificationToken: {
        type:String
    },
    resetPasswordToken: String,
    resetPasswordDate:Date
}, {
    timestamps:true
})

const User = model('User', UserSchema);
export default User;