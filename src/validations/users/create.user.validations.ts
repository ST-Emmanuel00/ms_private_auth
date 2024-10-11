import { check } from "express-validator";
import { consts } from "../../utils";
import { passwordConfirmation, validateBirthday, validateRoleExistsOnDb, validateUniqueDocNumberOnDb, validateUniqueEmailOnDb } from "../utils";
import { errorCatcher } from "../../libs";

export const createUserValidations = [
    check("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ max: 20 })
      .withMessage("Name must be a maximum of 20 characters")
      .matches(/^[A-Za-z]+$/)
      .withMessage("Name can only contain letters"),
  
    check("lastName")
      .notEmpty()
      .withMessage("Last name is required")
      .isLength({ max: 20 })
      .withMessage("Last name must be a maximum of 20 characters")
      .matches(/^[A-Za-z]+$/)
      .withMessage("Last name can only contain letters"),
  
    check("docType")
      .notEmpty()
      .withMessage("Document type is required")
      .isIn(consts.documentTypes)
      .withMessage("Invalid document type"),
  
    check("docNumber")
      .notEmpty()
      .withMessage("Document number is required")
      .isLength({ min: 8, max: 10 })
      .withMessage("Document number must be between 8 and 10 characters")
      .matches(/^[0-9]+$/)
      .withMessage("Document number can only contain numbers")
      .custom(validateUniqueDocNumberOnDb),
  
    check("sex")
      .notEmpty()
      .withMessage("Sex is required")
      .isIn(consts.genders)
      .withMessage("Sex must be Male, Female, or Other"),
  
    check("email")
      .isEmail()
      .withMessage("Email must be a valid email address")
      .notEmpty()
      .withMessage("Email field cannot be empty")
      .custom(validateUniqueEmailOnDb),
  
    check("phoneNumber")
      .notEmpty()
      .withMessage("Phone number is required")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be 10 characters"),
  
    check("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .withMessage(
        "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),

    // Nuevo campo para confirmar la contraseña
      check("passwordConfirmation")  
      .notEmpty()
      .withMessage("Password confirmation is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .withMessage(
        "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      // Compara la confirmación de la contraseña con el campo "password"
      .custom(passwordConfirmation),  
  



      // check("passwordConfirmation")
      // .notEmpty()
      // .withMessage("Password is required")
      // .isLength({ min: 8 })
      // .withMessage("Password must be at least 8 characters long")
      // .matches(
      //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      // )
      // .withMessage(
      //   "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character"
      // ),
  
    check("birthday")
      .notEmpty()
      .withMessage("Birthday is required")
      .custom(validateBirthday),
  
    check("roleId")
      .notEmpty()
      .withMessage("roleId is required")
      .isUUID()
      .withMessage("roleId must be a valid UUID")
      .custom(validateRoleExistsOnDb),
  
    errorCatcher,
  ];