import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Chat = sequelize.define(
    "Chat",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        createdAt: true,
        indexes: [],
    }
);
