import jwt from "jsonwebtoken";
import { envs } from "../config";

export const generateJWT = (payload: any, expiresIn: number = 7200) => {
  return new Promise<string>((resolve, reject) => {
    const secretKey = envs.JWT_SEED;

    if (!secretKey) {
      reject(new Error("The environment variable SECRETKEY is not defined"));
      return;
    }

    jwt.sign(
      payload,
      secretKey,
      {
        expiresIn,
      },
      (error, token) => {
        if (error) {
          console.error("No token: " + error);
          reject("No token: " + error);
          return;
        }

        if (!token) {
          reject(new Error("Undefind token"));
          return;
        }

        resolve(token);
      }
    );
  });
};
