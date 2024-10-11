import { db } from "../../config";
import { User } from "../../types";
import { useSend } from "../../utils";

export const updateSelf = async (id: string, body: User) => {

    try {
        const { name, lastName, sex, email } = body
        const updatedUser = await db.users.update({
            where: { id },
            data: { name, lastName, sex, email },
        });
        return useSend("User updated", {
            updatedUser,
        })
    } catch (error) {
    }

}