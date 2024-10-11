import jwt from "jsonwebtoken";
import { envs } from "../config";

export const extractDecodedToken = (
  token: string,
  secret: string = envs.JWT_SEED
) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      throw new Error("Your session has expired. Please log in again.");
    } else {
      throw new Error("There was a problem verifying your identity. Please log in.");
    }
  }
};
