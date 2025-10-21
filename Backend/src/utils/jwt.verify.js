import jwt from 'jsonwebtoken'

const VerifyJwt = (token) => {
    const key = process.env.JWT_SECRET_KEY;
    const data = jwt.verify(token, key);

}

export default VerifyJwt;