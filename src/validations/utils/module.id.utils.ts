import { CustomValidator } from "express-validator";
import { db } from "../../config";

export const validateModuleExistsOnDbById: CustomValidator = async (
    value: string,
    { req }
) => {
    const module = await db.modules.findUnique({
        where: {
            id: value,
        },
    });

    if (!module) {
        throw new Error(`The module ID ${value} does not exist.`);
    }
    return true;
};