import { db } from "../../config";
import { useSend } from "../../utils";

export const deleteRoleId = async (id: string) => {

  try {
    const deletedRole = await db.roles.delete({
      where: { id },
    });
    return useSend("Role deleted successfully", {
      deletedRole,
    });
  } catch (error) {
    console.error("Error deleting role:", error);
    throw new Error('Error deleting role:')
  }

};
