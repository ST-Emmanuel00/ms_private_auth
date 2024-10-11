import { param } from "express-validator";
import { errorCatcher } from "../../libs";
import { validateToken } from "../utils";

export const tokenParamValidator = [
    param("token").custom(validateToken),
    errorCatcher,
];