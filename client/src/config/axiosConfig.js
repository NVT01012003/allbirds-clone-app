import axios from "axios";
import apis from "../apis/api.js";

export const publicInstance = axios.create({
    baseURL: apis.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const privateInstance = axios.create({
    baseURL: apis.GET_TOKEN_API,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
