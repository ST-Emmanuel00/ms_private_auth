import { extractDecodedToken } from "../../utils";

export const verifyCode = async (token: string, userCode: string) => {
    try {

        const { code }: any = extractDecodedToken(token);

        const isCodeValid = userCode === code;

        return { message: "The code is valid. You can now reset your password.", info: { code, userCode, isCodeValid } };

    } catch (error: any) {
        console.error("Error validing code:", error);
        throw new Error("Error validing code");
    }
};