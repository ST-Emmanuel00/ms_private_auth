import { check } from "express-validator";
import { consts } from "../../utils";
import { errorCatcher } from "../../libs";
import { validateEmailUpdate } from "../utils";

export const editUserSelfValidations = [
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
  
    errorCatcher,
  ];