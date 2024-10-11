import { db } from "../../config";
import { extractDecodedToken } from "../../utils";

export const activateNewAccount = async (token: string) => {
    try {

        const { email }: any = extractDecodedToken(token);

        const updatedUser = await db.users.update({
            where: { email: email },
            data: { status: true },
        });

        return { menssage: 'Activated account successful', updatedUser }

    } catch (error: any) {
        console.error("Error validating email:", error);
        throw new Error("Failed to validate email");
    }
};