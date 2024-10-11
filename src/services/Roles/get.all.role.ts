import { db } from "../../config";
import { PaginationParams } from "../../types";
import { createPaginator, useSend } from "../../utils";

export const getAll = async (paginationParams: PaginationParams) => {
    try {
        let { page = "1", items = "2", attribute = 'createdAt', order = 'asc' }: PaginationParams = paginationParams;

        const pagesUtils = {
            pageNumber: parseInt(page),
            pageSize: parseInt(items),
            attribute,
            order
        };

        const totalRoles = await db.roles.count();

        let orderBy: object

        if (attribute === 'permissions') {
            attribute = 'role'
            orderBy = {
                permissions: {
                    [attribute]: order
                }
            }
        } else {
            orderBy = {
                [attribute]: order
            }
        }

        const roles = await db.roles.findMany({
            skip: (pagesUtils.pageNumber - 1) * pagesUtils.pageSize,
            take: pagesUtils.pageSize,
            orderBy,
            include: { permissions: true },
        });

        return useSend("Get all roles", {
            pagination: createPaginator(
                roles,
                pagesUtils.pageNumber,
                totalRoles,
                pagesUtils.pageSize
            ),
            roles: roles,
        })

    } catch (error) {
        console.error("Error to get users:", error);
        throw new Error('Error to get users:')
    }

}