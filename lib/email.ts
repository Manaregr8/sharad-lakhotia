import nodemailer from "nodemailer";
import type { ContactFormInput } from "./validators";

const getTransporter = () =>
  nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD
    }
  });

export async function sendContactEmail(data: ContactFormInput) {
  if (!process.env.EMAIL_FROM) {
    throw new Error("EMAIL_FROM is not configured");
  }

  const transporter = getTransporter();

  const plainText = `New message from ${data.name} (${data.email})\n\nPhone: ${data.phone}\n\n${data.message}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_FROM,
    subject: `New appointment request from ${data.name}`,
    text: plainText,
    html: `
      <h2>New appointment request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      <p>${data.message}</p>
    `
  });
}
