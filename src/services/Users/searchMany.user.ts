// services/userService.ts

import { db } from "../../config";
import { SearchOptions } from "../../types";
import { createPaginator, useSend } from "../../utils";

export const searchUsers = async (searchOptions: SearchOptions) => {
    try {
        const { search, isActive } = searchOptions;
        const isActiveBool = isActive === 'true';

        // Dividir la búsqueda en palabras
        const searchTerms = search ? search.split(" ") : [];

        const users = await db.users.findMany({
            where: {
                ...(isActive ? { status: isActiveBool } : {}),
                OR: [
                    {
                        AND: searchTerms.map(term => ({
                            OR: [
                                { name: { contains: term, mode: 'insensitive' } },
                                { lastName: { contains: term, mode: 'insensitive' } }
                            ]
                        })),
                    },
                    { docType: { contains: search, mode: 'insensitive' } },
                    { docNumber: { contains: search, mode: 'insensitive' } },
                    { sex: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                    { phoneNumber: { contains: search, mode: 'insensitive' } },
                ],
            },
            include: {
                role: true,
            },
        });

        return useSend("Search users", {
            pagination: createPaginator(users, 1, users.length, users.length),
            users: users,
        });

    } catch (error) {
        console.error("Error to search user:", error);
        throw new Error('Error to search user:')
    }
};
