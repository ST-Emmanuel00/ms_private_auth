import { db } from "../../config";
import { useSend } from "../../utils";
import { Permission, Privilege } from "../../types";

export const update = async (id: string, body: any) => {
  try {
    const { permissions, ...roleData } = body; // Separar permisos del resto de los datos

    // Actualizar el rol
    const updatedRole = await db.roles.update({
      where: { id },
      data: { ...roleData },
    });

    let updatedPermissionsCount = 0;

    // Si se proporcionan permisos, actualizarlos
    if (permissions && permissions.length > 0) {
      // Primero, eliminar los permisos existentes para el rol
      await db.permissions.deleteMany({
        where: { roleId: id },
      });

      // Luego, agregar los nuevos permisos
      const newPermissions = permissions.map((permission: Permission) => ({
        roleId: id, // Usamos el id del rol actualizado
        moduleId: permission.moduleId,
        privilege: permission.privilege as Privilege,
        status: true,
      }));

      // Crear los nuevos permisos
      const batchPayload = await db.permissions.createMany({
        data: newPermissions,
      });

      updatedPermissionsCount = batchPayload.count; // Obtener el número de permisos actualizados
    }

    // Devolver el rol actualizado y el número de permisos actualizados
    return useSend("Rol y permisos actualizados correctamente", {
      updatedRole,
      updatedPermissionsCount,
    });
  } catch (error) {
    console.error("Error al actualizar rol y permisos:", error);
    throw new Error("Error al actualizar rol y permisos");
  }
};
