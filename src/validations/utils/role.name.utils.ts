import { CustomValidator } from "express-validator";
import { db } from "../../config";

export const validateRoleExistsOnDbByName: CustomValidator = async (
    value: string,
    { req }
  ) => {
    const role = await db.roles.findFirst({
      where: {
        name: value,
      },
    });
  
    if (role) {
      throw new Error(`The role name "${value}" has already been registered.`);
    }
    return true;
  };