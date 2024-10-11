import { param } from "express-validator";
import { validateRoleExistsOnDb } from "../utils";
import { errorCatcher } from "../../libs";

export const roleIdValidations = [
    param("id")
      .notEmpty()
      .withMessage("ID is required")
      .isUUID(4)
      .withMessage("ID must be a valid UUID")
      .custom(validateRoleExistsOnDb),
  
    errorCatcher,
  ];
  