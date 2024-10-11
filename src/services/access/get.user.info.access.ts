import { db } from "../../config";

export const getUserInfo = async (id: string) => {

  try {
    const user = await db.users.findUnique({
      where: { id },
      include: {
        role: true,
      },
    });

    const modules = await db.permissions.findMany({
      where: { roleId: user?.roleId },
      distinct: ['moduleId'],
      select: {
        id: true,
        status: true,
        privilege: true,
        module: true
      },
    });

    return { message: `Welcome ${user?.role?.name} ${user?.name} ${user?.lastName}`, info: { user, modules } };

  } catch (error) {
    console.error("Error fetching users in the service:", error);
    throw new Error("Failed to fetch one user info");
  } 

};
