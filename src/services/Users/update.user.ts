import { db } from "../../config";
import { useSend } from "../../utils";

export const update = async (id: string, body: any) => {

  try {
    const {
      name,
      lastName,
      docType,
      docNumber,
      sex,
      email,
      phoneNumber,
      birthday,
      roleId,
      status
    } = body;


    const updatedUser = await db.users.update({
      where: { id },
      data: {
        name,
        lastName,
        docType,
        docNumber,
        sex,
        email,
        phoneNumber,
        birthday,
        roleId,
        status: Boolean(status)
      },
    });
    return useSend(`User ${updatedUser.name} ${updatedUser.lastName} updated.`, {
      updatedUser,
    });
  } catch (error) {
    console.error("Error toggling user status:", error);
    throw new Error("Error toggling user status:")
  }

};
