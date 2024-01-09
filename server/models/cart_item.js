import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Cart_item = sequelize.define(
    "Cart_item",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        indexes: [],
    }
);
