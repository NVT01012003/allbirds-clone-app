import { User } from "../models/user.js";

export const createUser = async ({ data, OAuth }) => {
    const user = await User.create(data);
    return user.dataValues;
};

export const getUser = async ({ email, id }) => {
    if (email) {
        const user = User.findOne({
            where: {
                email,
            },
        });
        return user;
    } else {
        const user = User.findOne({
            where: {
                id,
            },
        });
        return user;
    }
};
