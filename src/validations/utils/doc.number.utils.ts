import { CustomValidator } from "express-validator";
import { db } from "../../config";

export const validateUniqueDocNumberOnDb: CustomValidator = async (
    value: string,
    { req }
  ) => {
    const user = await db.users.findUnique({
      where: {
        docNumber: value,
      },
    });
  
    if (user) {
      throw new Error(
        `The document number ${value} has already been registered.`
      );
    }
    return true;
  };

 export  const validateDocnumberUpdate: CustomValidator = async (
    value: string,
    { req }
  ) => {
    const { id } = req.params || {};
    const userFound = await db.users.findFirst({
      where: {
        id: id,
      },
    });
  
    if (userFound?.docNumber === value) {
      return true;
    } else {
      throw new Error(`Docnumber ${value} is already in use.`);
    }
  };