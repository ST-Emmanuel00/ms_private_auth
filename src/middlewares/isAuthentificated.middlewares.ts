import { cookie, CustomValidator } from "express-validator";
import { db } from "../config";
import { extractDecodedToken } from "../utils";
import { errorCatcher } from "../libs";

const isAuthenticated: CustomValidator = async (value: string, { req }) => {
  const decoded: any = extractDecodedToken(value);

  const authUser = await db.users.findUnique({
    where: {
      id: decoded.uuid,
    },
    include: {
      role: true,
    },
  });

  if (!authUser) {
    throw new Error("User not found");
  }

  if (!authUser.status) {
    throw new Error("Invalid credentials - user inactive");
  }

  req.authUser = authUser;
  return true;
};

export const authValidator = [
  cookie("disruptiveToken").custom(isAuthenticated),
  errorCatcher,
];
