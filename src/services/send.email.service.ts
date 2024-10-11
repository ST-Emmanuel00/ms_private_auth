import { emailServices } from "../config";

interface SendEmailOptions {
  to: string;
  subject: string;
  htmlBody: string;
}
export const sendEmail = async (options: SendEmailOptions) => {
  try {
    const { to, subject, htmlBody } = options;

    const emailService = emailServices();

    const sendInformation = await emailService.sendMail({
      to: to,
      subject: subject,
      html: htmlBody,
    });

    return sendInformation;
  } catch (error) {
    console.error(`Error to send email ${error}`);
  }
};
