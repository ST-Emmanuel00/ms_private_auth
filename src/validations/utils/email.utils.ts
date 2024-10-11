import { CustomValidator } from "express-validator";
import { db } from "../../config";

export const validateUniqueEmailOnDb: CustomValidator = async (
    value: string,
    { req }
  ) => {
    const user = await db.users.findUnique({
      where: {
        email: value,
      },
    });
  
    if (user) {
      throw new Error(`Email ${value} is already in use.`);
    }
    return true;
  };
  