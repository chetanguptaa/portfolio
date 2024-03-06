"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export enum Status {
  "SUCCESS",
  "FAILURE",
  "INVALIDEMAIL",
  "INVALIDMESSAGE",
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      status: Status.INVALIDEMAIL,
    };
  }
  if (!validateString(message, 5000)) {
    return {
      status: Status.INVALIDMESSAGE,
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "chetanguptaaaa21@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    return {
      status: Status.SUCCESS,
    };
  } catch (error: unknown) {
    return {
      status: Status.FAILURE,
    };
  }
};
