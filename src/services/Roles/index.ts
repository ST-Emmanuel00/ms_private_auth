import { getOne } from "./get.one.role";
import { getAll } from "./get.all.role";
import { createRoleWithPermissions } from "./create.role";
import { search } from "./search.role";
import { toggleStatus } from "./toggleStatus.role";
import { update } from "./update.role";
import { deleteRoleId } from "./delete.role";
import { toggleStatusPermission } from "./toggleStatus.permission";
import { getPermissionsByRoleId } from "./get.permission.by.roleId";
import { getDataFile } from "./getDataFile";

export {
  getOne,
  getAll,
  createRoleWithPermissions,
  search,
  toggleStatus,
  update,
  deleteRoleId,
  toggleStatusPermission,
  getPermissionsByRoleId,
  getDataFile
};

export function updateRoleWithPermissions(id: string, roleData: any, permissions: any) {
  throw new Error("Function not implemented.");
}
