import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Chat_item = sequelize.define(
    "Chat_item",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        createdAt: true,
        indexes: [],
    }
);
