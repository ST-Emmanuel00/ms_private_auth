import { db, envs } from "../../config";
import { verificationEmail } from "../../mails";
import { generateRandomCode } from "../../utils";
import { generateJWT } from "../generate.jwt.service";
import { sendEmail } from "../send.email.service";

export const requestPasswordReset = async (email: string) => {
  try {
    const user: any = await db.users.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const code = generateRandomCode();

    // Generar el token JWT que expira en 300 segundos
    const token = await generateJWT({ id: user.id, code }, 300);

    // Usar el nuevo template de correo 'VerificationEmail'
    const emailBody = verificationEmail(
      `${user.name} ${user.lastName}`,
      code,
      `${envs.WEB_SERVICE}verify-code/${token}`
    );

    // Enviar el correo electrónico
    const send = await sendEmail({
      to: user.email,
      subject: "Password Recovery Code",
      htmlBody: emailBody,
    });

    return { message: "Has been sent to your email address with the verification code", info: { email, code, token } };
  } catch (error: any) {
    console.error("Error to request password reset:", error);
    throw new Error("Error to request password reset");
  }
};
