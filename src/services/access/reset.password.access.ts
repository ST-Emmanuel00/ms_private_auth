import { db } from "../../config";
import { passwordResetConfirmation } from "../../mails";
import { extractDecodedToken, generateHashPassword } from "../../utils";
import { sendEmail } from "../send.email.service";

export const resetPassword = async (token: string, password: string) => {
    try {

        const { id }: any = extractDecodedToken(token);

        const updatedUser = await db.users.update({
            where: { id },
            data: { password: generateHashPassword(password) },
        });


        // Generar el cuerpo del correo electrónico
        const emailBody = passwordResetConfirmation(updatedUser.name);

        // Enviar el correo electrónico
        await sendEmail({
            to: updatedUser.email,
            subject: "Password Successfully Changed",
            htmlBody: emailBody,
        });

        return { message: "Your password has been reset successfully. You can now log in with your new password.", info: { updatedUser } }

    } catch (error: any) {

        console.error("Error resetting password:", error);
        throw new Error("Error resetting password");

    }
};