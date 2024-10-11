import { db } from "../../config";
import { useSend } from "../../utils";

export const searchAll = async (searchTerm: string | undefined = "") => {

    try {

        const modules = await db.modules.findMany({

            select: {
                name: true,
            },
            where: {
                OR: [
                    {
                        name: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        }
                    }
                ]
            }
        })

        const roles = await db.roles.findMany({
            select: {
                id: true,
                name: true,
                description: true,
            },
            where: {
                OR: [
                    {
                        name: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                    {
                        description: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                ],
            },
        });
        const users = await db.users.findMany({
            select: {
                id: true,
                name: true,
                lastName: true,
                role: {
                    select: {
                        name: true
                    }
                }
            },
            where: {
                OR: [
                    {
                        name: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                    {
                        lastName: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                    {
                        email: {
                            contains: searchTerm,
                            mode: 'insensitive',
                        },
                    },
                    {
                        role: {

                            name: {
                                contains: searchTerm,
                                mode: 'insensitive',
                            }
                        },
                    },

                ],
            },
        });
        return useSend("Search all", { modules, roles, users })

    } catch (error) {
        console.error("Error explore", error);
        throw new Error("Error explore")
    }

}