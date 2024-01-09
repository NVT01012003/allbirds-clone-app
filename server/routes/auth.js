import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { googleOauth } from "./oauth/google.js";
import { facebookOauth } from "./oauth/facebook.js";

import { createUser, getUser } from "../controllers/user.js";

dotenv.config();
export const authRouter = Router();
const jwt_secret = process.env.JWT_SECRET;
const jwt_refresh_token_secret = process.env.JWT_REFRESH_TOKEN_SECRET;

authRouter.use("/google", googleOauth);
authRouter.use("/facebook", facebookOauth);

authRouter.post("/register", async (req, res, next) => {
    try {
        const { email, password, first_name, last_name } = req.body;
        if (!email && !password && !first_name && !last_name)
            return res.status(400).json({
                message: "Missing registration information",
            });
        if (await getUser({ email })) {
            return res.status(400).json({ message: "User already exists" });
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await createUser({
            data: {
                email,
                password: passwordHash,
                first_name,
                last_name,
                role: "user",
            },
        });
        const accessToken = jwt.sign(
            { id: user.id, role: user.role },
            jwt_secret,
            {
                expiresIn: "2h",
            }
        );
        const refreshToken = jwt.sign(
            { id: user.id, role: user.role },
            jwt_refresh_token_secret,
            {
                expiresIn: "2d",
            }
        );

        // response
        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 2 * 60 * 24 * 60 * 1000,
        })
            .status(200)
            .json({
                message: "OK",
                element: {
                    user: {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                    },
                    token: `Bearer ${accessToken}`,
                },
            });
    } catch (e) {
        next(e);
    }
});

authRouter.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email && !password && !first_name && !last_name)
            return res.status(400).json({
                message: "Missing registration information",
            });
        const user = await getUser({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const comparePass = await bcrypt.compare(password, user.password);
        if (!comparePass)
            return res.status(401).json({ message: "Wrong passowrd" });
        const accessToken = jwt.sign(
            { id: user.id, role: user.role },
            jwt_secret,
            {
                expiresIn: "2h",
            }
        );
        const refreshToken = jwt.sign(
            { id: user.id, role: user.role },
            jwt_refresh_token_secret,
            {
                expiresIn: "2d",
            }
        );
        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 2 * 60 * 24 * 60 * 1000,
        })
            .status(200)
            .json({
                message: "OK",
                element: {
                    user: {
                        id: user.id,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                    },
                    token: `Bearer ${accessToken}`,
                },
            });
    } catch (e) {
        next(e);
    }
});
