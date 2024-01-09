import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Product = sequelize.define(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        updatedAt: true,
        indexes: [
            {
                fields: ["color"],
                using: "BTREE",
            },
            {
                fields: ["size"],
                using: "BTREE",
            },
            {
                fields: ["price"],
                using: "BTREE",
            },
        ],
    }
);
