import { NextFunction, Request, Response } from "express";
import { User } from "./users/user.types";

export interface CustomRequest extends Request {
  uuid?: string;
  authUser?: any;
}
export type ExpressController = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => Promise<void>;
