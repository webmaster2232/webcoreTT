import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "webcorett@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactNotificationEmail(
  firstName: string,
  lastName: string,
  email: string,
  service: string | null,
  message: string
): Promise<void> {
  const mailOptions = {
    from: "webcorett@gmail.com",
    to: "webcorett@gmail.com",
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${service ? `<p><strong>Service Interested In:</strong> ${service}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
