import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const errorCatcher = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  interface IError {
    msg: string;
    type: string;
    value: any;
    path: string;
    location: string;
  }

  const errors = validationResult(req)
    .formatWith(({ msg, type, value, path, location }: any) => {
      return {
        message: msg,
        type: type,
        value: value,
        path: path,
        location: location,
      };
    })
    .array();

  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  }

  next();
};
