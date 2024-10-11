import { CustomValidator } from "express-validator";
import { formatDate } from "../../utils";

export const validateBirthday: CustomValidator = async (value: string, { req }) => {
    const { year } = formatDate(value);
    const { year: current } = formatDate(new Date().toString());
    const age = current - year;

    if (age < 14) {
        throw new Error("You must be at least 14 years old");
    }
    return true;
};