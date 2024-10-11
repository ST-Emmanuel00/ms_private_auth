import { Router } from "express";
import { userController } from "../../controllers";
import { commonValidations, userValidations } from "../../validations";

const router = Router();

const { getAllUsers, createNewUser, searchManyUsers, updateUser, toggleUserStatus, deleteUser, getRoleList, getDataExcel } = userController;
const { searchValidations } = commonValidations;

const { userIdValidations, editUserValidations, createUserValidations } = userValidations;

router.post("/", createUserValidations, createNewUser);

router.get("/", getAllUsers);
router.get("/role", getRoleList);
router.get("/search", searchValidations, searchManyUsers);

router.put("/:id", userIdValidations, editUserValidations, updateUser);
router.put("/status/:id", userIdValidations,     toggleUserStatus);
router.delete("/:id", userIdValidations, deleteUser);

router.get("/file/excel", getDataExcel )


export default router;
