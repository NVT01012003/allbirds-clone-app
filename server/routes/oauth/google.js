import { Router } from "express";
import { google } from "googleapis";
import dotenv from "dotenv";
import axios from "axios";
import jwt from "jsonwebtoken";
import { getUser, createUser } from "../../controllers/user.js";

dotenv.config();
const google_client_id = process.env.GOOGLE_CLIENT_ID;
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET;
const client_url = process.env.CLIENT_URL;
const jwt_refresh_token_secret = process.env.JWT_REFRESH_TOKEN_SECRET;

const oauth2Client = new google.auth.OAuth2(
    google_client_id,
    google_client_secret,
    "http://localhost:5050/api/auth/google/callback"
);

const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
];

const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    include_granted_scopes: true,
    prompt: "consent",
});

// route
export const googleOauth = Router();

async function getGoogleUser({ code }) {
    const { tokens } = await oauth2Client.getToken(code);

    // Fetch the user's profile with the access token and bearer
    const googleUser = await axios
        .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${tokens.id_token}`,
                },
            }
        )
        .then((res) => res.data)
        .catch((error) => {
            throw new Error(error.message);
        });

    return googleUser;
}

googleOauth.get("/callback", async (req, res, next) => {
    try {
        const code = req.query.code;
        const userInfo = await getGoogleUser({ code });
        const { email, given_name, family_name } = userInfo;
        const findUser = await getUser({ email });
        let user = null;
        if (findUser) user = findUser;
        else {
            user = await createUser({
                data: {
                    email,
                    first_name: given_name,
                    last_name: family_name,
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
    } catch (e) {
        next(e);
    }
});

googleOauth.get("/", (req, res) => {
    res.status(200).json({ authorizationUrl });
});
