import { CustomValidator } from "express-validator";

export const passwordConfirmation: CustomValidator = async (
    value: string,
    { req }
) => {
    const { password, passwordConfirmation } = req.body;

    const isPasswordMatch = password === passwordConfirmation;

    if (!isPasswordMatch) {
        throw new Error("Passwords do not match.");
    }

    return true;
};