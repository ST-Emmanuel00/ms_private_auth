import { query } from "express-validator";
import { errorCatcher } from "../../libs";

export const searchValidations = [
    query("search")
        .optional()
        .isString()
        .withMessage("Search query must be a string"),

    query("isActive")
        .optional()
        .isBoolean()
        .withMessage("isActive parameter must be a boolean"),

    errorCatcher,
];
