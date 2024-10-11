import { db } from "../config";
import { extractMainPath } from "../utils";
import { ExpressController, Privilege } from "../types";

export const checkPermission: ExpressController = async (req, res, next) => {
  try {
    const { roleId, role } = req.authUser;

    const method = req.method as keyof typeof Privilege;
    const requestedPath = extractMainPath(req.url);
    const permissions = await db.permissions.findFirst({
      where: {
        roleId: roleId,
        status: true,
        privilege: Privilege[method],
        module: { name: requestedPath },
      },
      include: { module: true },
    });

    const moduleFind = await db.modules.findFirst({
      where: {
        name: requestedPath
      }
    })

    if (!moduleFind) {
      throw new Error('Endpoint nof found')
    }

    if (!permissions) {
      throw new Error(`${role.name} does not have permission to perform this action`)

    }

    const { module } = permissions;

    if (module.name !== requestedPath) {
      throw new Error(`${role.name} Unauthorized to access this module`)
    }

    next();

  } catch (error) {

    console.error("Error checking permissions:", error);
    next(error)

  }
};
