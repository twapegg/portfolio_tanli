import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const { email, message } = await request.json();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"John Stanley Altonaga" <johntaltonaga@gmail.com>', // sender address
    to: "johntaltonaga@gmail.com", // list of receivers
    subject: "Message from Portfolio", // Subject line
    text: `Email: ${email}\nMessage: ${message}`, // plain text body
  });

  return NextResponse.json(
    { message: "Message sent successfully!" },
    { status: 201 }
  );
};
