import { CustomValidator } from "express-validator";
import { db } from "../../config";

export const validateEmailUpdate: CustomValidator = async (value: string, { req }) => {
    const { id } = req.params || {};
    const userFound = await db.users.findFirst({
        where: {
            id: id,
        },
    });

    if (userFound?.email === value) {
        return true;
    } else {
        throw new Error(`Email ${value} is already in use.`);
    }
};