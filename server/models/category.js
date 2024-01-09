import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Category = sequelize.define(
    "Category",
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
            unique: true,
        },
    },
    {
        indexes: [
            {
                fields: ["name"],
                using: "BTREE",
            },
        ],
    }
);
