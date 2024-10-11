import { check } from "express-validator";
import { validateExistingAccount } from "../utils";
import { errorCatcher } from "../../libs";

export const accountValidator = [
    check("email")
        .notEmpty()
        .withMessage("Email field cannot be empty")
        .isEmail()
        .withMessage("Email must be a valid email address")
        .custom(validateExistingAccount),
    errorCatcher,
];