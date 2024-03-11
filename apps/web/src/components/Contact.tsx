"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/send-email";
import { Status } from "@/actions/types";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 font-semibold">
        Please contact me directly at{" "}
        <a className="underline font-medium font-serif" href="mailto:chetan.gupta32123@gmail.com">
          chetan.gupta32123@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          const res = await sendEmail(formData);
          if (res.status === Status.FAILURE) {
            toast.error("An Error occoured please try again later!");
            return;
          }
          if (res.status === Status.INVALIDEMAIL) {
            toast.error("The Email Address is invalid, please try again with a different email!");
            return;
          }
          if (res.status === Status.INVALIDMESSAGE) {
            toast.error("The Message should be less than 5000 characters");
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack  transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
