import { param } from "express-validator";
import { validateUserExistsOnDbById } from "../utils";
import { errorCatcher } from "../../libs";

export const userIdValidations = [
    param("id")
        .notEmpty()
        .withMessage("ID is required")
        .isUUID(4)
        .withMessage("ID must be a valid UUID")
        .custom(validateUserExistsOnDbById),

    errorCatcher,
];