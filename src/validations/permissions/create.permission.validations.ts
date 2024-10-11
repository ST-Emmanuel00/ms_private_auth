import { body } from "express-validator";
import { errorCatcher } from "../../libs";
import { validateModuleExistsOnDbById, validateRoleExistsOnDb } from "../utils";
import { consts } from "../../utils";

export const createPermissionValidations = [
    body("roleId")
        .notEmpty()
        .withMessage("roleId is required")
        .isUUID()
        .withMessage("roleId must be a valid UUID")
        .custom(validateRoleExistsOnDb),

    body("permissions")
        .isArray({ min: 1 })
        .withMessage("permissions must be an array with at least one element"),

    body("permissions.*.moduleId")
        .notEmpty()
        .withMessage("moduleId is required")
        .isUUID()
        .withMessage("moduleId must be a valid UUID")
        .custom(validateModuleExistsOnDbById),

    body("permissions.*.privilege")
        .notEmpty()
        .withMessage("Privilege is required")
        .isIn(consts.privilege)
        .withMessage(
            `Privilege must be one of ${Object.values(consts.privilege).join(", ")}`
        ),

    body("permissions.*.status")
        .notEmpty()
        .withMessage("Status is required")
        .isBoolean()
        .withMessage("Status must be a boolean"),

    errorCatcher,
];