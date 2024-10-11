import { check } from "express-validator";
import { errorCatcher } from "../../libs";
import { validateLoginCredentials } from "../utils";


export const loginValidations = [
  check("email")
    .isEmail()
    .withMessage("The field must be a valid email address")
    .notEmpty()
    .withMessage("The email field cannot be empty")
    .custom(validateLoginCredentials),
  check("password")
    .notEmpty()
    .withMessage("The password field cannot be empty"),

  errorCatcher,
];
