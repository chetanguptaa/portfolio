import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
// import Mailgun from "mailgun.js";
// import formData from "form-data";
// import { redirect } from "next/navigation";
// import { Resend } from "resend";
// import React from "react";
// import VerificationEmail from "@/email/verification-email";
// import { getErrorMessage } from "@/lib/utils";

// const API_KEY = process.env.MAILGUN_API_KEY || "";
// const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function POST(request: NextRequest) {
  try {
    const { email }: { email: string } = await request.json();
    const subscriber = await prisma.subscriber.create({
      data: {
        email,
      },
    });
    const token = await prisma.activateToken.create({
      data: {
        subscriberId: subscriber.id,
        token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ""),
      },
    });
    // const mailgun = new Mailgun(formData);
    // const client = mailgun.client({ username: "api", key: API_KEY });
    // return NextResponse.json({
    //   email: email,
    // });
    // const mailgun = new Mailgun(formData);
    // const client = mailgun.client({ username: "api", key: API_KEY });
    // const messageData = {
    //   from: `Example Email <hello@${DOMAIN}>`,
    //   to: subscriber.email,
    //   subject: "Please Activate Your Account",
    //   text: `Hello, please activate your account by clicking this link: ${
    //     process.env.APP_URL_DEV || ""
    //   }/blogs/subscribe/validate/success/${token.token}`,
    // };
    // client.messages.create(DOMAIN, messageData).then((res) => console.log(res));
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
