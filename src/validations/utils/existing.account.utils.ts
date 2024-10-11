import { CustomValidator } from "express-validator";
import { db } from "../../config";

export const validateExistingAccount: CustomValidator = async (
    value: string,
    { req }
  ) => {
    const user = await db.users.findUnique({
      where: {
        email: value,
      },
    });
  
    if (!user) {
      throw new Error(`No user with this account exists in the system`);
    }
    return true;
  };
  