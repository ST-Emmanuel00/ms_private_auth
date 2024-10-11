import { check } from "express-validator";
import { errorCatcher } from "../../libs";
import { passwordConfirmation } from "../utils";

export const passwordResetValidation = [
  check("password")
    .notEmpty()
    .withMessage("New password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  
  check("passwordConfirmation")
    .notEmpty()
    .withMessage("Confirm password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .custom(passwordConfirmation), 

  errorCatcher,
];
