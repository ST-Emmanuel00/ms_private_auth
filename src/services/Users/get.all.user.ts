import { db } from "../../config";
import { PaginationParams } from "../../types";
import { pageProps } from "../../types/page.props.types";
import { createPaginator } from "../../utils";

export const getAll = async (paginationParams: PaginationParams) => {

  try {
    let { page = "1", items = "2", attribute = 'updatedAt', order = 'desc' }: PaginationParams = paginationParams;

    const pagesUtils: pageProps = {
      pageNumber: parseInt(page, 10),
      pageSize: parseInt(items, 10),
    };

    const totalUsers = await db.users.count();
    let orderBy: object = {
      [attribute]: order
    };

    if (attribute === 'role') {
      attribute = 'name'
      orderBy = {
        role: {
          [attribute]: order
        }
      }
    } else {
      orderBy = {
        [attribute]: order
      }
    }
    const users = await db.users.findMany({

      skip: (pagesUtils.pageNumber - 1) * pagesUtils.pageSize,
      take: pagesUtils.pageSize,
      orderBy,
      include: {
        role: true,
      },
    });

    return {
      message: "Get all users",
      info: {
        pagination: createPaginator(
          users,
          pagesUtils.pageNumber,
          totalUsers,
          pagesUtils.pageSize,
        ),
        users,
        totalUsers,
      }
    }
  } catch (error) {
    console.error("Error ato get all users:", error);
    throw new Error("Error ato get all users");
  }



};
