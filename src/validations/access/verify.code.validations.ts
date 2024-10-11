import { param } from "express-validator";
import { isValidCode } from "../utils";
import { errorCatcher } from "../../libs";

export const randomCodeValidator = [
    param("token").custom(isValidCode),
    errorCatcher,
];