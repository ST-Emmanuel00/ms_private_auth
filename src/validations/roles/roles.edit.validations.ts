import { check } from "express-validator";
import { errorCatcher } from "../../libs";
import { validateRoleExistsOnDbByName } from "../utils";


export const updateRoleValidations = [
  check("name")
    .optional()
    .isLength({ max: 20 })
    .withMessage("Name must be at most 20 characters long")
    .matches(/^[A-Za-z]+$/)
    .withMessage("Name can only contain letters")
    .custom(validateRoleExistsOnDbByName),

  check("description")
    .optional()
    .isLength({ max: 255 })
    .withMessage("Description must be at most 255 characters long")
    .matches(/^[A-Za-z0-9\s.,_\-(){}\[\]]+$/)
    .withMessage("Description can only contain letters and common punctuation"),

  check("status")
    .optional()
    .isBoolean()
    .withMessage("status parameter must be a boolean"),

  errorCatcher,
];

