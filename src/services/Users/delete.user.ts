import { db } from "../../config";
import { useSend } from "../../utils";

export const deleteUserId = async (id: string) => {

    try {
        const deletedUser = await db.users.delete({
            where: { id },
        });

        return useSend("User deleted successfully", {
            deletedUser,
        })
    } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error("Error deleting user:")
    }

}