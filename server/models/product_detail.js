import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Product_detail = sequelize.define(
    "Product_detail",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        highlight: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        sustainability: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        care_guide: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        createdAt: true,
        indexes: [
            {
                fields: ["product_name"],
                using: "BTREE",
            },
        ],
    }
);
