import jwt from 'jsonwebtoken'

const generateJwt = (data) => {
    const key = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ ...data }, key, {
        expiresIn: '1h'
    })

    return token
};

export default generateJwt;