import nodemailer from "nodemailer";
import { env } from "process";

export const emailServices = () => {
  const transporter = nodemailer.createTransport({
    service: env.MAILER_SERVICE,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: env.MAILER_EMAIL,
      pass: env.MAILER_SECRET_KEY,
    },

  });

  return transporter
};