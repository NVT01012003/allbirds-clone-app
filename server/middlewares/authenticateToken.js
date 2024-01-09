import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwt_secret = process.env.JWT_SECRET;

export const authenticateToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token)
        return res.status(401).json({
            message: "Acess denied",
        });
    jwt.verify(token, jwt_secret, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        } else {
            req.user = decoded;
            next();
        }
    });
};
