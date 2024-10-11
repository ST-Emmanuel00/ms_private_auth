import { db } from "../../config";
import { useSend } from "../../utils";

export const toggleStatus = async (id: string) => {

    try {
        const user = await db.users.findUnique({ where: { id } });

        const updateUser = await db.users.update({
            where: { id },
            data: { status: !user?.status },
        })

        return useSend(
            `${updateUser.name} ${updateUser.lastName} has been ${updateUser.status ? "activated" : "deactivated"}.`,
            {
                updateUser,
            }
        );

    } catch (error) {
        console.error("Error toggling user status:", error);
        throw new Error('Error toggling user status:')
    }

}