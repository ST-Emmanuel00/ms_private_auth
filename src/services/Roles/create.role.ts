import { db } from "../../config";
import { useSend } from "../../utils";
import { Permission, Privilege } from "../../types";

export const createRoleWithPermissions = async (body: any) => {
  try {
    const { permissions, ...roleData } = body;

    // Crear el nuevo rol
    const role = await db.roles.create({
      data: {
        status: true,
        ...roleData,
      },
    });

    let createdPermissionsCount = 0;

    // Si se proporcionan permisos, verificamos si los moduleId son válidos
    if (permissions && permissions.length > 0) {
      // Obtener los moduleId únicos y asegurarse de que son string[]
      const uniqueModuleIds: string[] = [
        ...new Set(permissions.map((p: Permission) => p.moduleId)),
      ] as string[];

      const validModules = await db.modules.findMany({
        where: {
          id: { in: uniqueModuleIds }, // Aquí ya tiene el tipo string[]
        },
      });

      if (validModules.length !== uniqueModuleIds.length) {
        throw new Error("Algunos moduleId no son válidos.");
      }

      const dataPermissions = permissions.map((permission: Permission) => ({
        roleId: role.id,
        moduleId: permission.moduleId,
        privilege: permission.privilege as Privilege,
        status: true,
      }));

      // Crear los permisos
      const batchPayload = await db.permissions.createMany({
        data: dataPermissions,
      });

      createdPermissionsCount = batchPayload.count;
    }

    return useSend("Rol y permisos creados correctamente", {
      newRole: role,
      createdPermissionsCount,
    });
  } catch (error) {
    console.error("Error al crear rol y permisos:", error);
    throw new Error("Error al crear rol y permisos");
  }
};


