import { Router } from "express";
import { authController } from "../../controllers";
import { authValidator } from "../../middlewares";
import { authValidations, userValidations } from "../../validations";

const router = Router();
const { userIdValidations } = userValidations;

const { login, activateAccount, requestPasswordReset, logout, verifyCode, resetPassword, getUserInfo, updateUserSelf } = authController;
const { loginValidations, randomCodeValidator, tokenParamValidator, accountValidator, passwordResetValidation, editUserSelfValidations } = authValidations;

router.get("/user/:id", authValidator, userIdValidations, getUserInfo);
router.post("/login", loginValidations, login);
router.delete("/logout", logout);
router.get("/verify-email/:token", tokenParamValidator, activateAccount);
router.post("/request-password-reset", accountValidator, requestPasswordReset);
router.put("/reset-password/:token", tokenParamValidator, passwordResetValidation, resetPassword);
router.put("/verify-code/:token", randomCodeValidator, verifyCode);
router.put("/self/:id", userIdValidations, editUserSelfValidations, updateUserSelf);


export default router;
