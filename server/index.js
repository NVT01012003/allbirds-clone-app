import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

// import file config
import { sequelize } from "./config/db.js";
import "./config/initDb.js";
import { route } from "./routes/index.js";
import { hanldeError } from "./middlewares/handleError.js";

dotenv.config();
const app = express();
const host = process.env.HOST;
const client_url = process.env.CLIENT_URL;

// config app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: [client_url],
        credentials: true,
    })
);
app.use(cookieParser());

// Route
app.use("/api", route);

// handle error
app.use(hanldeError);

// running server
app.listen(host, async () => {
    console.log(`Server is running on http://localhost:${host}`);
    try {
        await sequelize.authenticate();
        (async () => {
            await sequelize.sync();
        })();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
