import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Cart = sequelize.define(
    "Cart",
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
