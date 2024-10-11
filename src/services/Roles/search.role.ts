import { db } from "../../config";
import { SearchOptions } from "../../types";
import { useSend } from "../../utils";

export const search = async (searchOptions: SearchOptions) => {

    try {
        const { search, isActive } = searchOptions;

        const isActiveBool = isActive === "true";

        const roles = await db.roles.findMany({
            where: {
                ...(isActive ? { AND: { status: isActiveBool } } : {}),
                OR: [
                    {
                        name: {
                            contains: search,
                        },
                    },
                    {
                        description: {
                            contains: search,
                        },
                    },
                ],
            },
        });

        return useSend('Get one role', { roles })
    } catch (error) {
        console.error("Error to get role:", error);
        throw new Error('Error to get role:')
    }

}