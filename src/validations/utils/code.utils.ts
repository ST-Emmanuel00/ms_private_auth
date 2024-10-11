import { CustomValidator } from "express-validator";
import { extractDecodedToken } from "../../utils";

export const isValidCode: CustomValidator = async (value: string, { req }) => {
    const { code: userCode } = req.body;
    const { code }: any = extractDecodedToken(value);
  
    console.log("code:", code, typeof code);
  
    if (userCode !== code) {
      throw new Error("Invalid code");
    }
  
    return true;
  };