import { Router } from "express";
import { authRouter } from "./auth.js";

export const route = Router();

route.use("/auth", authRouter);
route.get("/", (req, res) => res.send("OK"));
