import { check } from "express-validator";
import { errorCatcher } from "../../libs";
import { consts } from "../../utils";
import { validateBirthday, validateDocnumberUpdate, validateEmailUpdate } from "../utils";


export const editUserValidations = [
  check("name")
    .optional()
    .isLength({ max: 20 })
    .withMessage("Name must be a maximum of 20 characters")
    .matches(/^[A-Za-z]+$/)
    .withMessage("Name can only contain letters"),

  check("lastName")
    .optional()
    .isLength({ max: 20 })
    .withMessage("Last name must be a maximum of 20 characters")
    .matches(/^[A-Za-z]+$/)
    .withMessage("Last name can only contain letters"),

  check("docType")
    .optional()
    .isIn(consts.documentTypes)
    .withMessage("Invalid document type"),

  check("docNumber")
    .optional()
    .isLength({ min: 8, max: 10 })
    .withMessage("Document number must be between 8 and 10 characters")
    .matches(/^[0-9]+$/)
    .withMessage("Document number can only contain numbers")
    .custom(validateDocnumberUpdate),

  check("sex")
    .optional()
    .isIn(consts.genders)
    .withMessage("Sex must be Male, Female, or Other"),

  check("email")
    .optional()
    .isEmail()
    .withMessage("Email must be a valid email address")
    .custom(validateEmailUpdate),

  check("phoneNumber")
    .optional()
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be 10 characters"),

  // check("password")
  //   .optional()
  //   .isLength({ min: 8 })
  //   .withMessage("Password must be at least 8 characters long")
  //   .matches(
  //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  //   )
  //   .withMessage(
  //     "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character"
  //   ),

  check("birthday")
    .optional()
    .notEmpty()
    .withMessage("Birthday is required")
    .custom(validateBirthday),

  // check("roleId")
  //   .optional()
  //   .isUUID()
  //   .withMessage("roleId must be a valid UUID")

  //   .custom(validateRoleExistsOnDb),

  check("status")
    .optional()
    .isBoolean()
    .withMessage("status must be a boolean"),

  errorCatcher,
];
