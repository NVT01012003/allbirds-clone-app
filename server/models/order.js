import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Order = sequelize.define(
    "Order",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending",
        },
    },
    {
        createdAt: true,
        indexes: [],
    }
);
