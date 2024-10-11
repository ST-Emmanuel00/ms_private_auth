import { param } from "express-validator";
import { errorCatcher } from "../../libs";
import { validateRoleExistsOnDb } from "../utils";


export const viewPermissionsValidations = [
  param("roleId")
    .notEmpty()
    .withMessage("roleId is required")
    .isUUID()
    .withMessage("roleId must be a valid UUID")
    .custom(validateRoleExistsOnDb),

  errorCatcher,
];
