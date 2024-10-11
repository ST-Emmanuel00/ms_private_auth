import { CustomValidator } from "express-validator";
import { db } from "../../config";
import bcrypt from 'bcrypt';

export const validateLoginCredentials: CustomValidator = async (
    value: string,
    { req }
  ) => {
    const { email, password } = req.body;
  
    const user = await db.users.findUnique({
      where: {
        email: value,
      },
    });
    if (!user) {
      throw new Error("Incorrect username or password. - email");
    }
  
    const validPassword = bcrypt.compareSync(password, user.password);
  
    if (!validPassword) {
      throw new Error("Incorrect username or password. - password");
    } else if (user.status === false) {
      throw new Error(`The user is disabled ${email}`);
    }
  
    return true;
  };