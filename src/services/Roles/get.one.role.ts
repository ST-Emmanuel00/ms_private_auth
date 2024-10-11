import { db } from "../../config";
import { useSend } from "../../utils";

export const getOne = async (id: string) => {

    try {
        const role = await db.roles.findUnique({
            where: { id },
            include: { permissions: true },
        });

        return useSend('Get one role', { role })

    } catch (error) {
        console.error("Error to get role:", error);
        throw new Error('Error to get role:')
    }


}