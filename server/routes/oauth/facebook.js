import { Router } from "express";
import axios from "axios";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { getUser, createUser } from "../../controllers/user.js";

dotenv.config();

const client_url = process.env.CLIENT_URL;
const jwt_refresh_token_secret = process.env.JWT_REFRESH_TOKEN_SECRET;
const client_id = process.env.FACEBOOK_CLIENT_ID;
const redirect_uri = "http://localhost:5050/api/auth/facebook/callback";
const scope = ["email", "public_profile"].join(",");

const stringifiedParams = `client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&auth_type=rerequest&display=popup`;

const authorizationUrl = `https://www.facebook.com/v18.0/dialog/oauth?${stringifiedParams}`;

export const facebookOauth = Router();
async function getAccessTokenFromCode(code) {
    const { data } = await axios({
        url: "https://graph.facebook.com/v18.0/oauth/access_token",
        method: "get",
        params: {
            client_id: process.env.FACEBOOK_CLIENT_ID,
            client_secret: process.env.FACEBOOK_CLIENT_SECRET,
            redirect_uri,
            code,
        },
    });

    return data.access_token;
}

async function getFacebookUserData(access_token) {
    const { data } = await axios({
        url: "https://graph.facebook.com/me",
        method: "get",
        params: {
            fields: ["id", "email", "first_name", "last_name"].join(","),
            access_token: access_token,
        },
    });
    return data;
}

facebookOauth.get("/callback", async (req, res) => {
    const code = req.query.code;
    const access_token = await getAccessTokenFromCode(code);
    const data = await getFacebookUserData(access_token);
    const { email, first_name, last_name } = data;
    const findUser = await getUser({ email });
    let user = null;
    if (findUser) user = findUser;
    else {
        user = await createUser({
            data: {
                email,
                first_name,
                last_name,
                role: "user",
            },
        });
    }
    const refreshToken = jwt.sign(
        { id: user.id, role: user.role },
        jwt_refresh_token_secret,
        {
            expiresIn: "2d",
        }
    );
    return res
        .cookie("refresh_token", refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 2 * 60 * 24 * 60 * 1000,
        })
        .redirect(client_url);
});
facebookOauth.get("/", (req, res) => {
    res.status(200).json({ authorizationUrl });
});
