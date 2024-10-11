import { CustomValidator } from "express-validator";
import { db } from "../../config";

export const validateRoleExistsOnDb: CustomValidator = async (
    value: string,
    { req }
  ) => {
    const role = await db.roles.findUnique({
      where: {
        id: value,
      },
    });
  
    if (!role) {
      throw new Error(`The specified role does not exist in the database`);
    }
    return true;
  };