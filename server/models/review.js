import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Review = sequelize.define(
    "Review",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: true,
        indexes: [],
    }
);
