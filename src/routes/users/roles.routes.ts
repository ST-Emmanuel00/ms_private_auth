import { Router } from "express";
import { roleController } from "../../controllers";
import {
  roleValidations,
  commonValidations,
  permissionValidations,
} from "../../validations";
import { viewPermissionsValidations } from "../../validations/permissions";

const router = Router();

const {
  createRole,
  getAllRoles,
  searchRoles,
  getOneRole,
  updateRole,
  toggleRoleStatus,
  deleteRole,
  getDataExcel,
  togglePermissionStatus,
  getPermissionsByRoleId,
} = roleController;
const { roleIdValidations, updateRoleValidations, createRoleValidations } =
  roleValidations;
const { searchValidations } = commonValidations;

router.post("/", createRoleValidations, createRole);

router.get("/", getAllRoles);
router.get("/search", searchValidations, searchRoles);
router.get("/:id", roleIdValidations, getOneRole);

router.put("/:id", roleIdValidations, updateRoleValidations, updateRole);
router.put("/status/:id", roleIdValidations, toggleRoleStatus);

router.delete("/:id", roleIdValidations, deleteRole);
router.get("/file/excel", getDataExcel);

router.get(
  "/permissions/:id",
  roleIdValidations,
  viewPermissionsValidations,
  getPermissionsByRoleId
);
router.put(
  "/permissions/:id",
  roleIdValidations,
  viewPermissionsValidations,
  togglePermissionStatus
);

export default router;
