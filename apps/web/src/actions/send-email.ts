"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { Status } from "./types";

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
  try {
    await resend.emails.send({
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
