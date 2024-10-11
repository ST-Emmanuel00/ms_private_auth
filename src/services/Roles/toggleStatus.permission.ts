import { db } from "../../config";
import { useSend } from "../../utils";

export const toggleStatusPermission = async (id: string) => {
  try {
    const permission = await db.permissions.findUnique({
      where: { id },
    });

    if (!permission) {
      throw new Error("Permission not found");
    }

    const updatedPermission = await db.permissions.update({
      where: { id },
      data: { status: !permission.status },
    });

    return useSend("Permission status toggled successfully", {
      updatedPermission,
    });
  } catch (error) {
    console.error("Error toggling permission status:", error);
    throw new Error("Error toggling permission status");
  }
};
