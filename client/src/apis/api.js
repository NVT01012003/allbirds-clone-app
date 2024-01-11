import dotenv from "dotenv";

dotenv.config();
const server_url = process.env.REACT_APP_SERVER_URL;

class Apis {
    constructor() {
        this.BASE_URL = server_url;
        this.REGISTER_API = server_url + "/api/auth/register";
        this.LOGIN_API = server_url + "/api/auth/login";
        this.GOOGLE_API = server_url + "/api/auth/google";
        this.FACEBOOK_API = server_url + "/api/auth/facebook";
        this.GET_TOKEN_API = server_url + "/api/auth/get-token";
        this.USER_API = server_url + "/api/user";
    }
}

const apis = new Apis();
export default apis;
