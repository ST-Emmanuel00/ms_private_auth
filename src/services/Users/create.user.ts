import { db } from "../../config";
import { generateHashPassword, useSend } from "../../utils";
import { generateJWT } from "../generate.jwt.service";
import { sendEmail } from "../send.email.service";
import { welcomeEmail } from '../../mails';

export const create = async (body: any) => {
  try {
    const { password, birthday, ...data } = body;

    const user = await db.users.create({
      data: {
        status: false,
        password: generateHashPassword(password),
        birthday: new Date(birthday),
        name: data.name,
        lastName: data.lastName,
        docType: data.docType,
        docNumber: data.docNumber,
        sex: data.sex,
        email: data.email,
        phoneNumber: data.phoneNumber,
        roleId: data.roleId,
      },
    });

    const role = await db.roles.findUnique({
      where: {
        id: user.roleId,
      },
      select: {
        name: true, 
      },
    });

    const token = await generateJWT({ email: user.email }, 300);

    const emailBody = welcomeEmail(
      `${user.name} ${user.lastName}`,  
      user.name,                        
      token,
      role?.name || "Usuario"                             
    );

    const send = await sendEmail({
      to: user.email,
      subject: "Email Verification",
      htmlBody: emailBody,
    });

    return useSend("New user created", { newUser: user, token });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw new Error('Error al crear usuario');
  }
};
