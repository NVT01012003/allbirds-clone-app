import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Shipping_address = sequelize.define(
    "Shipping_address",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        town: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        indexes: [],
    }
);
