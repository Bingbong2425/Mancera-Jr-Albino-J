import nodemailer from "nodemailer";
import "dotenv/config";
import { emailData } from "../types/node-mailer-type";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 25,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const SendEmail = async (data: emailData): Promise<boolean> => {
  try {
    let info = await transporter.sendMail(data);
    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
};

export { SendEmail };