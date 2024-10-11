import { Request, Response, NextFunction } from "express";

interface CustomErrorFormat {
    message: string;
    type: string;
    value?: any;
    path?: string;
    location?: string;
}

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Error:", err.message);

    const errors: CustomErrorFormat[] = [];

    if (err.errors && Array.isArray(err.errors)) {
        err.errors.forEach((error: any) => {
            errors.push({
                message: error.message || "Invalid input",
                type: error.type || "field",
                value: error.value,
                path: error.path,
                location: error.location || "body"
            });
        });
    } else {
        errors.push({
            message: err.message || "Internal Server Error",
            type: "general",
            path: "Internal Server Error",
        });
    }

    res.status(500).json({ errors });
};
