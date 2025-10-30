import CustomError from "../utils/custom.error.js";
import VerifyJwt from "../utils/jwt.verify.js";

const authMiddleware = async (req,res,next) => {
    try {
        const {token} = req.cookies;
        
        if (!token) throw new CustomError("Forbidden resources!", 409);

        const decoded = VerifyJwt(token);
        
        res.email = decoded.email;
        res.userId = decoded.id;
        
        next()
        
    } catch (error) {
        res.send({
            message: "Invalid token"
        }); 
    }
}

export default authMiddleware;