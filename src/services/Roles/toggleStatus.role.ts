import { db } from "../../config";
import { useSend } from "../../utils";

export const toggleStatus = async (id: string) => {
    try {
        const role = await db.roles.findUnique({ where: { id } });
        const updatedUsers = await db.users.updateMany({
            where: { roleId: id },
            data: { status: !role?.status },
        });
        const updatedRole = await db.roles.update({
            where: { id },
            data: { status: !role?.status },
        });


        return useSend("Role updated", {
            updatedRole,
            updatedUsers,
        })
    } catch (error) {
        console.error("Error toggling role status:", error);
        throw new Error('Error toggling role status:')
    }


}

