import { CustomValidator } from "express-validator";
import { extractDecodedToken } from "../../utils";

export const validateToken: CustomValidator = async (value: string) => {
    const decoded = extractDecodedToken(value);
    console.log("decoded:", decoded);
    return true;
  };