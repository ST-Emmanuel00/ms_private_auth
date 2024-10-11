import { db } from "../../config";
import { useSend } from "../../utils";

export const getList = async () => {

  try {
    const roles = await db.roles.findMany({
      where: { status: true },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            users: true,
          },
        },
      },
    });

    return useSend("Role list success", {
      roles,
    });
  } catch (error) {
    console.error("Error getting role list:", error);
    throw new Error("Error getting role list:")
  }

};
