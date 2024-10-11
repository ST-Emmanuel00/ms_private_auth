import { db } from "../../config";
import { useSend } from "../../utils";

export const getPermissionsByRoleId = async (id: string) => {

  try {
    const role = await db.roles.findUnique({
      where: { id },
      include: {
        permissions: {
          include: {
            module: true,
          },
        },
      },
    });

    if (!role) {
      throw new Error('Role dont found');
    }

    return useSend('Get role permissions', { count: role.permissions.length, role  })


  } catch (error) {
    console.error("Error creating permissions:", error)
    throw new Error('Error creating permissions')

  }


};
