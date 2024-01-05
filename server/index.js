import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const host = process.env.HOST;

app.get("/", (req, res) => res.send("Success!"));

app.listen(host, () => {
    console.log(`Server is running on http://localhost:${host}`);
});
