import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Order_item = sequelize.define(
    "Order_item",
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
        indexes: [],
    }
);
